export interface Project {
  id: number;
  title: string;
  description: string;
  videoUrl: string;
  skills: string[];
  industry: string[];
  category: string[];
}

export const projects: Project[] = [
  {
    id: 1,
    title: "The Ordinary Serum",
    description: "A clean, cinematic commercial showcasing the texture, precise dropper application, and hydrating effects of The Ordinary's Niacinamide serum on the skin.",
    videoUrl: "https://www.dropbox.com/scl/fi/hg48b26055uq5wp21eo9i/VID-20260709-WA0038.mp4?rlkey=hmc5oah02pndmlkf9ubs9sbl2&st=cce6fa31&raw=1",
    skills: ["Video Editing", "Sound Design", "Color Grading", "Skincare Cinematography"],
    industry: ["Skincare & Cosmetics", "Advertising & Marketing Video"],
    category: ["Product Commercial"]
  },
  {
    id: 2,
    title: "Lay's Classic Potato Chips",
    description: "Created a premium CGI commercial for Lay's Classic Potato Chips using AI-assisted animation workflows. The project focuses on cinematic lighting, realistic product materials, dynamic chip motion, smooth camera movement, and luxury commercial aesthetics designed for social media and digital advertising.",
    videoUrl: "https://www.dropbox.com/scl/fi/4uv5di83805713nohhfkc/VID-20260717-WA0002.mp4?rlkey=58c0r1kjb0py5v3pz2zpmjy7g&st=l5yk4yn1&raw=1",
    skills: ["AI Product Animation", "CGI Product Commercials", "3D Motion Design", "Product Visualization", "Motion Graphics", "Cinematic Lighting", "Camera Animation", "Visual Storytelling", "Video Editing", "CapCut", "Prompt Engineering", "AI Video Generation"],
    industry: ["Food & Beverage", "Advertising & Marketing", "Consumer Packaged Goods (CPG)"],
    category: ["CGI Product Commercial", "Product Animation", "3D Commercial", "BrandADVERTISEMENT", "Motion Design Portfolio"]
  },
  {
    id: 3,
    title: "Nestlé Golden Morn",
    description: "Produced a hyper-realistic CGI commercial for Nestlé Golden Morn, showcasing the product with premium lighting, cinematic camera movements, realistic cereal simulations, and high-quality visual effects. Designed to emulate luxury food advertising for digital marketing, social media campaigns, and brand storytelling.",
    videoUrl: "https://www.dropbox.com/scl/fi/9h13zal3crqljtisrc3db/VID-20260720-WA0139.mp4?rlkey=9fqlnt0e4u6mspa64pdx5250y&st=gcrylxfg&raw=1",
    skills: ["AI Product Animation", "CGI Commercial Production", "3D Motion Design", "Product Visualization", "Motion Graphics", "Cinematic Lighting", "Camera Animation", "Food Product Rendering", "Visual Effects (VFX)", "Video Editing", "CapCut", "Prompt Engineering"],
    industry: ["Food & Beverage", "Consumer Packaged Goods (CPG)", "Advertising & Marketing"],
    category: ["CGI Product Commercial", "Food Product Animation", "3D Product Visualization", "Brand Advertisement", "Motion Design Portfolio"]
  },
  {
    id: 4,
    title: "Afnan 9 PM",
    description: "Created a cinematic CGI commercial for Afnan 9 PM, highlighting the fragrance with premium lighting, realistic glass materials, ray-traced reflections, dramatic camera movements, and atmospheric visual effects. Designed to capture the elegance and sophistication of a luxury perfume advertisement for social media and digital marketing campaigns.",
    videoUrl: "https://www.dropbox.com/scl/fi/v2nz3t5s349zsvignyfdp/VID-20260720-WA0138.mp4?rlkey=wah7f0uma49jqi3ci6c7qze0o&st=6mkbtyd2&raw=1",
    skills: ["AI Product Animation", "CGI Commercial Production", "3D Motion Design", "Luxury Product Visualization", "Motion Graphics", "Cinematic Lighting", "Camera Animation", "Realistic Material & Reflection Design", "Visual Effects (VFX)", "Video Editing", "CapCut", "Prompt Engineering"],
    industry: ["Fragrance & Beauty", "Luxury Goods", "Advertising & Marketing"],
    category: ["CGI Product Commercial", "Luxury Product Animation", "Perfume Advertisement", "3D Product Visualization", "Motion Design Portfolio"]
  },
  {
    id: 5,
    title: "Monster Energy Drink",
    description: "A high-energy, fast-paced promotional concept video engineered for Monster Energy. The sequence utilizes dynamic transitions, simulated smoke, and raw energy effects alongside macro close-ups and precise beat-matching to capture the brand's intense, refreshing, and electrifying identity. Designed specifically for short-form social media dominance.",
    videoUrl: "https://www.dropbox.com/scl/fi/oh2756ud10qczdr5c90lf/VID-20260720-WA0085.mp4?rlkey=cena4if4offs21i2kmyjstsus&st=c4wo6y06&raw=1",
    skills: ["Dynamic Editing", "Audio Engineering", "Visual Effects", "Motion Design", "Post-Production"],
    industry: ["Energy Drinks", "Consumer Packaged Goods"],
    category: ["CGI Products Commercial Video", "Motion Graphics & Visual Effects", "Product Videography & Commercials", "Social Media Content Creation"]
  }
];
