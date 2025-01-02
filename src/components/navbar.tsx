'use client'; // Add this line to mark the component as a client component

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50 h-16">
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.svg"
            alt="Solve@NUS Logo"
            width={32}
            height={32}
            className="mr-2"
          />
          <span className="text-xl font-bold text-gray-800">Solve@NUS</span>
        </Link>

        {/* Hamburger Icon for Mobile */}
        <button
          className="md:hidden text-gray-800 focus:outline-none" // Changed from lg:hidden to md:hidden
          onClick={toggleMenu}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        {/* Navigation Links */}
        <div
          className={`md:flex space-x-4 ${isMenuOpen ? 'block' : 'hidden'} md:block`} // Changed from lg:flex to md:flex
        >
          <Link href="/about" className="text-gray-600 hover:text-gray-800">
            About
          </Link>
          <Link href="/archives" className="text-gray-600 hover:text-gray-800">
            Archives
          </Link>
          <Link href="/contact" className="text-gray-600 hover:text-gray-800">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
