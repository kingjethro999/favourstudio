'use client';

import { Download } from 'lucide-react';

export default function Resume() {
  const resumeUrl = process.env.RESUME_URL || '#';

  return (
    <section id="resume" className="py-20 md:py-28 lg:py-40">
      <div className="mx-auto w-[min(92%,1000px)]">
        <div className="glass-strong rounded-3xl p-6 md:p-10 lg:p-16 grain relative overflow-hidden">
          <div
            className="absolute -top-24 -right-24 size-60 md:size-80 rounded-full opacity-30 blur-3xl"
            style={{ background: 'var(--color-accent)' }}
          />
          <p className="text-xs uppercase tracking-[0.25em] text-accent">
            06 — Résumé
          </p>
          <h2 className="mt-4 font-display text-3xl md:text-4xl lg:text-5xl font-light max-w-xl">
            Download my résumé.
          </h2>
          <p className="mt-4 max-w-lg text-sm md:text-base text-muted-foreground">
            The full breakdown of experience, tools, credits and creative
            direction — one PDF.
          </p>
          <div className="mt-8 md:mt-10 flex flex-wrap gap-3">
            <a
              href={resumeUrl}
              target="_blank"
              rel="noreferrer"
              download
              className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-5 md:px-6 py-3 md:py-3.5 text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-colors"
            >
              <Download className="size-4" aria-hidden="true" />
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
