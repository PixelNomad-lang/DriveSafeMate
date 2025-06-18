'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { path: '/', name: 'Home' },
    { path: '/about', name: 'About' },
    { path: '/courses', name: 'Courses' },
    { path: '/instructors', name: 'Instructors' },
    { path: '/testimonials', name: 'Success Stories' },
    { path: '/contact', name: 'Contact' },
  ];

  const isActive = (path: string) =>
    pathname === path ? 'text-yellow-800 font-semibold' : 'text-gray-800 hover:text-yellow-700';

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2 group">
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-yellow-600 to-yellow-400 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000"></div>
            <span className="relative text-xl sm:text-2xl font-bold bg-gradient-to-r from-yellow-800 to-yellow-600 bg-clip-text text-transparent">
              DriveSafe<span className="text-yellow-600">Mate</span>
            </span>
          </div>
        </Link>

        {/* Toggle Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-yellow-800 focus:outline-none p-2 hover:bg-yellow-50 rounded-lg transition-colors"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center space-x-1">
          {navLinks.map((link) => (
            <li key={link.path}>
              <Link
                href={link.path}
                className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${isActive(link.path)
                    ? 'text-yellow-800 bg-yellow-50'
                    : 'text-gray-700 hover:text-yellow-700 hover:bg-yellow-50'
                  }`}
              >
                {link.name}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="/book-now"
              className="ml-4 px-6 py-2.5 text-sm text-white bg-gradient-to-r from-yellow-600 to-yellow-500 rounded-lg hover:from-yellow-700 hover:to-yellow-600 transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg"
            >
              Book Now
            </Link>
          </li>
        </ul>
      </nav>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md w-full px-6 py-5 shadow-lg border-t border-gray-100">
          <ul className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link
                  href={link.path}
                  className={`block text-base py-3 px-4 rounded-lg font-medium transition-all duration-200 ${isActive(link.path)
                      ? 'text-yellow-800 bg-yellow-50'
                      : 'text-gray-700 hover:text-yellow-700 hover:bg-yellow-50'
                    }`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
            <li className="pt-2">
              <Link
                href="/book-now"
                className="block text-center py-3 px-4 bg-gradient-to-r from-yellow-600 to-yellow-500 text-white rounded-lg font-semibold hover:from-yellow-700 hover:to-yellow-600 transition-all duration-300 transform hover:scale-[1.02] shadow-md"
              >
                Book Now
              </Link>
            </li>
          </ul>

          {/* Contact Info */}
          <div className="mt-6 border-t border-gray-100 pt-4 text-sm text-gray-700 space-y-3">
            <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-yellow-50 transition-colors">
              <div className="p-2 bg-yellow-100 rounded-lg">
                <svg className="w-5 h-5 text-yellow-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5h3.28a1 1 0 01.95.68l1.5 4.5a1 1 0 01-.5 1.21l-2.26 1.13a11.04 11.04 0 005.51 5.52l1.13-2.26a1 1 0 011.21-.5l4.5 1.5a1 1 0 01.68.95V19a2 2 0 01-2 2h-1C9.7 21 3 14.3 3 6V5z" />
                </svg>
              </div>
              <span>(02) 1234 5678</span>
            </div>
            <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-yellow-50 transition-colors">
              <div className="p-2 bg-yellow-100 rounded-lg">
                <svg className="w-5 h-5 text-yellow-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l8 5 8-5M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <span>info@drivesafemate.com</span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
