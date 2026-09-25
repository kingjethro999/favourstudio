'use client';

import { useCallback, useEffect, useRef, useState } from 'react';

export default function Preloader() {
  const [phase, setPhase] = useState<'playing' | 'leaving' | 'done'>('playing');
  const exitTimer = useRef<number | null>(null);
  const isLeaving = useRef(false);

  const leave = useCallback(() => {
    if (isLeaving.current) return;
    isLeaving.current = true;
    setPhase('leaving');
    exitTimer.current = window.setTimeout(() => setPhase('done'), 550);
  }, []);

  useEffect(() => {
    let fontsReady = false;
    let minimumElapsed = false;
    let cancelled = false;
    const maybeLeave = () => {
      if (!cancelled && fontsReady && minimumElapsed) leave();
    };

    const minimumTimer = window.setTimeout(() => {
      minimumElapsed = true;
      maybeLeave();
    }, 1050);
    const maximumTimer = window.setTimeout(() => {
      fontsReady = true;
      maybeLeave();
    }, 2200);

    document.fonts.ready.then(() => {
      fontsReady = true;
      maybeLeave();
    });

    return () => {
      cancelled = true;
      window.clearTimeout(minimumTimer);
      window.clearTimeout(maximumTimer);
      if (exitTimer.current !== null) window.clearTimeout(exitTimer.current);
    };
  }, [leave]);

  useEffect(() => {
    if (phase === 'done' || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [phase]);

  if (phase === 'done') return null;

  return (
    <div className={`preloader ${phase === 'leaving' ? 'preloader-leaving' : ''}`} aria-label="Opening Favour Williams portfolio">
      <div className="preloader-frame" aria-hidden="true" />
      <div className="preloader-topline">
        <span>FW<span className="preloader-dot">.</span> STUDIO</span>
        <span>CREATIVE PORTFOLIO / 2026</span>
      </div>

      <div className="preloader-center">
        <div className="preloader-lens" aria-hidden="true">
          <div className="preloader-lens-ring" />
          <div className="preloader-lens-inner">
            <span className="preloader-lens-text">FW</span>
          </div>
        </div>
        <p className="preloader-eyebrow">SETTING THE SCENE</p>
        <h2>Favour <em>Williams</em></h2>
        <p className="preloader-disciplines">AI COMMERCIALS <span>✦</span> PRODUCT FILMS <span>✦</span> MOTION DESIGN</p>
        <div className="preloader-progress" aria-hidden="true"><span /></div>
      </div>

      <div className="preloader-bottomline">
        <span>ABUJA, NIGERIA</span>
        <button type="button" onClick={leave}>SKIP INTRO <span aria-hidden="true">↗</span></button>
      </div>
    </div>
  );
}
