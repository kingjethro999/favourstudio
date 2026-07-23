# Favour Studio

A personal portfolio website for **Favour Williams** — 3D Product Animation & AI
Commercial Video Creator, based in Abuja, Nigeria.

Built with [Next.js](https://nextjs.org) (App Router) + [Tailwind CSS](https://tailwindcss.com).
The site showcases Favour's CGI product animations, AI-generated commercials, and
motion graphics, with an in-page PDF résumé preview (powered by
[react-pdf](https://github.com/wojtekmaj/react-pdf)).

> Developed by **King Jethro** ([@kingjethro999](https://github.com/kingjethro999)).

---

## Client

The site is built for the following client (source: `public/FavourWilliamsCV.pdf`).

| | |
|---|---|
| **Name** | Favour Williams |
| **Discipline** | 3D Product Animation / AI Commercial Video Creator |
| **Location** | Abuja, Nigeria |
| **Phone** | +2347081725931 |
| **Email** | favourwilliams450@gmail.com |
| **Portfolio** | https://favourstudio.vercel.app |

### Profile
Creative and motivated AI Commercial Video Creator with a strong portfolio of
self-created CGI product animations, AI-generated commercials, and motion
graphics. Skilled at producing visually engaging content using AI creative tools
and video editing software. A quick learner with excellent communication,
attention to detail, and problem-solving skills.

### Projects
- **AI Commercial Video Creator** (Personal portfolio, Present–2025) — created
  high-quality AI-generated product commercials and CGI product animations;
  planned concepts, wrote prompts, edited videos, and delivered polished final
  content; built a professional online portfolio.
- **Freelance Practice Projects** — designed promotional videos for food,
  skincare, and consumer products; developed motion graphics and visual
  storytelling for marketing campaigns.

### Education
- **National Diploma (ND) in Mass Communication** (In Progress, 2025–2026) —
  Lincoln College of Science and Technology, Abuja, Nigeria. Coursework: Mass
  Communication, Digital Media, Public Relations, Communication Skills.

### Skills
CGI Product Animation · AI Commercial Creation · Motion Graphics · Video Editing ·
Product Visualization · Visual Storytelling · Creative Direction · CapCut ·
Canva · ChatGPT · Gemini · Qwen AI

---

## Tech Stack
- **Framework:** Next.js 16 (App Router, Turbopack)
- **Styling:** Tailwind CSS v4, custom design tokens
- **PDF preview:** react-pdf + pdfjs-dist (client-only, `next/dynamic` `ssr: false`)
- **Icons:** lucide-react
- **Deployment:** Vercel

## Project Structure
```
app/
  page.tsx              # Home: Header, Hero, Work, Services, Resume, Contact…
  page.tsx -> components/Resume.tsx   # résumé preview modal (react-pdf)
components/
  Resume.tsx            # PDF viewer (loaded client-only via ResumeLoader)
  ResumeLoader.tsx      # next/dynamic ssr:false wrapper (avoids pdfjs DOMMatrix in Node)
public/
  FavourWilliamsCV.pdf  # client résumé (source of the client info above)
```

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the
result. Edit `app/page.tsx` — the page auto-updates as you save.

## Scripts
```bash
pnpm dev     # start dev server
pnpm build   # production build
pnpm start   # serve the production build
pnpm lint    # lint
```

## Notes
- The résumé PDF lives in `public/` and is rendered client-side only. react-pdf's
  layer CSS is imported from `react-pdf/dist/Page/TextLayer.css` and
  `react-pdf/dist/Page/AnnotationLayer.css` (react-pdf v10 path).
- To update the client's details, edit `public/FavourWilliamsCV.pdf` and the
  **Client** section above.

## Deploy on Vercel
The easiest way to deploy is the [Vercel Platform](https://vercel.com/new) from
the creators of Next.js. See the
[Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying).
