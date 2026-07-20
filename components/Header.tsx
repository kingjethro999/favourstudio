import { ArrowUpRight } from 'lucide-react';

export default function Header() {
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
        <a
          href="#contact"
          className="inline-flex items-center gap-1.5 rounded-full bg-primary text-primary-foreground text-sm font-medium px-4 py-2 hover:bg-accent hover:text-accent-foreground transition-colors"
        >
          Hire Me
          <ArrowUpRight className="size-4" aria-hidden="true" />
        </a>
      </nav>
    </header>
  );
}
