import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const handleNav = (hash) => {
    setIsOpen(false);
    if (router.pathname === "/") {
      if (hash === "#top") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        const el = document.querySelector(hash);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      router.push(`/${hash === "#top" ? "" : hash}`);
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-lg bg-black/70 border-b border-white/10 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <div
          className="flex items-center space-x-2 cursor-pointer"
          onClick={() => {
            setIsOpen(false);
            router.push("/");
          }}
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
            <button onClick={() => handleNav("#top")} className="hover:text-accent transition-all">
              Get Started
            </button>
          </li>
          <li>
            <button onClick={() => handleNav("#offer-stack")} className="hover:text-accent transition-all">
              Offer Stack
            </button>
          </li>
          <li>
            <button onClick={() => handleNav("#visual-mockup")} className="hover:text-accent transition-all">
              Live Demo
            </button>
          </li>
          <li>
            <Link href="/about" className="hover:text-accent transition-all">
              About
            </Link>
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
              <button onClick={() => handleNav("#top")} className="hover:text-accent transition">
                Get Started
              </button>
            </li>
            <li>
              <button onClick={() => handleNav("#offer-stack")} className="hover:text-accent transition">
                Offer Stack
              </button>
            </li>
            <li>
              <button onClick={() => handleNav("#visual-mockup")} className="hover:text-accent transition">
                Live Demo
              </button>
            </li>
            <li>
              <Link href="/about" className="hover:text-accent transition">
                About
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}