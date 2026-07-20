import {
  Sparkles,
  Film,
  Scissors,
  WandSparkles,
  Share2,
  Compass,
} from 'lucide-react';

const services = [
  {
    icon: Sparkles,
    title: 'AI Product Commercials',
    description:
      'Photoreal AI-generated commercials that turn products into cinematic moments.',
  },
  {
    icon: Film,
    title: 'Cinematic Product Ads',
    description:
      'High-end product films with mood, lighting and story built in.',
  },
  {
    icon: Scissors,
    title: 'Video Editing',
    description:
      'Rhythmic, punchy edits engineered for retention and conversion.',
  },
  {
    icon: WandSparkles,
    title: 'Motion Graphics',
    description:
      'Kinetic typography and motion design that reinforces the brand.',
  },
  {
    icon: Share2,
    title: 'Social Media Video',
    description:
      'Vertical, scroll-stopping short-form content for every platform.',
  },
  {
    icon: Compass,
    title: 'Creative Direction',
    description:
      'End-to-end concepting, storyboarding and visual identity for campaigns.',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-28 md:py-40 border-t border-border">
      <div className="mx-auto w-[min(92%,1200px)]">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-14">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-accent">
              03 — Services
            </p>
            <h2 className="mt-4 font-display text-4xl md:text-6xl font-light">
              What I Do
            </h2>
          </div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative glass rounded-2xl p-8 hover:bg-secondary/50 transition-all overflow-hidden"
            >
              <div className="absolute top-6 right-6 text-[11px] uppercase tracking-widest text-muted-foreground">
                0{index + 1}
              </div>
              <service.icon
                className="size-8 text-accent"
                strokeWidth={1.25}
                aria-hidden="true"
              />
              <h3 className="mt-8 font-display text-2xl">{service.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
