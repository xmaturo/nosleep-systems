// pages/terms.jsx
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const handleNav = (path) => {
    setIsOpen(false);
    router.push(path);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-lg bg-black/70 border-b border-white/10 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div
          className="flex items-center space-x-2 cursor-pointer"
          onClick={() => handleNav("/")}
        >
          <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
          <h1 className="text-xl font-extrabold tracking-wide leading-none">
            <span className="text-accent hover:drop-shadow-[0_0_6px_#00f7bf] transition duration-200">
              NoSleep
            </span>
            <span className="text-white font-extrabold hover:drop-shadow-[0_0_4px_#ffffff] transition duration-200">
              Systems
            </span>
          </h1>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center space-x-8 text-sm font-medium text-white">
          <li>
            <button onClick={() => handleNav("/")} className="hover:text-accent transition-all">
              Home
            </button>
          </li>
          <li>
            <button onClick={() => handleNav("/about")} className="hover:text-accent transition-all">
              About
            </button>
          </li>
          <li>
            <button onClick={() => handleNav("/install")} className="hover:text-accent transition-all">
              Install
            </button>
          </li>
          <li>
            <button onClick={() => handleNav("/terms")} className="hover:text-accent transition-all">
              Terms
            </button>
          </li>
        </ul>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white text-2xl focus:outline-none"
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden px-4 pb-6 bg-black/90 border-t border-white/10">
          <ul className="flex flex-col space-y-4 text-sm font-medium text-white">
            <li>
              <button onClick={() => handleNav("/")} className="hover:text-accent transition">
                Home
              </button>
            </li>
            <li>
              <button onClick={() => handleNav("/about")} className="hover:text-accent transition">
                About
              </button>
            </li>
            <li>
              <button onClick={() => handleNav("/install")} className="hover:text-accent transition">
                Install
              </button>
            </li>
            <li>
              <button onClick={() => handleNav("/terms")} className="hover:text-accent transition">
                Terms
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default function Terms() {
  return (
    <div className="bg-[#0A0A0A] text-white min-h-screen">
      <Navbar />
      <div className="max-w-5xl mx-auto py-32 px-6">
        <h1 className="text-4xl font-bold mb-8 text-accent">Terms & Conditions</h1>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">1. Acceptance of Terms</h2>
          <p className="text-gray-300">
            By accessing or using NoSleep Systems’ website and services, you agree to be bound by these Terms & Conditions. If you do not agree, you must not use our services.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">2. Services Overview</h2>
          <p className="text-gray-300">
            NoSleep Systems provides automated business solutions, including workflow automation, lead management, and sales optimization. Services are provided “as-is” and are intended to improve operational efficiency.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">3. User Responsibilities</h2>
          <ul className="list-disc list-inside text-gray-300 space-y-1">
            <li>Use the system only for lawful purposes.</li>
            <li>Maintain confidentiality of account credentials.</li>
            <li>Do not copy, redistribute, or resell any component of our services without written permission.</li>
            <li>Provide accurate information when required for service deployment.</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">4. Payment & Refunds</h2>
          <p className="text-gray-300">
            All fees for services are clearly communicated prior to installation. Payments are non-refundable once a system has been deployed or software delivered.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">5. Intellectual Property</h2>
          <p className="text-gray-300">
            All content, software, and systems provided by NoSleep Systems are the intellectual property of the company. Unauthorized copying, distribution, or use is strictly prohibited.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">6. Limitation of Liability</h2>
          <p className="text-gray-300">
            NoSleep Systems is not liable for indirect, incidental, or consequential damages arising from the use or inability to use our services, including lost profits or data.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">7. Indemnification</h2>
          <p className="text-gray-300">
            You agree to indemnify and hold harmless NoSleep Systems, its affiliates, and employees from any claims, damages, or expenses arising from your violation of these terms.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">8. Termination</h2>
          <p className="text-gray-300">
            NoSleep Systems reserves the right to suspend or terminate services at its discretion for violations of these Terms & Conditions.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">9. Changes to Terms</h2>
          <p className="text-gray-300">
            We may update these terms at any time. Continued use of our services constitutes acceptance of any changes.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">10. Governing Law</h2>
          <p className="text-gray-300">
            These terms are governed by the laws of Canada. Any disputes arising will be resolved under Canadian jurisdiction.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">11. Contact Information</h2>
          <p className="text-gray-300">
            For questions regarding these Terms & Conditions, please contact us at <a href="mailto:info@nosleepsystems.com" className="text-accent underline">info@nosleepsystems.com</a>.
          </p>
        </section>

        <div className="mt-12 text-center text-gray-400 text-sm">
          © NoSleep Systems. All rights reserved.
        </div>
      </div>
    </div>
  );
}
