import { useState, useEffect } from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      quote: "The instructors were incredibly patient and knowledgeable. I passed my driving test on the first try thanks to their excellent training!",
      author: "Alex Johnson",
      role: "New Driver",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      id: 2,
      quote: "I was nervous about driving after years of not being behind the wheel. The refresher course built my confidence back up quickly.",
      author: "Sarah Miller",
      role: "Returning Driver",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
      id: 3,
      quote: "The defensive driving course taught me skills that have made me a much safer driver. I recommend this school to all my friends!",
      author: "Michael Chen",
      role: "Experienced Driver",
      avatar: "https://randomuser.me/api/portraits/men/75.jpg"
    },
    {
      id: 4,
      quote: "My teenager learned so much from their beginner program. The instructors were great at communicating with young drivers.",
      author: "Lisa Rodriguez",
      role: "Parent",
      avatar: "https://randomuser.me/api/portraits/women/63.jpg"
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState('right');

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection('right');
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const getTestimonialPosition = (index) => {
    if (index === activeIndex) return 'translate-x-0 opacity-100';
    if (index === (activeIndex + 1) % testimonials.length) {
      return direction === 'right' 
        ? 'translate-x-full opacity-0' 
        : 'translate-x-full opacity-0';
    }
    return '-translate-x-full opacity-0';
  };

  return (
    <section id="testimonials" className="py-20 px-4 sm:px-6 bg-gradient-to-br from-blue-50 to-indigo-50 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block mb-4 px-4 py-1 text-sm font-semibold text-blue-600 bg-blue-100 rounded-full">
            Student Stories
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Hear From Our <span className="relative inline-block">Happy Drivers
              <svg className="absolute -bottom-2 left-0 w-full h-3 text-yellow-400" viewBox="0 0 200 20">
                <path d="M0,10 Q50,5 100,10 T200,10" fill="none" stroke="currentColor" strokeWidth="3"/>
              </svg>
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Real experiences from our driving school community
          </p>
        </div>

        <div className="relative h-96 md:h-80 w-full max-w-4xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.id}
              className={`absolute inset-0 transition-all duration-500 ease-in-out ${getTestimonialPosition(index)}`}
            >
              <div className="h-full bg-white rounded-xl shadow-lg p-8 flex flex-col md:flex-row items-center">
                <div className="md:w-1/3 mb-6 md:mb-0 flex justify-center">
                  <div className="relative">
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.author} 
                      className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-md"
                    />
                    <div className="absolute -bottom-2 -right-2 bg-blue-500 text-white rounded-full p-2 shadow-lg">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"/>
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="md:w-2/3 md:pl-8">
                  <blockquote className="text-lg md:text-xl italic text-gray-700 mb-6">
                    "{testimonial.quote}"
                  </blockquote>
                  <div className="text-right">
                    <p className="font-bold text-gray-900">{testimonial.author}</p>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-8 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setDirection(index > activeIndex ? 'right' : 'left');
                setActiveIndex(index);
              }}
              className={`w-3 h-3 rounded-full transition-colors ${index === activeIndex ? 'bg-blue-600' : 'bg-gray-300'}`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;