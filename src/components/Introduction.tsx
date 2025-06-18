const Introduction = () => (
  <section className="relative min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 overflow-hidden">
    {/* Animated Background Elements */}
    <div className="absolute inset-0">
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-indigo-100 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
      </div>
    </div>

    {/* Main Content */}
    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-32">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        {/* Left Column - Text Content */}
        <div className="relative z-10">
          {/* Live Status Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white shadow-lg mb-8 border border-blue-100">
            <span className="flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </span>
            <span className="ml-3 text-sm font-medium text-gray-600">Live Classes Available</span>
          </div>

          {/* Main Heading with Gradient */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="block text-gray-900">Master the Road</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">With Confidence</span>
          </h1>

          {/* Description with Icon */}
          <div className="flex items-start space-x-4 mb-12">
            <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <p className="text-xl text-gray-600 max-w-2xl leading-relaxed">
              Australia's premier driving school, transforming nervous beginners into confident, skilled drivers through our innovative teaching methods.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-6">
            <button className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-700 to-indigo-700 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
              <span className="relative flex items-center text-white font-semibold">
                Start Your Journey
                <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
            </button>
            <button className="px-8 py-4 bg-white text-gray-700 rounded-xl hover:bg-gray-50 transition-colors duration-300 font-semibold shadow-lg hover:shadow-xl border border-gray-200">
              View Programs
            </button>
          </div>

          {/* Stats with Hover Effects */}
          <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-8">
            {[
              { value: "98%", label: "Pass Rate", icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" },
              { value: "15+", label: "Years Experience", icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" },
              { value: "50+", label: "Expert Instructors", icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" },
              { value: "10K+", label: "Graduates", icon: "M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" }
            ].map((stat, index) => (
              <div key={index} className="group bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mb-4 group-hover:bg-blue-600 transition-colors duration-300">
                  <svg className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={stat.icon} />
                  </svg>
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column - Visual Elements */}
        <div className="relative">
          {/* Main Image with Overlay */}
          <div className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2100&q=80"
              alt="Drive Safe Mate"
              className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-white/80 to-transparent"></div>
          </div>

          {/* Floating Feature Cards */}
          <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-xl shadow-2xl border border-gray-100 transform hover:-translate-y-2 transition-transform duration-300">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div>
                <div className="text-gray-900 font-semibold">Certified Training</div>
                <div className="text-gray-600 text-sm">Government Approved</div>
              </div>
            </div>
          </div>

          <div className="absolute -top-8 -right-8 bg-white p-6 rounded-xl shadow-2xl border border-gray-100 transform hover:-translate-y-2 transition-transform duration-300">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <div className="text-gray-900 font-semibold">Flexible Hours</div>
                <div className="text-gray-600 text-sm">7 Days a Week</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Introduction;