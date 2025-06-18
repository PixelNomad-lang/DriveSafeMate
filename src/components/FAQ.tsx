const FAQ = () => (
  <section id="faq" className="py-20 px-4 sm:px-6 bg-gray-50">
    <div className="max-w-4xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-12 text-blue-800">
        Driving School FAQs
      </h2>
      
      <div className="space-y-6">
        {/* Question 1 */}
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <h3 className="text-xl font-semibold text-blue-700 mb-2">
            How long is each driving lesson?
          </h3>
          <p className="text-gray-600">
            Each driving lesson lasts 60 minutes, giving you ample time to practice maneuvers and build confidence on the road.
          </p>
        </div>

        {/* Question 2 */}
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <h3 className="text-xl font-semibold text-blue-700 mb-2">
            What should I bring to my first lesson?
          </h3>
          <p className="text-gray-600">
            Please bring your learner's permit, comfortable shoes, and any corrective lenses you normally wear while driving.
          </p>
        </div>

        {/* Question 3 */}
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <h3 className="text-xl font-semibold text-blue-700 mb-2">
            How many lessons do I need before I can take the driving test?
          </h3>
          <p className="text-gray-600">
            Most students need 10-15 lessons to become test-ready, but this varies based on individual progress and prior experience.
          </p>
        </div>

        {/* Question 4 */}
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <h3 className="text-xl font-semibold text-blue-700 mb-2">
            Do you provide the car for the driving test?
          </h3>
          <p className="text-gray-600">
            Yes! We provide our well-maintained training vehicles for your road test at no additional cost.
          </p>
        </div>

        {/* Question 5 */}
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <h3 className="text-xl font-semibold text-blue-700 mb-2">
            What makes your driving school different?
          </h3>
          <p className="text-gray-600">
            Our certified instructors offer personalized training, flexible scheduling, and a proven success rate with over 95% of students passing on their first attempt.
          </p>
        </div>
      </div>

      <div className="mt-10 text-center">
        <p className="text-gray-600">
          Still have questions? <a href="#contact" className="text-blue-600 font-medium hover:underline">Contact us</a> and we'll be happy to help!
        </p>
      </div>
    </div>
  </section>
);

export default FAQ;