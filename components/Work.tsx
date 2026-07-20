'use client';

import { projects } from '@/lib/projects';
import { Play } from 'lucide-react';

export default function Work() {
  return (
    <section id="work" className="py-28 md:py-40">
      <div className="mx-auto w-[min(92%,1300px)]">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-14">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-accent">
              02 — Portfolio
            </p>
            <h2 className="mt-4 font-display text-4xl md:text-6xl font-light">
              Featured Work
            </h2>
          </div>
          <p className="max-w-md text-muted-foreground">
            A curated selection of cinematic commercials, AI-generated product
            films and short-form campaigns.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {projects.map((project) => (
            <article
              key={project.id}
              className="group relative glass rounded-3xl overflow-hidden hover:border-accent/40 transition-all"
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-ink">
                <video
                  src={project.videoUrl}
                  className="w-full h-full object-cover"
                  controls
                  preload="metadata"
                  playsInline
                />
              </div>
              <div className="p-6">
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="font-display text-2xl">{project.title}</h3>
                  <span className="text-[10px] uppercase tracking-widest text-accent shrink-0">
                    {String(project.id).padStart(2, '0')} / {String(projects.length).padStart(2, '0')}
                  </span>
                </div>
                <p className="mt-2 text-sm text-muted-foreground line-clamp-2 min-h-10">
                  {project.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-1.5 text-[11px]">
                  {project.skills.slice(0, 3).map((skill, index) => (
                    <span key={index} className="text-muted-foreground/50 italic text-xs">
                      {skill}
                      {index < Math.min(project.skills.length, 3) - 1 && ' · '}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
