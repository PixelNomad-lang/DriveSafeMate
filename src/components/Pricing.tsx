const Pricing = () => (
  <section id="pricing" className="py-20 px-6 bg-gradient-to-br from-blue-50 via-gray-50 to-indigo-50">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-5xl font-bold text-gray-900 mb-4 tracking-tight">
          Find Your <span className="text-blue-600">Perfect Plan</span>
        </h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Quality driving education tailored to your needs and budget
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {/* Basic Plan */}
        <div className="relative p-8 bg-white rounded-3xl shadow-lg flex flex-col border border-gray-200 hover:shadow-xl transition-all duration-300 overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-white opacity-70"></div>
          <div className="relative z-10">
            <div className="mb-6">
              <div className="h-40 w-full mb-6 rounded-xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                  alt="Beginner driving lesson" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <span className="text-4xl font-bold text-gray-900">$75</span>
              <span className="text-gray-500">/course</span>
              <h3 className="text-2xl font-semibold mt-2 text-gray-800">Starter Package</h3>
            </div>
            <ul className="mb-8 space-y-3 text-gray-600">
              <li className="flex items-start">
                <svg className="w-5 h-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>5 personalized driving lessons</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>Flexible scheduling</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>Basic road safety training</span>
              </li>
            </ul>
            <button className="w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl font-semibold shadow-sm hover:shadow-md transition-all hover:from-blue-600 hover:to-blue-700">
              Get Started
            </button>
          </div>
        </div>

        {/* Popular Plan */}
        <div className="relative p-8 bg-white rounded-3xl shadow-2xl flex flex-col border-2 border-yellow-400 transform scale-[1.02] hover:shadow-2xl transition-all duration-300 overflow-hidden group z-10">
          <div className="absolute top-0 right-0 bg-yellow-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
            MOST POPULAR
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-yellow-50 to-white opacity-80"></div>
          <div className="relative z-10">
            <div className="mb-6">
              <div className="h-40 w-full mb-6 rounded-xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1502877338535-766e1452684a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                  alt="Intermediate driving lesson" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <span className="text-4xl font-bold text-gray-900">$80</span>
              <span className="text-gray-500">/course</span>
              <h3 className="text-2xl font-semibold mt-2 text-gray-800">Standard Package</h3>
            </div>
            <ul className="mb-8 space-y-3 text-gray-600">
              <li className="flex items-start">
                <svg className="w-5 h-5 text-yellow-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>10 comprehensive driving lessons</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-yellow-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>Flexible scheduling</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-yellow-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>Intermediate road safety & traffic rules</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-yellow-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>Progress tracking</span>
              </li>
            </ul>
            <button className="w-full px-6 py-3 bg-gradient-to-r from-yellow-500 to-yellow-600 text-white rounded-xl font-semibold shadow-sm hover:shadow-md transition-all hover:from-yellow-600 hover:to-yellow-700">
              Get Started
            </button>
          </div>
        </div>

        {/* Premium Plan */}
        <div className="relative p-8 bg-white rounded-3xl shadow-lg flex flex-col border border-gray-200 hover:shadow-xl transition-all duration-300 overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-b from-indigo-50 to-white opacity-70"></div>
          <div className="relative z-10">
            <div className="mb-6">
              <div className="h-40 w-full mb-6 rounded-xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                  alt="Advanced driving lesson" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <span className="text-4xl font-bold text-gray-900">$85</span>
              <span className="text-gray-500">/course</span>
              <h3 className="text-2xl font-semibold mt-2 text-gray-800">Premium Package</h3>
            </div>
            <ul className="mb-8 space-y-3 text-gray-600">
              <li className="flex items-start">
                <svg className="w-5 h-5 text-indigo-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>15 advanced driving lessons</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-indigo-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>Flexible scheduling</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-indigo-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>Advanced road safety & defensive driving</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-indigo-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>Free theory classes included</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-indigo-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>Mock driving test</span>
              </li>
            </ul>
            <button className="w-full px-6 py-3 bg-gradient-to-r from-indigo-500 to-indigo-600 text-white rounded-xl font-semibold shadow-sm hover:shadow-md transition-all hover:from-indigo-600 hover:to-indigo-700">
              Get Started
            </button>
          </div>
        </div>
      </div>

      <div className="text-center mt-12 text-gray-500">
        <p>All plans include certified instructors and insured vehicles</p>
      </div>
    </div>
  </section>
);

export default Pricing;