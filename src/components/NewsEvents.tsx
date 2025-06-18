const NewsEvents = () => (
  <section id="news" className="py-16 px-4 sm:px-6 bg-yellow-50">
    <div className="max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
        Driving School <span className="text-blue-600">News & Events</span>
      </h2>

      <div className="flex flex-wrap justify-center gap-8">
        {/* Event Card 1 */}
        <div className="flex-1 min-w-[300px] max-w-md bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
          <div className="p-6">
            <div className="flex items-center mb-4">
              <div className="bg-blue-100 text-blue-800 rounded-full p-3 mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800">June 20</h3>
            </div>
            <h4 className="text-lg font-semibold mb-2 text-blue-600">Free Driving Seminar</h4>
            <p className="text-gray-600">
              Join our expert instructors for a free 2-hour seminar covering road safety, defensive driving techniques, and license test preparation.
            </p>
            <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              Register Now
            </button>
          </div>
        </div>

        {/* Event Card 2 */}
        <div className="flex-1 min-w-[300px] max-w-md bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
          <div className="p-6">
            <div className="flex items-center mb-4">
              <div className="bg-orange-100 text-orange-800 rounded-full p-3 mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800">July 1</h3>
            </div>
            <h4 className="text-lg font-semibold mb-2 text-blue-600">New Instructor Training</h4>
            <p className="text-gray-600">
              Our new batch of certified instructors begins training. Meet our expanded team ready to provide top-quality driving education.
            </p>
            <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              Meet the Team
            </button>
          </div>
        </div>

        {/* Event Card 3 - Added for better layout */}
        <div className="flex-1 min-w-[300px] max-w-md bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
          <div className="p-6">
            <div className="flex items-center mb-4">
              <div className="bg-green-100 text-green-800 rounded-full p-3 mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800">August 15</h3>
            </div>
            <h4 className="text-lg font-semibold mb-2 text-blue-600">Road Test Preparation</h4>
            <p className="text-gray-600">
              Special weekend classes focused exclusively on helping students prepare for their official driving license road test.
            </p>
            <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </div>

      <div className="text-center mt-12">
        <button className="px-6 py-3 bg-yellow-400 text-gray-800 font-bold rounded-lg hover:bg-yellow-500 transition-colors shadow-md">
          View All Events
        </button>
      </div>
    </div>
  </section>
);

export default NewsEvents;