'use client';

import dynamic from 'next/dynamic';

// react-pdf / pdfjs-dist reference browser globals (DOMMatrix) at import time,
// which breaks Next.js server prerendering. Load Resume client-only so pdfjs
// never runs in the Node build environment.
const Resume = dynamic(() => import('./Resume'), {
  ssr: false,
  loading: () => null,
});

export default function ResumeLoader() {
  return <Resume />;
}
