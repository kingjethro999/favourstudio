'use client';

import { Play, Music2, Mail } from 'lucide-react';
import { LinkedIn, Instagram } from '@mui/icons-material';

export default function Footer() {
  const socialLinks = [
    { icon: Instagram, href: 'https://instagram.com/thatcreativegirl', label: 'Instagram', isLucide: false },
    { icon: Music2, href: 'https://tiktok.com/@thatcretivegirl', label: 'TikTok', isLucide: true },
    { icon: LinkedIn, href: 'https://www.linkedin.com/in/favour-williams', label: 'LinkedIn', isLucide: false },
    { icon: Mail, href: 'mailto:favourwilliams450@gmail.com', label: 'Email', isLucide: true },
  ];

  return (
    <>
      <div className="flex justify-center pb-12 md:pb-16">
        <a
          href="#top"
          className="inline-flex items-center gap-2 rounded-full glass px-4 md:px-5 py-2 md:py-2.5 text-xs uppercase tracking-widest hover:bg-secondary"
        >
          <Play className="size-3 -rotate-90" aria-hidden="true" />
          Back to top
        </a>
      </div>
      <footer className="border-t border-border py-8 md:py-10">
        <div className="mx-auto w-[min(92%,1200px)] flex flex-wrap items-center justify-between gap-4 md:gap-6">
          <div className="flex items-center gap-2 md:gap-3">
            <span className="font-display text-base md:text-lg">
              Favour Williams<span className="text-accent">.</span>
            </span>
            <span className="text-[10px] md:text-xs text-muted-foreground">
              © 2026 All rights reserved.
            </span>
          </div>
          <div className="flex items-center gap-2">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                aria-label={link.label}
                target="_blank"
                rel="noreferrer"
                className="size-9 md:size-10 rounded-full glass grid place-items-center hover:bg-secondary hover:text-accent transition-colors"
              >
                {link.isLucide ? (
                  <link.icon className="size-4" aria-hidden="true" />
                ) : (
                  <link.icon className="size-4" aria-hidden="true" />
                )}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </>
  );
}
