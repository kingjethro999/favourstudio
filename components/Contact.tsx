'use client';

import { Send, Mail, Music2, ArrowUpRight } from 'lucide-react';
import { LinkedIn, Instagram } from '@mui/icons-material';

export default function Contact() {
  const contacts = [
    {
      icon: Mail,
      label: 'Email',
      value: 'favourwilliams450@gmail.com',
      href: 'mailto:favourwilliams450@gmail.com',
      isLucide: true,
    },
    {
      icon: LinkedIn,
      label: 'LinkedIn',
      value: 'Favour Williams',
      href: 'https://www.linkedin.com/in/favour-williams',
      isLucide: false,
    },
    {
      icon: Instagram,
      label: 'Instagram',
      value: '@Thatcreativegirl',
      href: 'https://instagram.com/thatcreativegirl',
      isLucide: false,
    },
    {
      icon: Music2,
      label: 'TikTok',
      value: '@Thatcretivegirl',
      href: 'https://tiktok.com/@thatcretivegirl',
      isLucide: true,
    },
  ];

  return (
    <section id="contact" className="py-28 md:py-40 border-t border-border">
      <div className="mx-auto w-[min(92%,1200px)]">
        <p className="text-xs uppercase tracking-[0.25em] text-accent">
          07 — Contact
        </p>
        <h2 className="mt-4 font-display text-5xl md:text-7xl lg:text-8xl font-light leading-[0.95] text-balance max-w-5xl">
          Let's create something <em className="italic gold-gradient-text">amazing</em>{' '}
          together.
        </h2>
        <div className="mt-20 grid lg:grid-cols-12 gap-10">
          <form className="lg:col-span-7 glass rounded-3xl p-8 md:p-10 space-y-5">
            <div className="grid md:grid-cols-2 gap-5">
              <label className="block">
                <span className="text-[11px] uppercase tracking-widest text-muted-foreground">
                  Name
                </span>
                <input
                  required
                  maxLength={100}
                  className="mt-2 w-full bg-transparent border-b border-border py-2.5 outline-none focus:border-accent"
                />
              </label>
              <label className="block">
                <span className="text-[11px] uppercase tracking-widest text-muted-foreground">
                  Email
                </span>
                <input
                  required
                  type="email"
                  maxLength={255}
                  className="mt-2 w-full bg-transparent border-b border-border py-2.5 outline-none focus:border-accent"
                />
              </label>
            </div>
            <label className="block">
              <span className="text-[11px] uppercase tracking-widest text-muted-foreground">
                Brand / Company
              </span>
              <input
                maxLength={100}
                className="mt-2 w-full bg-transparent border-b border-border py-2.5 outline-none focus:border-accent"
              />
            </label>
            <label className="block">
              <span className="text-[11px] uppercase tracking-widest text-muted-foreground">
                Project details
              </span>
              <textarea
                required
                rows={5}
                maxLength={2000}
                className="mt-2 w-full bg-transparent border-b border-border py-2.5 outline-none focus:border-accent resize-none"
              />
            </label>
            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3.5 text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-colors"
            >
              <Send className="size-4" aria-hidden="true" />
              Send inquiry
            </button>
          </form>
          <div className="lg:col-span-5 space-y-3">
            {contacts.map((contact) => (
              <a
                key={contact.label}
                href={contact.href}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-between glass rounded-2xl p-5 hover:bg-secondary transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div className="size-11 rounded-full glass-strong grid place-items-center">
                    {contact.isLucide ? (
                      <contact.icon className="size-4 text-accent" aria-hidden="true" />
                    ) : (
                      <contact.icon className="size-4 text-accent" aria-hidden="true" />
                    )}
                  </div>
                  <div>
                    <div className="text-[11px] uppercase tracking-widest text-muted-foreground">
                      {contact.label}
                    </div>
                    <div className="text-sm">{contact.value}</div>
                  </div>
                </div>
                <ArrowUpRight className="size-4 text-muted-foreground group-hover:text-accent transition-colors" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
