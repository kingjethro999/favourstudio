export default function About() {
  return (
    <section id="about" className="py-28 md:py-40">
      <div className="mx-auto w-[min(92%,1200px)] grid md:grid-cols-12 gap-10">
        <div className="md:col-span-4">
          <p className="text-xs uppercase tracking-[0.25em] text-accent">
            01 — About
          </p>
          <h2 className="mt-4 font-display text-4xl md:text-5xl font-light">
            A creative built for the <em className="italic">post-AI</em>{' '}
            commercial era.
          </h2>
        </div>
        <div className="md:col-span-7 md:col-start-6 space-y-6 text-lg text-muted-foreground leading-relaxed">
          <p>
            I'm Favour Williams — a video creator specialising in cinematic
            AI-generated product commercials, creative advertising, and premium
            short-form marketing videos for brands that care about how they look and
            feel.
          </p>
          <p>
            My work sits at the intersection of art direction, storytelling, and
            emerging AI tools. From concept to final cut, every project is treated
            like a mini film — obsessed over in lighting, pacing, sound, and detail
            — so the final piece doesn't just sell a product, it elevates the brand
            behind it.
          </p>
          <p className="text-foreground">
            The goal is simple: content people actually stop for.
          </p>
        </div>
      </div>
    </section>
  );
}
