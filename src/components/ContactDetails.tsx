import { useEffect, useRef } from 'react';

const ContactDetails = () => {
  const mapRef = useRef(null);
  const directionsServiceRef = useRef(null);
  const directionsRendererRef = useRef(null);

  useEffect(() => {
    // Load Google Maps API script
    const loadGoogleMapsScript = () => {
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places,geometry`;
      script.async = true;
      script.defer = true;
      script.onload = initializeMap;
      document.head.appendChild(script);
    };

    // Initialize the map once the script is loaded
    const initializeMap = () => {
      if (window.google && mapRef.current) {
        const map = new window.google.maps.Map(mapRef.current, {
          center: { lat: 40.7128, lng: -74.0060 }, // Default to New York
          zoom: 14,
          styles: [
            {
              featureType: "poi",
              elementType: "labels",
              stylers: [{ visibility: "off" }]
            }
          ]
        });

        // Initialize services
        directionsServiceRef.current = new window.google.maps.DirectionsService();
        directionsRendererRef.current = new window.google.maps.DirectionsRenderer({
          map,
          suppressMarkers: false,
          polylineOptions: {
            strokeColor: '#3b82f6',
            strokeOpacity: 0.8,
            strokeWeight: 5
          },
          preserveViewport: true
        });

        // Add driving school marker
        new window.google.maps.Marker({
          position: { lat: 40.7128, lng: -74.0060 }, // Your driving school location
          map,
          title: 'DriveSafeMate Driving School',
          icon: {
            url: 'https://maps.google.com/mapfiles/kml/shapes/parking_lot_maps.png',
            scaledSize: new window.google.maps.Size(40, 40)
          }
        });

        // Add click listener for demo purposes
        map.addListener('click', (e) => {
          calculateAndDisplayRoute(e.latLng);
        });
      }
    };

    // Calculate route from clicked point to driving school
    const calculateAndDisplayRoute = (destination) => {
      if (!directionsServiceRef.current || !directionsRendererRef.current) return;

      directionsServiceRef.current.route(
        {
          origin: destination,
          destination: { lat: 40.7128, lng: -74.0060 }, // Your driving school location
          travelMode: window.google.maps.TravelMode.DRIVING,
          provideRouteAlternatives: true,
          drivingOptions: {
            departureTime: new Date(),
            trafficModel: 'bestguess'
          }
        },
        (response, status) => {
          if (status === 'OK') {
            directionsRendererRef.current.setDirections(response);
            
            // Animate the route
            const route = response.routes[0];
            const path = route.overview_path;
            const animationPath = new window.google.maps.Polyline({
              path: [],
              geodesic: true,
              strokeColor: '#FF0000',
              strokeOpacity: 1.0,
              strokeWeight: 3
            });
            animationPath.setMap(directionsRendererRef.current.getMap());

            let i = 0;
            const timer = setInterval(() => {
              if (i < path.length) {
                animationPath.getPath().push(path[i]);
                i++;
              } else {
                clearInterval(timer);
              }
            }, 50);
          } else {
            console.error('Directions request failed due to ' + status);
          }
        }
      );
    };

    loadGoogleMapsScript();

    return () => {
      // Clean up
      if (directionsRendererRef.current) {
        directionsRendererRef.current.setMap(null);
      }
    };
  }, []);

  return (
    <section className="bg-gray-100 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-6 text-blue-600">Reach Out to Us</h2>
        
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <p className="text-lg mb-4">
              <span className="font-semibold">Phone:</span> (123) 456-7890<br />
              <span className="font-semibold">Email:</span> info@drivesafemate.com<br />
              <span className="font-semibold">Address:</span> 123 Driving St, City
            </p>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">Get Directions</h3>
              <p className="mb-4">Click anywhere on the map to see driving directions to our driving school!</p>
              <p>We offer special parking for students with dedicated practice areas.</p>
            </div>
          </div>
          
          <div 
            ref={mapRef} 
            className="h-96 w-full rounded-xl shadow-lg border-2 border-blue-300 overflow-hidden"
          />
        </div>
      </div>
    </section>
  );
};

export default ContactDetails;