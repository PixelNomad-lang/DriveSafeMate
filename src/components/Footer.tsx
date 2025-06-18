"use client"
import { useState } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    // Here you would typically send the email to your backend
    console.log('Subscribed with:', email);
    setSubscribed(true);
    setEmail('');
    setTimeout(() => setSubscribed(false), 3000);
  };

  return (
    <footer className="bg-gradient-to-r from-blue-800 to-blue-600 text-white pt-12 pb-6 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* About Section */}
          <div>
            <h3 className="text-2xl font-bold mb-4 flex items-center">
              <span className="bg-yellow-400 text-blue-800 px-2 py-1 rounded mr-2">DS</span>
              Drive Safe Mate
            </h3>
            <p className="text-blue-100 mb-4">
              Your trusted partner in safe driving education since 2010. We create confident, responsible drivers.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-yellow-300 transition-colors">
                <FaFacebook size={20} />
              </a>
              <a href="#" className="text-white hover:text-yellow-300 transition-colors">
                <FaInstagram size={20} />
              </a>
              <a href="#" className="text-white hover:text-yellow-300 transition-colors">
                <FaTwitter size={20} />
              </a>
              <a href="#" className="text-white hover:text-yellow-300 transition-colors">
                <FaYoutube size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 border-b border-yellow-400 pb-2">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-blue-100 hover:text-yellow-300 transition-colors">Courses</a></li>
              <li><a href="#" className="text-blue-100 hover:text-yellow-300 transition-colors">Pricing</a></li>
              <li><a href="#" className="text-blue-100 hover:text-yellow-300 transition-colors">Instructors</a></li>
              <li><a href="#" className="text-blue-100 hover:text-yellow-300 transition-colors">Testimonials</a></li>
              <li><a href="#" className="text-blue-100 hover:text-yellow-300 transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 border-b border-yellow-400 pb-2">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <FaMapMarkerAlt className="mt-1 mr-3 text-yellow-300" />
                <span className="text-blue-100">123 Driving Street, Safety City, SC 12345</span>
              </li>
              <li className="flex items-center">
                <FaPhone className="mr-3 text-yellow-300" />
                <span className="text-blue-100">(123) 456-7890</span>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="mr-3 text-yellow-300" />
                <span className="text-blue-100">info@drivesafemate.com</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-semibold mb-4 border-b border-yellow-400 pb-2">Stay Updated</h4>
            <p className="text-blue-100 mb-4">
              Subscribe to our newsletter for driving tips, special offers, and course updates.
            </p>
            {subscribed ? (
              <div className="bg-green-500 text-white p-3 rounded-lg text-center">
                Thank you for subscribing!
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col space-y-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  className="px-4 py-2 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-yellow-300"
                  required
                />
                <button
                  type="submit"
                  className="bg-yellow-400 hover:bg-yellow-300 text-blue-800 font-semibold py-2 px-4 rounded-lg transition-colors shadow-md hover:shadow-lg transform hover:-translate-y-1"
                >
                  Subscribe Now
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-blue-400 pt-6 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-blue-200">
              &copy; {new Date().getFullYear()} Drive Safe Mate. All rights reserved.
            </p>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="text-blue-200 hover:text-white transition-colors text-sm">Privacy Policy</a>
            <a href="#" className="text-blue-200 hover:text-white transition-colors text-sm">Terms of Service</a>
            <a href="#" className="text-blue-200 hover:text-white transition-colors text-sm">Sitemap</a>
          </div>
        </div>

        {/* Floating CTA */}
        <div className="fixed bottom-6 right-6 z-50">
          <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-5 rounded-full shadow-xl flex items-center animate-bounce">
            <FaPhone className="mr-2" />
            Book a Lesson
          </button>
        </div>
      </div>
    </footer>
  );
}