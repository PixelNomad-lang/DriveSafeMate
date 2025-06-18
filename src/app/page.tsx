"use client";

import Hero from "../components/Hero";
import Introduction from "../components/Introduction";
import Highlight from "../components/Highlight";
import CourseIntro from "../components/CourseIntro";
import Pricing from "../components/Pricing";
import Testimonials from "../components/Testimonials";
import FAQ from "../components/FAQ";
import NewsEvents from "../components/NewsEvents";
import ContactForm from "../components/ContactForm";
import ContactDetails from "../components/ContactDetails";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-yellow-100 via-yellow-50 to-yellow-200 flex flex-col items-center">
      <div className="w-full max-w-7xl px-4">
        <Hero />
        <section className="my-12">
          <Introduction />
        </section>
        <section className="my-12">
          <Highlight />
        </section>
        <section className="my-12">
          <CourseIntro />
        </section>
        <section className="my-12">
          <Pricing />
        </section>
        <section className="my-12">
          <Testimonials />
        </section>
        <section className="my-12">
          <FAQ />
        </section>
        <section className="my-12">
          <NewsEvents />
        </section>
        <section className="my-12">
          <ContactForm />
        </section>
        <section className="my-12">
          <ContactDetails />
        </section>
        {/* New: About Us Section */}
        <section className="my-16 bg-yellow-50 rounded-xl shadow-lg p-8 flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1">
            <h2 className="text-3xl font-bold mb-4 text-yellow-700">About Us</h2>
            <p className="text-gray-700 mb-2">We are a passionate team of certified driving instructors dedicated to helping you become a safe and confident driver. Our mission is to provide high-quality, personalized driving education for all ages and skill levels.</p>
            <ul className="list-disc list-inside text-yellow-800 ml-4">
              <li>Certified & experienced instructors</li>
              <li>Modern vehicles with safety features</li>
              <li>Flexible lesson scheduling</li>
              <li>Supportive and friendly environment</li>
            </ul>
          </div>
          <img src="/globe.svg" alt="About Us" className="w-40 h-40 object-contain" />
        </section>
        {/* New: Call to Action Section */}
        <section className="my-16 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-xl shadow-xl p-10 text-center text-white flex flex-col items-center">
          <h2 className="text-3xl font-extrabold mb-4">Ready to Start Your Driving Journey?</h2>
          <p className="mb-6 text-lg">Book your first lesson today and take the first step towards driving independence!</p>
          <a href="#contact" className="inline-block px-8 py-3 bg-white text-yellow-700 font-bold rounded-full shadow hover:bg-yellow-100 transition">Book Now</a>
        </section>
      </div>
    </main>
  );
}
