'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import {
  X,
  Play,
  Pause,
  SkipBack,
  SkipForward,
  Volume2,
  VolumeX,
  Maximize2,
  Minimize2,
  ListVideo,
  Sparkles,
  Layers,
  Film,
  Cpu,
  MonitorPlay,
  CheckCircle2,
} from 'lucide-react';
import { Project, projects } from '@/lib/projects';

interface ProjectTheaterModalProps {
  initialProjectId: number;
  isOpen: boolean;
  onClose: () => void;
}

export default function ProjectTheaterModal({
  initialProjectId,
  isOpen,
  onClose,
}: ProjectTheaterModalProps) {
  const [currentIndex, setCurrentIndex] = useState(() => {
    const found = projects.findIndex((p) => p.id === initialProjectId);
    return found >= 0 ? found : 0;
  });

  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [showListOverlay, setShowListOverlay] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const videoRef = useRef<HTMLVideoElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  const currentProject = projects[currentIndex] || projects[0];

  // Update current project when initialProjectId changes
  useEffect(() => {
    const found = projects.findIndex((p) => p.id === initialProjectId);
    if (found >= 0) {
      setCurrentIndex(found);
      setIsPlaying(true);
    }
  }, [initialProjectId]);

  // Handle play/pause toggle
  const togglePlay = useCallback(() => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  }, []);

  // Handle mute toggle
  const toggleMute = useCallback(() => {
    if (!videoRef.current) return;
    videoRef.current.muted = !videoRef.current.muted;
    setIsMuted(videoRef.current.muted);
  }, []);

  // Navigate to next project
  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
    setShowListOverlay(false);
    setIsPlaying(true);
  }, []);

  // Navigate to previous project
  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
    setShowListOverlay(false);
    setIsPlaying(true);
  }, []);

  // Select project from list
  const handleSelectProject = (index: number) => {
    setCurrentIndex(index);
    setShowListOverlay(false);
    setIsPlaying(true);
  };

  // Fullscreen toggle
  const toggleFullscreen = useCallback(() => {
    if (!document.fullscreenElement) {
      modalRef.current?.requestFullscreen().catch(() => {});
      setIsFullscreen(true);
    } else {
      document.exitFullscreen().catch(() => {});
      setIsFullscreen(false);
    }
  }, []);

  // Keyboard navigation: Escape, F11, ArrowLeft, ArrowRight, Space
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
      } else if (e.key === 'F11') {
        e.preventDefault();
        toggleFullscreen();
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        handleNext();
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        handlePrev();
      } else if (e.key === ' ' || e.code === 'Space') {
        e.preventDefault();
        togglePlay();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose, toggleFullscreen, handleNext, handlePrev, togglePlay]);

  // Lock body scroll when open
  useEffect(() => {
    if (!isOpen) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = prevOverflow;
    };
  }, [isOpen]);

  // Video time update
  const handleTimeUpdate = () => {
    if (videoRef.current) {
      setCurrentTime(videoRef.current.currentTime);
      setDuration(videoRef.current.duration || 0);
    }
  };

  // Seek video
  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTime = parseFloat(e.target.value);
    if (videoRef.current) {
      videoRef.current.currentTime = newTime;
      setCurrentTime(newTime);
    }
  };

  // Format time (mm:ss)
  const formatTime = (time: number) => {
    if (isNaN(time)) return '0:00';
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  if (!isOpen) return null;

  return (
    <div
      ref={modalRef}
      role="dialog"
      aria-modal="true"
      aria-label={`${currentProject.title} project viewer`}
      className="fixed inset-0 z-[120] bg-background/98 text-foreground flex flex-col backdrop-blur-2xl animate-in fade-in duration-200"
    >
      {/* Top Bar Header */}
      <header className="h-16 px-4 md:px-8 border-b border-border/60 flex items-center justify-between shrink-0 bg-background/60 backdrop-blur-md">
        <div className="flex items-center gap-3">
          <span className="font-display tracking-tight text-base md:text-lg">
            Favour Williams<span className="text-accent">.</span>
          </span>
          <span className="hidden sm:inline-block text-xs uppercase tracking-widest text-muted-foreground/60 border-l border-border/80 pl-3">
            Project Theater
          </span>
          <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-medium bg-accent/15 text-accent border border-accent/20">
            {String(currentIndex + 1).padStart(2, '0')} / {String(projects.length).padStart(2, '0')}
          </span>
        </div>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={toggleFullscreen}
            className="hidden md:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full glass text-xs text-muted-foreground hover:text-foreground transition-colors"
            title="Toggle fullscreen (F11)"
          >
            {isFullscreen ? <Minimize2 className="size-3.5" /> : <Maximize2 className="size-3.5" />}
            <span className="text-[10px] uppercase tracking-wider font-mono">
              {isFullscreen ? 'Exit Full' : 'Fullscreen'}
            </span>
          </button>

          <button
            type="button"
            onClick={onClose}
            className="group inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 hover:bg-primary/20 text-foreground border border-border/80 transition-all font-mono text-xs uppercase tracking-widest"
          >
            <span>CLOSE</span>
            <X className="size-4 text-muted-foreground group-hover:text-accent transition-colors" />
          </button>
        </div>
      </header>

      {/* Main Content Area (Divided into Left and Right) */}
      <div className="flex-1 min-h-0 grid grid-cols-1 lg:grid-cols-12 overflow-hidden">
        {/* LEFT SIDE: Video Player & Controls */}
        <section className="lg:col-span-7 xl:col-span-8 flex flex-col bg-ink/70 relative border-b lg:border-b-0 lg:border-r border-border/60">
          {/* Video display container maintaining native aspect ratio */}
          <div className="relative flex-1 min-h-[300px] flex items-center justify-center p-3 sm:p-6 overflow-hidden bg-gradient-to-b from-ink/90 via-ink to-ink/95">
            <video
              ref={videoRef}
              key={currentProject.videoUrl}
              src={currentProject.videoUrl}
              autoPlay
              playsInline
              loop
              onTimeUpdate={handleTimeUpdate}
              onLoadedMetadata={handleTimeUpdate}
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
              className="max-h-[52vh] sm:max-h-[62vh] lg:max-h-[72vh] w-auto max-w-full object-contain rounded-2xl shadow-2xl border border-white/5"
            />

            {/* LIST OVERLAY: Opens over the video display */}
            {showListOverlay && (
              <div
                className="absolute inset-0 z-30 bg-background/95 backdrop-blur-xl p-4 sm:p-6 flex flex-col animate-in fade-in duration-150"
                onClick={() => setShowListOverlay(false)}
              >
                <div className="flex items-center justify-between pb-3 border-b border-border/60 mb-3" onClick={(e) => e.stopPropagation()}>
                  <div className="flex items-center gap-2">
                    <ListVideo className="size-4 text-accent" />
                    <h3 className="font-display text-sm tracking-wide">Project Playlist ({projects.length})</h3>
                  </div>
                  <button
                    type="button"
                    onClick={() => setShowListOverlay(false)}
                    className="p-1 rounded-full glass hover:bg-secondary text-muted-foreground hover:text-foreground text-xs font-mono uppercase tracking-widest flex items-center gap-1 px-2.5 py-1"
                  >
                    <span>Close List</span>
                    <X className="size-3" />
                  </button>
                </div>

                <div className="flex-1 overflow-y-auto space-y-2 pr-1 custom-scrollbar" onClick={(e) => e.stopPropagation()}>
                  {projects.map((project, idx) => {
                    const isActive = idx === currentIndex;
                    return (
                      <button
                        key={project.id}
                        type="button"
                        onClick={() => handleSelectProject(idx)}
                        className={`w-full text-left p-3 rounded-2xl transition-all flex items-center justify-between gap-3 border ${
                          isActive
                            ? 'bg-accent/15 border-accent/40 text-foreground'
                            : 'glass border-border/40 hover:border-accent/30 hover:bg-secondary/40 text-muted-foreground'
                        }`}
                      >
                        <div className="flex items-center gap-3 min-w-0">
                          <span className={`size-8 rounded-full grid place-items-center font-mono text-xs shrink-0 ${
                            isActive ? 'bg-accent text-accent-foreground font-bold' : 'glass-strong text-muted-foreground'
                          }`}>
                            {String(idx + 1).padStart(2, '0')}
                          </span>
                          <div className="min-w-0">
                            <h4 className="font-display text-sm truncate text-foreground">{project.title}</h4>
                            <p className="text-[11px] text-muted-foreground truncate">{project.category[0] || 'CGI Commercial'}</p>
                          </div>
                        </div>

                        {isActive && (
                          <span className="shrink-0 text-[10px] font-mono uppercase tracking-widest text-accent flex items-center gap-1">
                            <span className="size-1.5 rounded-full bg-accent animate-pulse" />
                            Playing
                          </span>
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          {/* Custom Video Player Control Bar */}
          <div className="p-3 sm:p-4 bg-background/80 backdrop-blur-md border-t border-border/60 flex flex-col gap-2">
            {/* Timeline Progress Bar / Scrubber */}
            <div className="flex items-center gap-3 text-[11px] font-mono text-muted-foreground">
              <span className="w-10 text-right">{formatTime(currentTime)}</span>
              <input
                type="range"
                min="0"
                max={duration || 100}
                step="0.1"
                value={currentTime}
                onChange={handleSeek}
                className="flex-1 h-1.5 bg-secondary rounded-lg appearance-none cursor-pointer accent-accent"
                aria-label="Video scrubber"
              />
              <span className="w-10">{formatTime(duration)}</span>
            </div>

            {/* Controls Row */}
            <div className="flex items-center justify-between gap-2 pt-1">
              {/* Playback & Skip Controls */}
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handlePrev}
                  className="p-2 rounded-full glass hover:bg-secondary text-foreground transition-colors"
                  title="Previous project (Left Arrow)"
                  aria-label="Previous project"
                >
                  <SkipBack className="size-4" />
                </button>

                <button
                  type="button"
                  onClick={togglePlay}
                  className="size-10 rounded-full bg-accent text-accent-foreground grid place-items-center hover:scale-105 active:scale-95 transition-transform"
                  title={isPlaying ? 'Pause (Space)' : 'Play (Space)'}
                  aria-label={isPlaying ? 'Pause' : 'Play'}
                >
                  {isPlaying ? <Pause className="size-5 fill-current" /> : <Play className="size-5 fill-current ml-0.5" />}
                </button>

                <button
                  type="button"
                  onClick={handleNext}
                  className="p-2 rounded-full glass hover:bg-secondary text-foreground transition-colors"
                  title="Next project (Right Arrow)"
                  aria-label="Next project"
                >
                  <SkipForward className="size-4" />
                </button>

                <button
                  type="button"
                  onClick={toggleMute}
                  className="p-2 rounded-full glass hover:bg-secondary text-foreground transition-colors ml-1"
                  title={isMuted ? 'Unmute' : 'Mute'}
                  aria-label={isMuted ? 'Unmute' : 'Mute'}
                >
                  {isMuted ? <VolumeX className="size-4 text-muted-foreground" /> : <Volume2 className="size-4" />}
                </button>
              </div>

              {/* LIST Button to view all videos in overlay */}
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setShowListOverlay((prev) => !prev)}
                  className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono uppercase tracking-wider transition-all border ${
                    showListOverlay
                      ? 'bg-accent text-accent-foreground border-accent'
                      : 'glass hover:bg-secondary text-foreground border-border/80'
                  }`}
                  title="List all projects in overlay"
                >
                  <ListVideo className="size-4" />
                  <span className="font-semibold">List</span>
                  <span className="text-[10px] opacity-75">({projects.length})</span>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* RIGHT SIDE: Extensive Scrollable Project Details */}
        <aside className="lg:col-span-5 xl:col-span-4 flex flex-col min-h-0 bg-background/50">
          <div className="flex-1 overflow-y-auto p-5 sm:p-7 lg:p-8 space-y-6 custom-scrollbar">
            {/* Header info */}
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-3">
                <span className="text-[10px] font-mono uppercase tracking-widest text-accent px-2.5 py-1 rounded-full bg-accent/10 border border-accent/20">
                  {currentProject.category[0] || 'CGI Commercial'}
                </span>
                {currentProject.industry[0] && (
                  <span className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground px-2.5 py-1 rounded-full glass">
                    {currentProject.industry[0]}
                  </span>
                )}
              </div>

              <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-light text-balance leading-tight">
                {currentProject.title}
              </h2>

              {currentProject.subtitle && (
                <p className="mt-1 text-sm italic text-accent/90 font-serif">
                  {currentProject.subtitle}
                </p>
              )}
            </div>

            {/* Description & Goal */}
            <div className="space-y-3 text-sm text-muted-foreground leading-relaxed">
              <p>{currentProject.description}</p>
              {currentProject.projectGoal && (
                <div className="p-3.5 rounded-2xl glass-strong border border-border/80">
                  <span className="text-[10px] uppercase tracking-widest text-accent font-mono block mb-1">
                    Project Goal
                  </span>
                  <p className="text-foreground text-xs leading-relaxed">
                    {currentProject.projectGoal}
                  </p>
                </div>
              )}
            </div>

            {/* Key Focus Tagline */}
            {currentProject.keyFocus && (
              <div className="flex items-start gap-2.5 text-xs text-foreground/90 p-3 rounded-2xl glass border border-accent/20">
                <Sparkles className="size-4 text-accent shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-accent block text-[11px] uppercase tracking-wider font-mono">
                    Key Focus
                  </span>
                  <p className="text-muted-foreground text-xs mt-0.5">{currentProject.keyFocus}</p>
                </div>
              </div>
            )}

            {/* Production Workflow */}
            {currentProject.workflow && currentProject.workflow.length > 0 && (
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Layers className="size-4 text-accent" />
                  <h3 className="font-display text-base tracking-wide">Production Workflow</h3>
                </div>
                <div className="space-y-2.5">
                  {currentProject.workflow.map((step, idx) => (
                    <div key={idx} className="p-3 rounded-2xl glass border border-border/60">
                      <div className="flex items-center gap-2 text-xs font-semibold text-foreground">
                        <span className="size-4 rounded-full bg-accent/20 text-accent font-mono text-[10px] grid place-items-center">
                          {idx + 1}
                        </span>
                        {step.title}
                      </div>
                      <p className="mt-1 text-xs text-muted-foreground leading-relaxed pl-6">
                        {step.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Key Features */}
            {currentProject.keyFeatures && currentProject.keyFeatures.length > 0 && (
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Film className="size-4 text-accent" />
                  <h3 className="font-display text-base tracking-wide">Key Features</h3>
                </div>
                <ul className="space-y-2 text-xs text-muted-foreground">
                  {currentProject.keyFeatures.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 leading-relaxed">
                      <CheckCircle2 className="size-3.5 text-accent shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Software Used & Technical Execution */}
            {currentProject.toolsUsed && currentProject.toolsUsed.length > 0 && (
              <div>
                <div className="flex items-center gap-2 mb-2.5">
                  <Cpu className="size-4 text-accent" />
                  <h3 className="font-display text-base tracking-wide">Software & AI Tools</h3>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {currentProject.toolsUsed.map((tool, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-full text-[11px] font-mono glass-strong text-foreground/90 border border-border/80"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Video Metrics */}
            {currentProject.metrics && (
              <div>
                <div className="flex items-center gap-2 mb-2.5">
                  <MonitorPlay className="size-4 text-accent" />
                  <h3 className="font-display text-base tracking-wide">Video Metrics</h3>
                </div>
                <div className="grid grid-cols-2 gap-2 text-xs font-mono">
                  {currentProject.metrics.resolution && (
                    <div className="p-2.5 rounded-xl glass">
                      <span className="text-[10px] text-muted-foreground uppercase tracking-widest block">Resolution</span>
                      <span className="text-foreground font-semibold">{currentProject.metrics.resolution}</span>
                    </div>
                  )}
                  {currentProject.metrics.duration && (
                    <div className="p-2.5 rounded-xl glass">
                      <span className="text-[10px] text-muted-foreground uppercase tracking-widest block">Duration</span>
                      <span className="text-foreground font-semibold">{currentProject.metrics.duration}</span>
                    </div>
                  )}
                  {currentProject.metrics.frameRate && (
                    <div className="p-2.5 rounded-xl glass">
                      <span className="text-[10px] text-muted-foreground uppercase tracking-widest block">Frame Rate</span>
                      <span className="text-foreground font-semibold">{currentProject.metrics.frameRate}</span>
                    </div>
                  )}
                  {currentProject.metrics.format && (
                    <div className="p-2.5 rounded-xl glass">
                      <span className="text-[10px] text-muted-foreground uppercase tracking-widest block">Format</span>
                      <span className="text-foreground font-semibold">{currentProject.metrics.format}</span>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Creative Strategy */}
            {currentProject.strategy && (
              <div className="p-4 rounded-2xl glass border border-border/80 space-y-2 text-xs">
                <span className="text-[10px] uppercase tracking-widest font-mono text-accent block">
                  Creative Strategy
                </span>
                {currentProject.strategy.targetAudience && (
                  <p>
                    <strong className="text-foreground">Audience:</strong>{' '}
                    <span className="text-muted-foreground">{currentProject.strategy.targetAudience}</span>
                  </p>
                )}
                {currentProject.strategy.tone && (
                  <p>
                    <strong className="text-foreground">Tone:</strong>{' '}
                    <span className="text-muted-foreground">{currentProject.strategy.tone}</span>
                  </p>
                )}
                {currentProject.strategy.platformFocus && (
                  <p>
                    <strong className="text-foreground">Platform Focus:</strong>{' '}
                    <span className="text-muted-foreground">{currentProject.strategy.platformFocus}</span>
                  </p>
                )}
                {currentProject.strategy.visualDirection && (
                  <p>
                    <strong className="text-foreground">Visual Direction:</strong>{' '}
                    <span className="text-muted-foreground">{currentProject.strategy.visualDirection}</span>
                  </p>
                )}
              </div>
            )}

            {/* Impact / Creative Note */}
            {(currentProject.impact || currentProject.creativeNote) && (
              <blockquote className="p-3.5 rounded-2xl bg-accent/10 border-l-2 border-accent text-xs italic text-foreground/90 leading-relaxed">
                {currentProject.impact || currentProject.creativeNote}
              </blockquote>
            )}

            {/* Core Competencies & Skills */}
            <div>
              <span className="text-[10px] uppercase tracking-widest font-mono text-muted-foreground block mb-2">
                Core Competencies
              </span>
              <div className="flex flex-wrap gap-1">
                {currentProject.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="text-[10px] px-2 py-0.5 rounded-md glass text-muted-foreground"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
