'use client';

import { Play, Music2, Mail, Link, Camera } from 'lucide-react';

export default function Footer() {
  const socialLinks = [
    { icon: Camera, href: 'https://instagram.com/thatcreativegirl', label: 'Instagram' },
    { icon: Music2, href: 'https://tiktok.com/@thatcretivegirl', label: 'TikTok' },
    { icon: Link, href: 'https://www.linkedin.com/in/favour-williams', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:favourwilliams450@gmail.com', label: 'Email' },
  ];

  return (
    <>
      <div className="flex justify-center pb-16">
        <a
          href="#top"
          className="inline-flex items-center gap-2 rounded-full glass px-5 py-2.5 text-xs uppercase tracking-widest hover:bg-secondary"
        >
          <Play className="size-3 -rotate-90" aria-hidden="true" />
          Back to top
        </a>
      </div>
      <footer className="border-t border-border py-10">
        <div className="mx-auto w-[min(92%,1200px)] flex flex-wrap items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <span className="font-display text-lg">
              Favour Williams<span className="text-accent">.</span>
            </span>
            <span className="text-xs text-muted-foreground">
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
                className="size-10 rounded-full glass grid place-items-center hover:bg-secondary hover:text-accent transition-colors"
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
