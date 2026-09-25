'use client';

import { useState, type FormEvent } from 'react';
import { Send, Mail, Music2, ArrowUpRight } from 'lucide-react';
import { LinkedIn, Instagram } from '@mui/icons-material';

export default function Contact() {
  const [draft, setDraft] = useState<{ gmail: string; outlook: string; mailto: string; message: string } | null>(null);
  const [copied, setCopied] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get('name') ?? '').trim();
    const email = String(data.get('email') ?? '').trim();
    const company = String(data.get('company') ?? '').trim();
    const message = String(data.get('message') ?? '').trim();

    const subject = `Portfolio inquiry from ${name}`;
    const body = [
      'Hello Favour,',
      '',
      message,
      '',
      `Name: ${name}`,
      `Email: ${email}`,
      ...(company ? [`Brand / Company: ${company}`] : []),
    ].join('\n');

    const gmail = new URL('https://mail.google.com/mail/');
    gmail.search = new URLSearchParams({ view: 'cm', fs: '1', to: 'favourwilliams450@gmail.com', su: subject, body }).toString();

    const outlook = new URL('https://outlook.live.com/mail/0/deeplink/compose');
    outlook.search = new URLSearchParams({ to: 'favourwilliams450@gmail.com', subject, body }).toString();

    setCopied(false);
    setDraft({
      gmail: gmail.toString(),
      outlook: outlook.toString(),
      mailto: `mailto:favourwilliams450@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`,
      message: `To: favourwilliams450@gmail.com\nSubject: ${subject}\n\n${body}`,
    });
  }

  async function copyMessage() {
    if (!draft) return;
    try {
      await navigator.clipboard.writeText(draft.message);
      setCopied(true);
    } catch {
      setCopied(false);
    }
  }

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
        <h2 className="mt-4 font-display text-4xl md:text-5xl lg:text-7xl font-light leading-[0.95] text-balance max-w-5xl">
          Let&apos;s create something <em className="italic pink-gradient-text">amazing</em>{' '}
          together.
        </h2>
        <div className="mt-12 md:mt-20 grid lg:grid-cols-12 gap-8 lg:gap-10">
          <form onSubmit={handleSubmit} onChange={() => setDraft(null)} className="lg:col-span-7 glass rounded-3xl p-6 md:p-8 lg:p-10 space-y-5">
            <div className="grid md:grid-cols-2 gap-5">
              <label className="block">
                <span className="text-[11px] uppercase tracking-widest text-muted-foreground">
                  Name
                </span>
                <input
                  name="name"
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
                  name="email"
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
                name="company"
                maxLength={100}
                className="mt-2 w-full bg-transparent border-b border-border py-2.5 outline-none focus:border-accent"
              />
            </label>
            <label className="block">
              <span className="text-[11px] uppercase tracking-widest text-muted-foreground">
                Project details
              </span>
              <textarea
                name="message"
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
              Choose email service
            </button>
            {draft ? (
              <div role="status" aria-live="polite" className="rounded-2xl border border-border bg-white/60 p-4 space-y-3">
                <p className="text-sm font-medium">Open your message in:</p>
                <div className="flex flex-wrap gap-2">
                  <a href={draft.gmail} target="_blank" rel="noopener noreferrer" className="rounded-full bg-primary px-4 py-2 text-sm text-primary-foreground hover:bg-accent transition-colors">Gmail</a>
                  <a href={draft.outlook} target="_blank" rel="noopener noreferrer" className="rounded-full border border-border px-4 py-2 text-sm hover:bg-secondary transition-colors">Outlook</a>
                  <a href={draft.mailto} className="rounded-full border border-border px-4 py-2 text-sm hover:bg-secondary transition-colors">Email app</a>
                  <button type="button" onClick={copyMessage} className="rounded-full border border-border px-4 py-2 text-sm hover:bg-secondary transition-colors">{copied ? 'Copied!' : 'Copy for another service'}</button>
                </div>
                <p className="text-xs text-muted-foreground">Review the prepared email and press Send in your email service.</p>
              </div>
            ) : (
              <p className="text-xs text-muted-foreground">Choose Gmail, Outlook, or your email app after filling out the form.</p>
            )}
          </form>
          <div className="lg:col-span-5 space-y-3">
            {contacts.map((contact) => (
              <a
                key={contact.label}
                href={contact.href}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-between glass rounded-2xl p-4 md:p-5 hover:bg-secondary transition-colors"
              >
                <div className="flex items-center gap-3 md:gap-4">
                  <div className="size-10 md:size-11 rounded-full glass-strong grid place-items-center shrink-0">
                    {contact.isLucide ? (
                      <contact.icon className="size-4 text-accent" aria-hidden="true" />
                    ) : (
                      <contact.icon className="size-4 text-accent" aria-hidden="true" />
                    )}
                  </div>
                  <div className="min-w-0">
                    <div className="text-[10px] md:text-[11px] uppercase tracking-widest text-muted-foreground">
                      {contact.label}
                    </div>
                    <div className="text-sm truncate">{contact.value}</div>
                  </div>
                </div>
                <ArrowUpRight className="size-4 text-muted-foreground group-hover:text-accent transition-colors shrink-0" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
