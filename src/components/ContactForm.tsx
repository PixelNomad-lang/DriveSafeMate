const ContactForm = () => (
  <section id="contact" className="py-20 px-4 sm:px-6 bg-gradient-to-r from-blue-900 to-blue-700">
    <div className="max-w-6xl mx-auto">
      <div className="flex flex-col lg:flex-row gap-12 items-center">
        {/* Left Side - Contact Form */}
        <div className="flex-1 bg-white p-8 rounded-xl shadow-2xl">
          <h2 className="text-3xl font-bold text-center mb-6 text-blue-900">
            Book Your Driving Lesson
          </h2>
          
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Full Name</label>
                <input 
                  type="text" 
                  id="name" 
                  placeholder="John Doe" 
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">Phone Number</label>
                <input 
                  type="tel" 
                  id="phone" 
                  placeholder="+1 (555) 123-4567" 
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email Address</label>
              <input 
                type="email" 
                id="email" 
                placeholder="john@example.com" 
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div>
              <label htmlFor="lesson" className="block text-gray-700 font-medium mb-2">Lesson Type</label>
              <select 
                id="lesson" 
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">Select lesson type</option>
                <option value="beginner">Beginner Driving Lesson</option>
                <option value="intermediate">Intermediate Skills</option>
                <option value="advanced">Advanced/Defensive Driving</option>
                <option value="test-prep">Road Test Preparation</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Special Requests</label>
              <textarea 
                id="message" 
                rows="4" 
                placeholder="Any specific needs or questions?" 
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              ></textarea>
            </div>

            <button 
              type="submit" 
              className="w-full bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-bold py-3 px-6 rounded-lg text-lg transition-colors shadow-md"
            >
              BOOK NOW
            </button>
          </form>
        </div>

        {/* Right Side - Driving School Info */}
        <div className="flex-1 text-white">
          <h3 className="text-4xl font-bold mb-6">
            <span className="text-yellow-400">Drive Safe,</span> Mate!
          </h3>
          <p className="text-xl mb-8 leading-relaxed">
            Ready to hit the road with confidence? Our certified instructors will guide you through every step of your driving journey.
          </p>
          
          <div className="space-y-6">
            <div className="flex items-start">
              <div className="bg-yellow-400 p-2 rounded-full mr-4 mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-1">Call Us</h4>
                <p className="text-lg">(555) DRIV-NOW</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-yellow-400 p-2 rounded-full mr-4 mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-1">Email Us</h4>
                <p className="text-lg">book@drivesafemate.com</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-yellow-400 p-2 rounded-full mr-4 mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-1">Visit Us</h4>
                <p className="text-lg">123 Driving Lane, Roadville, DV 12345</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default ContactForm;