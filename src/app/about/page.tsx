export default function About() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-800 mb-4">
            About Drive Safe Mate
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Your trusted partner in creating confident and responsible drivers
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">Our Mission</h2>
          <p className="text-gray-700 leading-relaxed">
            At Drive Safe Mate, we're committed to providing comprehensive driving education that goes beyond just passing the test.
            We believe in creating confident, responsible, and safety-conscious drivers who are well-prepared for the road ahead.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-semibold text-blue-700 mb-3">Expert Instructors</h3>
            <p className="text-gray-600">
              Our certified instructors bring years of experience and a passion for teaching safe driving practices.
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-semibold text-blue-700 mb-3">Modern Curriculum</h3>
            <p className="text-gray-600">
              We combine traditional driving skills with the latest road safety knowledge and technology.
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-semibold text-blue-700 mb-3">Personalized Learning</h3>
            <p className="text-gray-600">
              Tailored instruction to meet individual learning needs and build confidence behind the wheel.
            </p>
          </div>
        </div>

        <div className="bg-blue-50 rounded-xl p-8">
          <h2 className="text-2xl font-semibold text-blue-800 mb-6">Why Choose Drive Safe Mate?</h2>
          <ul className="space-y-4">
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">✓</span>
              <span className="text-gray-700">Flexible scheduling to fit your busy lifestyle</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">✓</span>
              <span className="text-gray-700">State-of-the-art training vehicles</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">✓</span>
              <span className="text-gray-700">Comprehensive defensive driving techniques</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">✓</span>
              <span className="text-gray-700">High pass rate and student satisfaction</span>
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
}
