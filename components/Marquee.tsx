export default function Marquee() {
  const items = [
    'AI Commercials',
    'Cinematic',
    'Product Films',
    'Motion Design',
    'Storytelling',
    'Premium Brands',
  ];

  return (
    <div className="border-y border-border py-8 overflow-hidden bg-secondary/70">
      <div className="flex gap-14 animate-marquee whitespace-nowrap w-max">
        {items.map((item, index) => (
          <span
            key={index}
            className="font-display italic text-4xl md:text-6xl text-foreground/65"
          >
            {item}
            <span className="text-accent mx-4">✦</span>
          </span>
        ))}
        {items.map((item, index) => (
          <span
            key={`dup-${index}`}
            className="font-display italic text-4xl md:text-6xl text-foreground/65"
          >
            {item}
            <span className="text-accent mx-4">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
