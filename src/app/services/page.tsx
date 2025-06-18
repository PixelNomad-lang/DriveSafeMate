export default function Services() {
  const services = [
    {
      title: "Beginner Driving Lessons",
      description: "Comprehensive lessons for new drivers covering basics, road rules, and safe driving habits."
    },
    {
      title: "Defensive Driving Courses",
      description: "Advanced techniques to anticipate hazards and prevent accidents in challenging conditions."
    },
    {
      title: "License Test Preparation",
      description: "Tailored sessions to help you pass your driving test with confidence."
    },
    {
      title: "Refresher Courses",
      description: "For experienced drivers who want to update their skills or regain confidence on the road."
    },
    {
      title: "Elderly Driver Assessment",
      description: "Specialized evaluation and training for senior drivers to ensure road safety."
    }
  ];

  return (
    <main className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-blue-800 mb-4">Our Driving Programs</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Quality driving education tailored to your needs. Become a confident and safe driver with Drive Safe Mate.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <svg 
                      className="w-6 h-6 text-blue-600" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24" 
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" 
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800">{service.title}</h3>
                </div>
                <p className="text-gray-600">{service.description}</p>
                <button className="mt-6 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300 text-sm font-medium">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-blue-700 rounded-xl p-8 text-white">
          <h2 className="text-2xl font-bold mb-4">Why Choose Drive Safe Mate?</h2>
          <ul className="space-y-3">
            <li className="flex items-start">
              <svg className="w-5 h-5 mt-1 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Certified and patient instructors</span>
            </li>
            <li className="flex items-start">
              <svg className="w-5 h-5 mt-1 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Modern, well-maintained vehicles</span>
            </li>
            <li className="flex items-start">
              <svg className="w-5 h-5 mt-1 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Flexible scheduling options</span>
            </li>
            <li className="flex items-start">
              <svg className="w-5 h-5 mt-1 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Competitive pricing with package deals</span>
            </li>
          </ul>
          <button className="mt-6 px-6 py-3 bg-white text-blue-700 rounded-lg hover:bg-gray-100 transition-colors duration-300 font-semibold">
            Book Your Lesson Today
          </button>
        </div>
      </div>
    </main>
  );
}