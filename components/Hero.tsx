'use client';

import { ArrowUpRight } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen grain flex items-center pt-24 md:pt-32 pb-16 md:pb-20 overflow-hidden"
    >
      <div
        className="absolute inset-0 -z-10 opacity-70"
        style={{
          background:
            'radial-gradient(60% 50% at 20% 20%, oklch(0.28 0 0) 0%, transparent 60%), radial-gradient(50% 40% at 85% 80%, oklch(0.3 0.03 85 / 0.35) 0%, transparent 60%)',
        }}
      />
      <div className="mx-auto w-[min(92%,1200px)]">
        <div className="animate-float-up">
          <p className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-muted-foreground">
            <span className="size-1.5 rounded-full bg-accent animate-pulse" />
            Available for projects — 2026
          </p>
        </div>
        <h1
          className="mt-8 font-display text-[clamp(2rem,5vw,4.5rem)] leading-[0.95] font-light text-balance animate-float-up"
          style={{ animationDelay: '80ms' }}
        >
          AI Content Creator
          <br />
          <span className="italic gold-gradient-text">Cinematic Product</span> Video
          Creator
          <br />
          <span className="text-muted-foreground">Video Editor</span>
        </h1>
        <p
          className="mt-8 max-w-2xl text-lg text-muted-foreground text-balance animate-float-up"
          style={{ animationDelay: '160ms' }}
        >
          I create cinematic AI-powered product commercials and high-converting
          marketing videos that help brands capture attention, increase engagement,
          and elevate their visual identity.
        </p>
        <div
          className="mt-10 flex flex-wrap gap-3 animate-float-up"
          style={{ animationDelay: '240ms' }}
        >
          <a
            href="#work"
            className="group inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3.5 text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-colors"
          >
            View My Work
            <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full glass px-6 py-3.5 text-sm font-medium hover:bg-secondary transition-colors"
          >
            Hire Me
          </a>
        </div>
        <div
          className="mt-16 md:mt-24 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 border-t border-border pt-8 md:pt-10 animate-float-up"
          style={{ animationDelay: '320ms' }}
        >
          <div>
            <div className="font-display text-2xl md:text-3xl lg:text-4xl">50+</div>
            <div className="mt-1 text-[10px] md:text-xs uppercase tracking-widest text-muted-foreground">
              Frames per second
            </div>
          </div>
          <div>
            <div className="font-display text-2xl md:text-3xl lg:text-4xl">8+</div>
            <div className="mt-1 text-[10px] md:text-xs uppercase tracking-widest text-muted-foreground">
              Signature projects
            </div>
          </div>
          <div>
            <div className="font-display text-2xl md:text-3xl lg:text-4xl">100%</div>
            <div className="mt-1 text-[10px] md:text-xs uppercase tracking-widest text-muted-foreground">
              Brand-focused
            </div>
          </div>
          <div>
            <div className="font-display text-2xl md:text-3xl lg:text-4xl">24h</div>
            <div className="mt-1 text-[10px] md:text-xs uppercase tracking-widest text-muted-foreground">
              First response
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
