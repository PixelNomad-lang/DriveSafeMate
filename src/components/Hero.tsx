'use client';
import Head from 'next/head';
import Image from 'next/image';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <>
      <Head>
        <title>DriveSafeMate | Your Journey to Safe Driving Starts Here</title>
        <meta
          name="description"
          content="Transform your driving skills with Australia's premier driving school. Expert instructors, flexible schedules, and proven success rates."
        />
      </Head>

      <section className="bg-gradient-to-br from-yellow-50 via-white to-yellow-100 py-24 px-6 lg:px-20 relative overflow-hidden">
        {/* Enhanced Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('/pattern.svg')] bg-repeat animate-pulse"></div>
        </div>

        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-20 relative">
          {/* Enhanced Text Content */}
          <div className="flex-1 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-yellow-100 to-yellow-200 rounded-full shadow-sm"
            >
              <span className="text-base text-yellow-800 font-semibold flex items-center gap-2">
                <span className="text-xl">🚗</span> Australia's #1 Rated Driving School
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight"
            >
              Your Journey to <br />
              <span className="text-yellow-700 relative inline-block">
                Confident Driving
                <span className="absolute -bottom-2 left-0 w-full h-2 bg-yellow-600 transform scale-x-100"></span>
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-gray-700 text-xl max-w-xl leading-relaxed"
            >
              Join thousands of successful drivers who learned with DriveSafeMate. Our expert instructors provide personalized training that builds confidence and ensures safety on the road.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-6 pt-6"
            >
              <button className="bg-gradient-to-r from-yellow-600 to-yellow-700 text-white px-10 py-5 rounded-xl font-bold text-lg hover:from-yellow-700 hover:to-yellow-800 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-2">
                <span>Start Your Journey</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
              <button className="border-2 border-yellow-600 text-yellow-700 px-10 py-5 rounded-xl font-bold text-lg hover:bg-yellow-50 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2">
                <span>Explore Courses</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </motion.div>

            {/* Enhanced Trust Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8"
            >
              <div className="flex flex-col items-center gap-2">
                <div className="flex items-center gap-1">
                  <svg className="w-6 h-6 text-yellow-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span className="text-2xl font-bold text-gray-900">4.9</span>
                </div>
                <span className="text-sm font-medium text-gray-600">Customer Rating</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="flex items-center gap-1">
                  <svg className="w-6 h-6 text-yellow-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-2xl font-bold text-gray-900">100+</span>
                </div>
                <span className="text-sm font-medium text-gray-600">Expert Instructors</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="flex items-center gap-1">
                  <svg className="w-6 h-6 text-yellow-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                  </svg>
                  <span className="text-2xl font-bold text-gray-900">10k+</span>
                </div>
                <span className="text-sm font-medium text-gray-600">Happy Students</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="flex items-center gap-1">
                  <svg className="w-6 h-6 text-yellow-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-2xl font-bold text-gray-900">98%</span>
                </div>
                <span className="text-sm font-medium text-gray-600">Success Rate</span>
              </div>
            </motion.div>
          </div>

          {/* Enhanced Image Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex-1 grid grid-cols-2 gap-6"
          >
            <div className="col-span-2 relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-yellow-600 to-yellow-400 rounded-xl blur opacity-25 group-hover:opacity-75 transition duration-1000"></div>
              <Image
                src="/a1.jpeg"
                alt="Professional Driving Instruction"
                width={600}
                height={400}
                className="rounded-xl shadow-2xl w-full h-auto object-cover relative transform transition duration-500 hover:scale-[1.02]"
              />
            </div>
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-yellow-600 to-yellow-400 rounded-xl blur opacity-25 group-hover:opacity-75 transition duration-1000"></div>
              <Image
                src="/a2.jpg"
                alt="Confident Driver Training"
                width={300}
                height={200}
                className="rounded-xl shadow-2xl object-cover relative transform transition duration-500 hover:scale-[1.02]"
              />
            </div>
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-yellow-600 to-yellow-400 rounded-xl blur opacity-25 group-hover:opacity-75 transition duration-1000"></div>
              <Image
                src="/a3.jpg"
                alt="Success Celebration"
                width={300}
                height={200}
                className="rounded-xl shadow-2xl object-cover relative transform transition duration-500 hover:scale-[1.02]"
              />
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Hero;
