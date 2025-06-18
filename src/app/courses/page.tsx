'use client';

import Image from 'next/image';
import { FaCar, FaUserShield, FaClock, FaAward } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Testimonials from '@/components/Testimonials';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const courses = [
  {
    id: 1,
    title: 'Beginner Driving Course',
    description: 'Comprehensive lessons covering all basics for new drivers with zero experience',
    image: '/images/beginner-driving.jpg',
    duration: '10 lessons',
    level: 'Novice',
    price: '$599'
  },
  {
    id: 2,
    title: 'Defensive Driving Program',
    description: 'Advanced techniques to handle hazardous situations and prevent accidents',
    image: '/images/defensive-driving.jpg',
    duration: '8 lessons',
    level: 'Experienced',
    price: '$499'
  },
  {
    id: 3,
    title: 'License Test Preparation',
    description: 'Focused training to help you pass your driving test with confidence',
    image: '/images/test-prep.jpg',
    duration: '5 lessons',
    level: 'All Levels',
    price: '$399'
  }
];

const benefits = [
  {
    icon: <FaUserShield className="w-8 h-8" />,
    title: 'Certified Instructors',
    description: 'Learn from ADI-certified professionals with excellent safety records'
  },
  {
    icon: <FaCar className="w-8 h-8" />,
    title: 'Modern Vehicles',
    description: 'Train in late-model cars with dual controls for maximum safety'
  },
  {
    icon: <FaClock className="w-8 h-8" />,
    title: 'Flexible Scheduling',
    description: 'Book lessons at times that work for your schedule'
  },
  {
    icon: <FaAward className="w-8 h-8" />,
    title: 'High Pass Rates',
    description: '98% first-time pass rate for our students'
  }
];

export default function CoursesPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[60vh] bg-gradient-to-r from-blue-800 to-blue-600">
        <Image
          src="/images/driving-hero.jpg"
          alt="Drive Safe Mate Driving School"
          fill
          className="object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="text-white max-w-2xl">
            <h1 className="text-5xl font-bold mb-4">Become a Confident, Safe Driver</h1>
            <p className="text-xl mb-8">Professional driving instruction that puts safety first</p>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition">
              Book Your First Lesson
            </button>
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="py-20 container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Driving Programs</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <motion.div
              key={course.id}
              whileHover={{ y: -10 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >
              <div className="relative h-48">
                <Image
                  src={course.image}
                  alt={course.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
                <p className="text-gray-600 mb-4">{course.description}</p>
                <div className="flex justify-between items-center text-sm text-gray-500 mb-4">
                  <span>{course.duration}</span>
                  <span>{course.level}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-blue-600">{course.price}</span>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
                    Learn More
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Drive Safe Mate</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-6 bg-blue-50 rounded-lg"
              >
                <div className="text-blue-600 mb-4 flex justify-center">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials />

      {/* CTA Section */}
      <section className="py-20 bg-blue-800">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-8">Ready to Hit the Road?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join hundreds of safe drivers who learned with Drive Safe Mate
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition">
              Book Your First Lesson
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition">
              Call Now: (02) 1234 5678
            </button>
          </div>
        </div>
      </section>

      
    </main>
  );
}