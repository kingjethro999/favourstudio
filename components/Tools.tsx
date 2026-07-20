import { ArrowUpRight } from 'lucide-react';

const tools = [
  { name: 'Gemini', number: '01' },
  { name: 'Qwen Studio', number: '02' },
  { name: 'ChatGPT', number: '03' },
  { name: 'CapCut', number: '04' },
  { name: 'Canva', number: '05' },
];

export default function Tools() {
  return (
    <section id="tools" className="py-20 md:py-28 lg:py-40">
      <div className="mx-auto w-[min(92%,1200px)]">
        <div className="grid md:grid-cols-12 gap-8 md:gap-10">
          <div className="md:col-span-4">
            <p className="text-xs uppercase tracking-[0.25em] text-accent">
              04 — Toolkit
            </p>
            <h2 className="mt-4 font-display text-3xl md:text-4xl lg:text-5xl font-light">
              AI tools &amp; software I build with.
            </h2>
          </div>
          <div className="md:col-span-8">
            <ul className="divide-y divide-border">
              {tools.map((tool) => (
                <li
                  key={tool.number}
                  className="group flex items-center justify-between py-4 md:py-6 hover:pl-2 md:hover:pl-4 transition-all"
                >
                  <div className="flex items-baseline gap-4 md:gap-6">
                    <span className="font-mono text-xs text-muted-foreground shrink-0">
                      {tool.number}
                    </span>
                    <span className="font-display text-2xl md:text-3xl lg:text-5xl group-hover:text-accent transition-colors">
                      {tool.name}
                    </span>
                  </div>
                  <ArrowUpRight className="size-4 md:size-5 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
