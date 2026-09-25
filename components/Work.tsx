'use client';

import { useState, useEffect } from 'react';
import { Play, ArrowUpRight, Shuffle, Maximize2 } from 'lucide-react';
import { projects, Project } from '@/lib/projects';
import ProjectTheaterModal from './ProjectTheaterModal';

export default function Work() {
  // Safe hydration: initial 4 projects, shuffled randomly after mount
  const [displayedProjects, setDisplayedProjects] = useState<Project[]>(() =>
    projects.slice(0, 4)
  );
  const [theaterOpen, setTheaterOpen] = useState(false);
  const [activeProjectId, setActiveProjectId] = useState<number>(1);

  // Pick 4 random projects after mounting to avoid hydration mismatch
  useEffect(() => {
    const shuffled = [...projects].sort(() => Math.random() - 0.5);
    setDisplayedProjects(shuffled.slice(0, 4));
  }, []);

  const handleShuffle = () => {
    const shuffled = [...projects].sort(() => Math.random() - 0.5);
    setDisplayedProjects(shuffled.slice(0, 4));
  };

  const openTheater = (id: number) => {
    setActiveProjectId(id);
    setTheaterOpen(true);
  };

  return (
    <section id="work" className="py-20 md:py-28 lg:py-40">
      {/* Width set to min(92%,1200px) to match all other sections */}
      <div className="mx-auto w-[min(92%,1200px)]">
        <div className="flex flex-wrap items-end justify-between gap-4 md:gap-6 mb-10 md:mb-14">
          <div>
            <div className="flex items-center gap-3">
              <p className="text-xs uppercase tracking-[0.25em] text-accent">
                02 — Portfolio
              </p>
              <button
                type="button"
                onClick={handleShuffle}
                className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-mono uppercase tracking-wider glass hover:bg-secondary text-muted-foreground hover:text-accent transition-colors"
                title="Shuffle 4 random featured projects"
              >
                <Shuffle className="size-3" />
                <span>Shuffle 4</span>
              </button>
            </div>
            <h2 className="mt-4 font-display text-3xl md:text-4xl lg:text-6xl font-light">
              Featured Work
            </h2>
          </div>
          <p className="max-w-md text-sm md:text-base text-muted-foreground">
            A curated selection of cinematic commercials, AI-generated product
            films and short-form campaigns. Displaying 4 featured projects.
          </p>
        </div>

        {/* 4 Featured Project Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {displayedProjects.map((project) => (
            <article
              key={project.id}
              onClick={() => openTheater(project.id)}
              className="group relative glass rounded-3xl overflow-hidden hover:border-accent/50 hover:shadow-2xl hover:shadow-accent/10 transition-all cursor-pointer flex flex-col"
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-ink">
                <video
                  src={project.videoUrl}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  preload="metadata"
                  playsInline
                  muted
                  loop
                  onMouseEnter={(e) => {
                    try {
                      e.currentTarget.play();
                    } catch {}
                  }}
                  onMouseLeave={(e) => {
                    try {
                      e.currentTarget.pause();
                      e.currentTarget.currentTime = 0;
                    } catch {}
                  }}
                />

                {/* Hover Play Button Overlay */}
                <div className="absolute inset-0 bg-ink/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="size-12 rounded-full bg-accent text-accent-foreground grid place-items-center shadow-lg transform group-hover:scale-110 transition-transform">
                    <Play className="size-5 fill-current ml-0.5" />
                  </div>
                </div>

                {/* Badge */}
                <div className="absolute top-3 right-3 opacity-90">
                  <span className="glass rounded-full px-2.5 py-1 text-[10px] font-mono uppercase tracking-widest text-accent flex items-center gap-1">
                    <Maximize2 className="size-2.5" />
                    Theater
                  </span>
                </div>
              </div>

              <div className="p-4 md:p-5 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-baseline justify-between gap-2">
                    <h3 className="font-display text-lg md:text-xl line-clamp-1 group-hover:text-accent transition-colors">
                      {project.title}
                    </h3>
                    <span className="text-[10px] uppercase font-mono tracking-widest text-accent shrink-0">
                      {String(project.id).padStart(2, '0')} / {String(projects.length).padStart(2, '0')}
                    </span>
                  </div>

                  {project.subtitle && (
                    <p className="mt-0.5 text-[11px] font-serif italic text-muted-foreground/80 line-clamp-1">
                      {project.subtitle}
                    </p>
                  )}

                  <p className="mt-2 text-xs text-muted-foreground line-clamp-2">
                    {project.description}
                  </p>
                </div>

                <div className="mt-3 pt-3 border-t border-border/50 flex flex-wrap gap-1 text-[10px]">
                  {project.skills.slice(0, 3).map((skill, index) => (
                    <span key={index} className="text-muted-foreground/70 italic text-[11px]">
                      {skill}
                      {index < Math.min(project.skills.length, 3) - 1 && ' · '}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* View More Button underneath the four projects */}
        <div className="mt-12 md:mt-16 flex flex-col items-center justify-center gap-3">
          <button
            type="button"
            onClick={() => openTheater(displayedProjects[0]?.id || 1)}
            className="group inline-flex items-center gap-3 rounded-full bg-primary text-primary-foreground px-8 py-4 text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-all shadow-xl hover:shadow-accent/25 hover:scale-[1.02] active:scale-[0.98]"
          >
            <Play className="size-4 fill-current transition-transform group-hover:scale-110" />
            <span className="font-display tracking-wide">View More Projects ({projects.length})</span>
            <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
          <p className="text-xs text-muted-foreground font-mono">
            Opens full-screen video player theater with complete project details
          </p>
        </div>
      </div>

      {/* Full-Screen Theater Modal */}
      <ProjectTheaterModal
        isOpen={theaterOpen}
        initialProjectId={activeProjectId}
        onClose={() => setTheaterOpen(false)}
      />
    </section>
  );
}
