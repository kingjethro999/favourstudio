'use client';

import { Download, Eye, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';

// react-pdf v10 ships the layer styles at `react-pdf/dist/Page/...` (NOT the
// old `dist/esm/Page/...` path). These files set the `--react-pdf-text-layer`
// and `--react-pdf-annotation-layer` CSS vars that react-pdf's runtime checks
// for, so importing them both styles the layers AND silences the
// "styles not found" warning.
import 'react-pdf/dist/Page/TextLayer.css';
import 'react-pdf/dist/Page/AnnotationLayer.css';

export default function Resume() {
  const [showPreview, setShowPreview] = useState(false);
  const [numPages, setNumPages] = useState<number | null>(null);
  const [pdfWidth, setPdfWidth] = useState(800);

  const resumeUrl = '/FavourWilliamsCV.pdf';

  useEffect(() => {
    // pdfjs references browser globals (DOMMatrix); only set up the worker
    // in the browser to avoid breaking Next.js server prerender.
    pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

    const updateWidth = () => {
      setPdfWidth(Math.min(800, window.innerWidth - 64));
    };

    updateWidth();
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  function onDocumentLoadSuccess({ numPages: nextNumPages }: { numPages: number }) {
    setNumPages(nextNumPages);
  }

  return (
    <section id="resume" className="py-20 md:py-28 lg:py-40">
      <div className="mx-auto w-[min(92%,1000px)]">
        <div className="glass-strong rounded-3xl p-6 md:p-10 lg:p-16 grain relative overflow-hidden">
          <div
            className="absolute -top-24 -right-24 size-60 md:size-80 rounded-full opacity-30 blur-3xl"
            style={{ background: 'var(--color-accent)' }}
          />
          <p className="text-xs uppercase tracking-[0.25em] text-accent">
            06 — Résumé
          </p>
          <h2 className="mt-4 font-display text-3xl md:text-4xl lg:text-5xl font-light max-w-xl">
            View my résumé.
          </h2>
          <p className="mt-4 max-w-lg text-sm md:text-base text-muted-foreground">
            The full breakdown of experience, tools, credits and creative
            direction — one PDF.
          </p>
          <div className="mt-8 md:mt-10 flex flex-wrap gap-3">
            <button
              onClick={() => setShowPreview(true)}
              className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-5 md:px-6 py-3 md:py-3.5 text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-colors"
            >
              <Eye className="size-4" aria-hidden="true" />
              Preview Resume
            </button>
            <a
              href={resumeUrl}
              download
              className="inline-flex items-center gap-2 rounded-full glass px-5 md:px-6 py-3 md:py-3.5 text-sm font-medium hover:bg-secondary transition-colors"
            >
              <Download className="size-4" aria-hidden="true" />
              Download Resume
            </a>
          </div>
        </div>
      </div>

      {/* PDF Preview Modal */}
      {showPreview && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-2 md:p-4">
          <div className="relative bg-ink rounded-xl md:rounded-2xl w-full max-w-[95vw] md:max-w-4xl max-h-[90vh] overflow-hidden">
            <button
              onClick={() => setShowPreview(false)}
              className="absolute top-3 md:top-4 right-3 md:right-4 z-10 size-8 md:size-10 rounded-full bg-black/50 hover:bg-black/70 flex items-center justify-center transition-colors"
              aria-label="Close preview"
            >
              <X className="size-4 md:size-5 text-white" />
            </button>
            <div className="overflow-y-auto max-h-[90vh] p-2 md:p-4 lg:p-8">
              <Document
                file={resumeUrl}
                onLoadSuccess={onDocumentLoadSuccess}
                className="flex flex-col items-center gap-2 md:gap-4"
              >
                {Array.from(new Array(numPages || 0), (el, index) => (
                  <Page
                    key={`page_${index + 1}`}
                    pageNumber={index + 1}
                    renderAnnotationLayer
                    renderTextLayer
                    className="shadow-lg"
                    width={pdfWidth}
                  />
                ))}
              </Document>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
