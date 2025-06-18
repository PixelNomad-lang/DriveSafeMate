export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "New Driver",
      content: "Drive Safe Mate made learning to drive so easy! My instructor was incredibly patient and professional. I passed my test on the first try thanks to their excellent teaching methods.",
      rating: 5,
      image: "/images/testimonials/sarah-johnson.jpg", // Replace with actual image path
      date: "March 2024"
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "International License Conversion",
      content: "As someone who needed to convert my foreign license, the team provided perfect guidance. Their defensive driving course gave me confidence in Australian road conditions.",
      rating: 5,
      image: "/images/testimonials/michael-chen.jpg",
      date: "February 2024"
    },
    {
      id: 3,
      name: "The Wilson Family",
      role: "Teen Driver Education",
      content: "Both our teenagers learned with Drive Safe Mate. We appreciated their focus on safety and responsibility. The instructors were like family friends by the end!",
      rating: 4,
      image: "/images/testimonials/wilson-family.jpg",
      date: "January 2024"
    },
    {
      id: 4,
      name: "Margaret O'Connor",
      role: "Senior Driver Refresh",
      content: "After 40 years of driving, I needed an update on modern road rules. My instructor was so respectful and helpful. I feel much safer on the roads now.",
      rating: 5,
      image: "/images/testimonials/margaret-oconnor.jpg",
      date: "December 2023"
    }
  ];

  const stats = [
    { value: "98%", label: "First-Time Pass Rate" },
    { value: "500+", label: "Students Taught" },
    { value: "4.9/5", label: "Average Rating" },
    { value: "10+", label: "Years Experience" }
  ];

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section with Dynamic Background */}
      <section 
        className="relative py-24 px-4 sm:px-6 lg:px-8 bg-blue-900 text-white overflow-hidden"
        style={{
          backgroundImage: "url('/images/driving-school-bg.jpg')", // Replace with your image
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundBlendMode: "multiply"
        }}
      >
        <div className="absolute inset-0 bg-blue-900 opacity-75"></div>
        <div className="relative max-w-7xl mx-auto text-center z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Hear From Our Driving Community</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Real stories from real students who found confidence on the road with Drive Safe Mate
          </p>
          <div className="mt-8 flex justify-center">
            <button className="px-8 py-3 bg-white text-blue-800 rounded-lg hover:bg-gray-100 transition-colors duration-300 font-semibold flex items-center">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Watch Video Testimonials
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Why Learners Choose Us</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="p-6 bg-blue-50 rounded-lg">
                <p className="text-3xl md:text-4xl font-bold text-blue-700 mb-2">{stat.value}</p>
                <p className="text-gray-600 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Customer Experiences</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear directly from our students about their journey to becoming confident, safe drivers
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {testimonials.map((testimonial) => (
              <div 
                key={testimonial.id} 
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div className="p-8">
                  <div className="flex items-start mb-6">
                    <div className="relative mr-6">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name}
                        className="w-20 h-20 rounded-full object-cover border-4 border-blue-100"
                      />
                      <div className="absolute -bottom-2 -right-2 bg-blue-600 text-white rounded-full p-2">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800">{testimonial.name}</h3>
                      <p className="text-blue-600 font-medium">{testimonial.role}</p>
                      <p className="text-gray-500 text-sm mt-1">{testimonial.date}</p>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-6">"{testimonial.content}"</p>
                  <div className="flex items-center justify-between">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className={`w-5 h-5 ${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <button className="text-blue-600 hover:text-blue-800 font-medium flex items-center">
                      <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
                      </svg>
                      Share
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Customer Interaction Section */}
          <div className="mt-16 bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/2 p-10 bg-blue-50 flex flex-col justify-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Share Your Experience</h3>
                <p className="text-gray-600 mb-6">
                  Are you a Drive Safe Mate graduate? We'd love to hear about your journey to becoming a safe, confident driver.
                </p>
                <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300 font-semibold self-start">
                  Submit Your Story
                </button>
              </div>
              <div className="md:w-1/2">
                <img 
                  src="/images/happy-driver.jpg" // Replace with your image
                  alt="Happy driver"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section with Dynamic Background */}
      <section 
        className="relative py-20 px-4 sm:px-6 lg:px-8 text-white overflow-hidden"
        style={{
          backgroundImage: "url('/images/driving-lesson-bg.jpg')", // Replace with your image
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed"
        }}
      >
        <div className="absolute inset-0 bg-blue-900 opacity-85"></div>
        <div className="relative max-w-4xl mx-auto text-center z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Start Your Safe Driving Journey Today</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join our community of confident drivers and experience the Drive Safe Mate difference.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="px-8 py-3 bg-white text-blue-700 rounded-lg hover:bg-gray-100 transition-colors duration-300 font-semibold">
              Book Your First Lesson
            </button>
            <button className="px-8 py-3 border-2 border-white text-white rounded-lg hover:bg-blue-800 transition-colors duration-300 font-semibold">
              Call Now: (02) 1234 5678
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}