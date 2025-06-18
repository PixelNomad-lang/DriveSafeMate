const CourseIntro = () => {
  const courses = [
    {
      title: "Foundations of Driving",
      description: "Master the essentials with our patient instructors in a stress-free environment",
      features: [
        "Vehicle controls and operation",
        "Basic maneuvers and parking",
        "Neighborhood driving practice",
        "Building confidence behind the wheel"
      ],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"/>
        </svg>
      ),
      image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
      accentColor: "bg-yellow-100 text-yellow-800"
    },
    {
      title: "Urban Driving Pro",
      description: "Navigate city streets like a professional with real-world scenarios",
      features: [
        "Heavy traffic navigation",
        "Complex intersections",
        "Parallel parking mastery",
        "Defensive driving techniques"
      ],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
        </svg>
      ),
      image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
      accentColor: "bg-yellow-100 text-yellow-800"
    },
    {
      title: "Advanced Road Mastery",
      description: "Elevate your skills for highway and challenging conditions",
      features: [
        "Highway merging and lane changes",
        "Night driving techniques",
        "Adverse weather handling",
        "Emergency maneuvers"
      ],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
        </svg>
      ),
      image: "https://images.unsplash.com/photo-1493238792000-8113da705763?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
      accentColor: "bg-yellow-100 text-yellow-800"
    }
  ];

  return (
    <section id="courses" className="py-24 px-4 sm:px-6 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-yellow-100 rounded-full mb-6">
            <span className="text-sm font-semibold text-yellow-800">
              Our Curriculum
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Discover Your <span className="relative inline-block">
              Learning Path
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-yellow-400 to-yellow-600"></span>
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Structured programs designed to build skills progressively, from beginner to advanced
          </p>
        </div>

        {/* Course Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <div key={index} className="group relative">
              {/* Card Container */}
              <div className="h-full bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 group-hover:shadow-xl group-hover:-translate-y-1">
                {/* Image Section */}
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src={course.image} 
                    alt={course.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                  <div className={`absolute top-4 left-4 w-14 h-14 rounded-xl ${course.accentColor} flex items-center justify-center shadow-lg transform transition-transform duration-300 group-hover:scale-110`}>
                    {course.icon}
                  </div>
                </div>
                
                {/* Content Section */}
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{course.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{course.description}</p>
                  
                  <div className="mb-8">
                    <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">You'll Learn:</h4>
                    <ul className="space-y-3">
                      {course.features.map((feature, i) => (
                        <li key={i} className="flex items-start group/item">
                          <div className="flex-shrink-0 w-6 h-6 rounded-full bg-yellow-100 flex items-center justify-center mr-3 mt-0.5">
                            <svg className="w-4 h-4 text-yellow-600" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                            </svg>
                          </div>
                          <span className="text-gray-700 group-hover/item:text-yellow-700 transition-colors">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <button className="w-full px-6 py-3 bg-gradient-to-r from-yellow-500 to-yellow-600 text-white rounded-xl font-semibold shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-[1.02] flex items-center justify-center space-x-2 group-hover:from-yellow-600 group-hover:to-yellow-700">
                    <span>Explore Course</span>
                    <svg className="w-4 h-4 transform transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-20">
          <div className="inline-flex flex-col items-center">
            <button className="px-8 py-4 bg-gradient-to-r from-yellow-500 to-yellow-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:from-yellow-600 hover:to-yellow-700">
              Schedule a Free Consultation
            </button>
            <p className="mt-4 text-gray-500 text-sm">
              Let's discuss which course fits your goals
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseIntro;