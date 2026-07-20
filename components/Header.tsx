'use client';

import { ArrowUpRight, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[min(96%,1200px)]">
      <nav className="glass rounded-full flex items-center justify-between pl-6 pr-2 py-2">
        <a href="#top" className="font-display text-lg tracking-tight">
          Favour<span className="text-accent">.</span>
        </a>
        <ul className="hidden md:flex items-center gap-7 text-sm text-muted-foreground">
          <li>
            <a href="#work" className="hover:text-foreground transition-colors">
              Work
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-foreground transition-colors">
              About
            </a>
          </li>
          <li>
            <a href="#services" className="hover:text-foreground transition-colors">
              Services
            </a>
          </li>
          <li>
            <a href="#tools" className="hover:text-foreground transition-colors">
              Tools
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-foreground transition-colors">
              Contact
            </a>
          </li>
        </ul>
        <div className="flex items-center gap-2">
          <a
            href="#contact"
            className="hidden sm:inline-flex items-center gap-1.5 rounded-full bg-primary text-primary-foreground text-sm font-medium px-4 py-2 hover:bg-accent hover:text-accent-foreground transition-colors"
          >
            Hire Me
            <ArrowUpRight className="size-4" aria-hidden="true" />
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-full hover:bg-secondary transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="size-5" />
            ) : (
              <Menu className="size-5" />
            )}
          </button>
        </div>
      </nav>
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 mt-2 glass rounded-2xl p-6 space-y-4">
          <a
            href="#work"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Work
          </a>
          <a
            href="#about"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            About
          </a>
          <a
            href="#services"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Services
          </a>
          <a
            href="#tools"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Tools
          </a>
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Contact
          </a>
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="inline-flex items-center gap-1.5 rounded-full bg-primary text-primary-foreground text-sm font-medium px-4 py-2 hover:bg-accent hover:text-accent-foreground transition-colors"
          >
            Hire Me
            <ArrowUpRight className="size-4" aria-hidden="true" />
          </a>
        </div>
      )}
    </header>
  );
}
