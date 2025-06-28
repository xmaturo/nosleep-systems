import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black bg-opacity-90 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 rounded-full bg-accent animate-pulse"></div>
          <h1 className="text-xl font-bold tracking-wide">
            <span className="text-accent hover:drop-shadow-[0_0_6px_#00f7bf] transition duration-200">
              NoSleep
            </span>
            <span className="text-white hover:drop-shadow-[0_0_4px_#ffffff] transition duration-200">
              Systems
            </span>
          </h1>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none text-2xl"
          >
            ☰
          </button>
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center space-x-6 text-sm text-white">
          <li>
            <a href="#get-started" className="hover:text-accent transition-colors">
              Get Started
            </a>
          </li>
          <li>
            <a href="#offer-stack" className="hover:text-accent transition-colors">
              Offer Stack
            </a>
          </li>
          <li>
            <a href="#visual-mockup" className="hover:text-accent transition-colors">
              Live Demo
            </a>
          </li>
          <li>
            <Link href="/about" className="text-gray-300 hover:text-white transition">
              About
            </Link>
          </li>
        </ul>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 bg-black bg-opacity-95">
          <ul className="flex flex-col space-y-3 text-white text-sm">
            <li>
              <a href="#get-started" className="hover:text-accent transition-colors">
                Get Started
              </a>
            </li>
            <li>
              <a href="#offer-stack" className="hover:text-accent transition-colors">
                Offer Stack
              </a>
            </li>
            <li>
              <a href="#visual-mockup" className="hover:text-accent transition-colors">
                Live Demo
              </a>
            </li>
            <li>
              <Link href="/about" className="hover:text-accent transition-colors">
                About
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}