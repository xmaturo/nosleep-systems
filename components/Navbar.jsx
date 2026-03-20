'use client';

import { useState } from 'react';
import Link from 'next/link';

const navLinks = [
  { href: '/projects', label: 'Projects' },
  { href: '/lab', label: 'Lab' },
  { href: '/notes', label: 'Notes' },
  { href: '/cv', label: 'CV' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-void border-b-[3px] border-ember">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-14">
        <Link href="/" className="font-display text-gold text-xl uppercase tracking-wide">
          NOSLEEP
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-3">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-mono text-[10px] uppercase tracking-[2px] text-cream px-4 py-1.5 rounded-[40px] border-[3px] border-wine hover:border-ember hover:text-gold transition-all duration-150"
            >
              {link.label}
            </Link>
          ))}
          <a
            href="mailto:omar@nosleepsystems.com"
            className="font-mono text-[10px] uppercase tracking-[2px] font-bold bg-gold text-void px-5 py-1.5 rounded-[40px] hover:bg-ember transition-colors duration-150"
          >
            Work with me
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Toggle menu"
        >
          <span className={`block w-5 h-[3px] bg-gold transition-transform duration-200 ${open ? 'rotate-45 translate-y-[9px]' : ''}`} />
          <span className={`block w-5 h-[3px] bg-gold transition-opacity duration-200 ${open ? 'opacity-0' : ''}`} />
          <span className={`block w-5 h-[3px] bg-gold transition-transform duration-200 ${open ? '-rotate-45 -translate-y-[9px]' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-void border-t-[3px] border-wine px-6 py-4 flex flex-col gap-3">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="font-mono text-[10px] uppercase tracking-[2px] text-cream px-4 py-2 rounded-[40px] border-[3px] border-wine hover:border-ember transition-all duration-150"
            >
              {link.label}
            </Link>
          ))}
          <a
            href="mailto:omar@nosleepsystems.com"
            className="font-mono text-[10px] uppercase tracking-[2px] font-bold bg-gold text-void px-5 py-2 rounded-[40px] text-center hover:bg-ember transition-colors duration-150"
          >
            Work with me
          </a>
        </div>
      )}
    </nav>
  );
}
