import { useEffect, useState } from 'react';

const Highlight = () => {
  const [displayText, setDisplayText] = useState('');
  const fullText = "Drive Like a Pro";

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setDisplayText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 150);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative py-24 px-6 sm:px-8 overflow-hidden bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Enhanced decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-20">
        <div className="absolute top-20 left-20 w-32 h-32 bg-blue-400 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-indigo-400 rounded-full filter blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-purple-300 rounded-full filter blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image Section */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/images/driving-instructor.jpg"
                alt="Professional Driving Instructor"
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-xl">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900">10K+</p>
                  <p className="text-gray-600">Pro Drivers</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Content Section */}
          <div className="space-y-8">
            <div className="inline-flex items-center bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg">
              <span className="w-3 h-3 bg-blue-500 rounded-full mr-3 animate-pulse"></span>
              <span className="text-base font-semibold text-blue-600">Excellence in Driving</span>
            </div>

            <h2 className="text-5xl sm:text-6xl md:text-7xl font-bold text-gray-900">
              <span className="relative">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">
                  {displayText}
                  <span className="animate-blink">|</span>
                </span>
                <span className="absolute -bottom-2 left-0 w-full h-3 bg-yellow-300/30 -rotate-1"></span>
              </span>
            </h2>

            <p className="text-xl text-gray-600 leading-relaxed">
              Master the art of driving with our elite instructors. From beginners to advanced techniques, we'll transform you into a confident, skilled driver ready for any road.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                {
                  icon: (
                    <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  ),
                  title: "Elite Training",
                  description: "Learn advanced driving techniques from pros"
                },
                {
                  icon: (
                    <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  ),
                  title: "Master the Road",
                  description: "Become a confident driver in any situation"
                }
              ].map((feature, index) => (
                <div key={index} className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 transform hover:-translate-y-1">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl flex items-center justify-center mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white rounded-xl hover:from-blue-700 hover:via-indigo-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl font-semibold text-lg transform hover:-translate-y-1">
                Start Your Journey
              </button>
              <button className="px-8 py-4 bg-white text-blue-600 rounded-xl hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl font-semibold text-lg border border-blue-200">
                Explore Courses
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Highlight;