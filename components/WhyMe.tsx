import {
  Eye,
  Trophy,
  Lightbulb,
  Search,
  Zap,
  Gem,
} from 'lucide-react';

const reasons = [
  {
    icon: Eye,
    title: 'Cinematic Visual Storytelling',
    description:
      'Every frame is composed like a film — light, motion, emotion.',
  },
  {
    icon: Trophy,
    title: 'High-Quality Commercial Content',
    description: 'Broadcast-grade output crafted for premium brands.',
  },
  {
    icon: Lightbulb,
    title: 'Creative Problem Solving',
    description:
      'Turning briefs into ideas that convert and captivate.',
  },
  {
    icon: Search,
    title: 'Attention to Detail',
    description:
      'Pixel-level polish, from the first frame to the final export.',
  },
  {
    icon: Zap,
    title: 'Fast Turnaround',
    description: 'Reliable delivery without sacrificing craft.',
  },
  {
    icon: Gem,
    title: 'Premium Brand-Focused Videos',
    description:
      'Content tailored to elevate luxury and lifestyle brands.',
  },
];

export default function WhyMe() {
  return (
    <section className="py-28 md:py-40 border-t border-border grain">
      <div className="mx-auto w-[min(92%,1200px)]">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-xs uppercase tracking-[0.25em] text-accent">
            05 — Why me
          </p>
          <h2 className="mt-4 font-display text-4xl md:text-6xl font-light text-balance">
            Craft, speed, and a <em className="italic">brand-first</em> obsession.
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {reasons.map((reason, index) => (
            <div key={index} className="glass rounded-2xl p-8">
              <div className="size-11 rounded-full glass-strong grid place-items-center">
                <reason.icon className="size-5 text-accent" aria-hidden="true" />
              </div>
              <h3 className="mt-6 font-display text-xl">{reason.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
