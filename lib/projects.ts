export interface ProjectWorkflow {
  title: string;
  description: string;
}

export interface ProjectMetrics {
  resolution?: string;
  frameRate?: string;
  format?: string;
  duration?: string;
}

export interface ProjectStrategy {
  targetAudience?: string;
  tone?: string;
  platformFocus?: string;
  visualDirection?: string;
}

export interface Project {
  id: number;
  title: string;
  subtitle?: string;
  description: string;
  videoUrl: string;
  skills: string[];
  industry: string[];
  category: string[];
  toolsUsed?: string[];
  keyFocus?: string;
  projectGoal?: string;
  workflow?: ProjectWorkflow[];
  keyFeatures?: string[];
  metrics?: ProjectMetrics;
  strategy?: ProjectStrategy;
  impact?: string;
  creativeNote?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "The Ordinary Serum",
    subtitle: "Cinematic Skincare Commercial",
    description: "A clean, cinematic commercial showcasing the texture, precise dropper application, and hydrating effects of The Ordinary's Niacinamide serum on the skin.",
    videoUrl: "https://www.dropbox.com/scl/fi/hg48b26055uq5wp21eo9i/VID-20260709-WA0038.mp4?rlkey=hmc5oah02pndmlkf9ubs9sbl2&st=cce6fa31&raw=1",
    skills: ["Video Editing", "Sound Design", "Color Grading", "Skincare Cinematography"],
    industry: ["Skincare & Cosmetics", "Advertising & Marketing Video"],
    category: ["Product Commercial", "Beauty & Skincare"],
    toolsUsed: ["CapCut", "Adobe Premiere Pro", "DaVinci Resolve"],
    keyFocus: "Texture rendering, precise dropper dynamics, and hydrating skin glow.",
    projectGoal: "Highlight the scientific purity and sensory application experience of The Ordinary Niacinamide serum through macro cinematography.",
    workflow: [
      { title: "Macro Texture Capture", description: "Focused lighting to illuminate viscous serum droplets and bottle transparency." },
      { title: "Color Grading & Balance", description: "Minimalist, clean laboratory aesthetic with natural skin tones." },
      { title: "Sound Design", description: "Tactile audio cues: dropper suction, glass clink, and gentle droplet impacts." }
    ],
    keyFeatures: ["Dropper Application Macro Detail", "Hydrating Viscosity Simulation", "High-Key Clean Studio Lighting"],
    metrics: { resolution: "1080p (Full HD)", frameRate: "30fps", format: "MP4", duration: "15s" },
    strategy: { targetAudience: "Skincare enthusiasts & beauty consumers aged 18-35", tone: "Minimal, pure, trustworthy, clinical luxury", platformFocus: "Instagram Reels & TikTok Beauty Feeds" }
  },
  {
    id: 2,
    title: "Lay's Classic Potato Chips",
    subtitle: "Hyper-Realistic CGI Product Commercial",
    description: "Created a premium CGI commercial for Lay's Classic Potato Chips using AI-assisted animation workflows inspired by Blender and high-end advertising. The project focuses on cinematic lighting, realistic product materials, dynamic chip motion, smooth camera movement, and luxury commercial aesthetics designed for social media and digital advertising.",
    videoUrl: "https://www.dropbox.com/scl/fi/4uv5di83805713nohhfkc/VID-20260717-WA0002.mp4?rlkey=58c0r1kjb0py5v3pz2zpmjy7g&st=l5yk4yn1&raw=1",
    skills: ["AI Product Animation", "CGI Product Commercials", "3D Motion Design", "Product Visualization", "Motion Graphics", "Cinematic Lighting", "Camera Animation", "Visual Storytelling", "Video Editing", "CapCut", "Prompt Engineering", "AI Video Generation"],
    industry: ["Food & Beverage", "Advertising & Marketing", "Consumer Packaged Goods (CPG)"],
    category: ["CGI Product Commercial", "Product Animation", "3D Commercial", "Brand Advertisement", "Motion Design Portfolio"],
    toolsUsed: ["Google Flow", "Runway Gen-2", "Blender Workflows", "CapCut"],
    keyFocus: "Dynamic chip tumble, savory golden textures, crisp crunch audio, and luxury lighting.",
    projectGoal: "Transform an everyday snack into an appetizing luxury visual experience with dynamic fluid chip physics.",
    workflow: [
      { title: "AI-Assisted 3D Animation", description: "Simulating chip curvature, golden seasoning specks, and airborne tumbling physics." },
      { title: "Cinematic Lighting & Shading", description: "Warm rim lighting emphasizing the signature crunch and golden crisp edges." },
      { title: "Dynamic Sound & Pacing", description: "Foley-matched crunch impact audio synced with rapid-cut pacing." }
    ],
    keyFeatures: ["Hyper-Realistic Chip Textures", "Slow-Motion Airborne Tumble", "Savory Seasoning Particle Effects"],
    metrics: { resolution: "1080p (Full HD)", frameRate: "30fps", format: "MP4", duration: "20s" },
    strategy: { targetAudience: "Snack lovers & impulse buyers", tone: "Irresistible, dynamic, savory, high-energy", platformFocus: "TikTok, Instagram Reels, YouTube Shorts" }
  },
  {
    id: 3,
    title: "Nestlé Golden Morn",
    subtitle: "Cinematic CGI Product Commercial",
    description: "Produced a hyper-realistic CGI commercial for Nestlé Golden Morn, showcasing the product with premium lighting, cinematic camera movements, realistic cereal simulations, and high-quality visual effects. Designed to emulate luxury food advertising for digital marketing, social media campaigns, and brand storytelling.",
    videoUrl: "https://www.dropbox.com/scl/fi/9h13zal3crqljtisrc3db/VID-20260720-WA0139.mp4?rlkey=9fqlnt0e4u6mspa64pdx5250y&st=gcrylxfg&raw=1",
    skills: ["AI Product Animation", "CGI Commercial Production", "3D Motion Design", "Product Visualization", "Motion Graphics", "Cinematic Lighting", "Camera Animation", "Food Product Rendering", "Visual Effects (VFX)", "Video Editing", "CapCut", "Prompt Engineering"],
    industry: ["Food & Beverage", "Consumer Packaged Goods (CPG)", "Advertising & Marketing"],
    category: ["CGI Product Commercial", "Food Product Animation", "3D Product Visualization", "Brand Advertisement", "Motion Design Portfolio"],
    toolsUsed: ["Google Flow", "Runway", "CapCut"],
    keyFocus: "Golden grain cascades, appetizing milk splash simulations, morning sunrise lighting.",
    projectGoal: "Evoke warmth, nourishment, and family morning energy through broadcast-grade cereal splash simulations.",
    workflow: [
      { title: "Cereal Grain Simulation", description: "Crisp corn flake physics cascading into a ceramic bowl." },
      { title: "Milk Splash Dynamics", description: "High-speed fluid simulation capturing silky milk droplets on grain surface." },
      { title: "Atmospheric Morning Lighting", description: "Warm dawn sunlight creating golden highlights on the cereal texture." }
    ],
    keyFeatures: ["High-Fidelity Grain Cascades", "Dynamic Fluid Milk Splash", "Golden Hour Studio Lighting"],
    metrics: { resolution: "1080p (Full HD)", frameRate: "30fps", format: "MP4", duration: "19s" },
    strategy: { targetAudience: "Families & young professionals seeking healthy breakfast", tone: "Nourishing, energetic, warm, wholesome", platformFocus: "Digital Ads & Social Media Campaigns" }
  },
  {
    id: 4,
    title: "Afnan 9 PM",
    subtitle: "Luxury CGI Fragrance Commercial",
    description: "Created a cinematic CGI commercial for Afnan 9 PM, highlighting the fragrance with premium lighting, realistic glass materials, ray-traced reflections, dramatic camera movements, and atmospheric visual effects. Designed to capture the elegance and sophistication of a luxury perfume advertisement for social media and digital marketing campaigns.",
    videoUrl: "https://www.dropbox.com/scl/fi/v2nz3t5s349zsvignyfdp/VID-20260720-WA0138.mp4?rlkey=wah7f0uma49jqi3ci6c7qze0o&st=6mkbtyd2&raw=1",
    skills: ["AI Product Animation", "CGI Commercial Production", "3D Motion Design", "Luxury Product Visualization", "Motion Graphics", "Cinematic Lighting", "Camera Animation", "Realistic Material & Reflection Design", "Visual Effects (VFX)", "Video Editing", "CapCut", "Prompt Engineering"],
    industry: ["Fragrance & Beauty", "Luxury Goods", "Advertising & Marketing"],
    category: ["CGI Product Commercial", "Luxury Product Animation", "Perfume Advertisement", "3D Product Visualization", "Motion Design Portfolio"],
    toolsUsed: ["Google Flow", "Runway Gen-2", "CapCut"],
    keyFocus: "Reflective dark glass, amber liquid refraction, nocturnal mist, and dramatic camera pans.",
    projectGoal: "Position Afnan 9 PM as an evening luxury fragrance through moody noir aesthetics and crystalline glass rendering.",
    workflow: [
      { title: "Ray-Traced Glass Material", description: "Precision rendering of thick perfume glass with realistic internal amber refraction." },
      { title: "Atmospheric Visual Effects", description: "Simulated evening mist, volumetric light rays, and gold dust particulate." },
      { title: "Cinematic Lighting", description: "High-contrast chiaroscuro lighting accentuating the bottle's bold silhouette." }
    ],
    keyFeatures: ["Crystalline Bottle Refraction", "Volumetric Nocturnal Smoke", "Slow-Motion Elegant Camera Orbit"],
    metrics: { resolution: "1080p (Full HD)", frameRate: "30fps", format: "MP4", duration: "25s" },
    strategy: { targetAudience: "Luxury fragrance collectors & night-out enthusiasts", tone: "Seductive, mysterious, sophisticated, bold", platformFocus: "Instagram Reels & TikTok High-End Aesthetics" }
  },
  {
    id: 5,
    title: "Monster Energy Drink",
    subtitle: "Commercial Product Concept Video",
    description: "A high-energy, fast-paced promotional concept video engineered for Monster Energy. The sequence utilizes dynamic transitions, simulated smoke, and raw energy effects alongside macro close-ups and precise beat-matching to capture the brand's intense, refreshing, and electrifying identity. Designed specifically for short-form social media dominance (TikTok, Instagram Reels, YouTube Shorts), the video seamlessly blends product aesthetics—like pouring over crisp ice—with advanced motion graphics.",
    videoUrl: "https://www.dropbox.com/scl/fi/oh2756ud10qczdr5c90lf/VID-20260720-WA0085.mp4?rlkey=cena4if4offs21i2kmyjstsus&st=c4wo6y06&raw=1",
    skills: ["Dynamic Editing", "Audio Engineering", "Visual Effects", "Motion Design", "Post-Production"],
    industry: ["Energy Drinks", "Consumer Packaged Goods"],
    category: ["CGI Products Commercial Video", "Motion Graphics & Visual Effects", "Product Videography & Commercials", "Social Media Content Creation"],
    toolsUsed: ["Runway", "CapCut", "After Effects"],
    keyFocus: "Sub-second hook, electric green VFX, frosty condensation, and beat-matched pacing.",
    projectGoal: "Hook audience attention within the first 1.5 seconds through electrifying sound design and icy macro pour shots.",
    workflow: [
      { title: "Dynamic Editing & Pacing", description: "Rapid-cut sequence timed precisely to heavy bass drops and impact risers." },
      { title: "VFX & Energy Simulations", description: "Neon green lightning arcs and heavy CO2 smoke bursts around the can." },
      { title: "Macro Pour & Condensation", description: "Extreme close-up of carbonated liquid flowing over faceted crystal ice." }
    ],
    keyFeatures: ["Beat-Synced High Pacing", "Electric Green Particle VFX", "Frosty Ice Pour Cinematography"],
    metrics: { resolution: "1080p (Full HD)", frameRate: "30fps", format: "MP4", duration: "20s" },
    strategy: { targetAudience: "Gamers, athletes, and Gen-Z high-performance creators", tone: "Electrifying, intense, rebellious, thirst-quenching", platformFocus: "TikTok, Reels & YouTube Shorts" },
    creativeNote: "This concept was built from the ground up to test the boundaries of hyper-engaging, modern social media advertising where the first 1.5 seconds dictate user retention."
  },
  {
    id: 6,
    title: "Olipop Cherry Cola",
    subtitle: "AI Product Commercial",
    description: "A conceptual promotional spot created using advanced AI video generation tools to showcase dynamic macro product cinematography, fluid simulations, and lifestyle brand storytelling.",
    videoUrl: "https://www.dropbox.com/scl/fi/0q20qdho0jjas0284e4rp/VID-20260925-WA0183.mp4?rlkey=stp509lbd1fzr9hrdprghdkcp&st=mx586myt&raw=1",
    skills: ["AI Product Animation", "Fluid Dynamics", "Motion Design", "Visual Effects", "Google Flow", "Runway ML", "CapCut", "Sound Design"],
    industry: ["Food & Beverage", "Advertising & Marketing", "Consumer Packaged Goods (CPG)"],
    category: ["AI Product Animation / CGI Commercial", "Beverage Commercial", "Motion Design Portfolio"],
    toolsUsed: ["Google Flow", "Runway ML", "CapCut"],
    keyFocus: "Motion design, visual pacing, and AI prompt engineering for product marketing.",
    projectGoal: "To produce a premium, fast-paced CGI product commercial for Olipop Cherry Cola using AI-assisted workflows, emphasizing macro product shots, fluid dynamics, and high-end advertising aesthetics for social media platforms.",
    workflow: [
      { title: "Advanced Prompt Engineering", description: "Developed detailed prompts for Google Flow to generate photorealistic product models, realistic cola pouring simulations, and dynamic liquid physics." },
      { title: "AI Video Synthesis", description: "Utilized Runway Gen-2 for high-fidelity animation sequences and seamless visual effects that mimic traditional 3D CGI workflows." },
      { title: "Multi-Phase Composition", description: "Orchestrated multiple AI-generated layers—including hero shots, background environments, and particle effects—into a single cohesive video." },
      { title: "Motion Design & Editing", description: "Performed precise video editing, advanced sound design, and kinetic typography to align with the energetic brand identity." }
    ],
    keyFeatures: [
      "Hyper-Realistic Product Visualization: Showcased the Olipop Cherry Cola can with high-fidelity textures, condensation effects, and precise lighting to simulate a luxury product shoot.",
      "Dynamic Fluid Simulation: Generated realistic cola pouring and effervescence using advanced AI liquid dynamics, creating a visually refreshing and immersive experience.",
      "Fast-Paced Storytelling: Engineered a rapid-cut editing sequence optimized for short-form video platforms (TikTok, Instagram Reels, YouTube Shorts) with maximum audience retention strategies."
    ],
    metrics: { resolution: "1080p (1920×1080)", frameRate: "30fps", format: "MP4", duration: "30 seconds" },
    strategy: {
      targetAudience: "Health-conscious consumers aged 25–45 seeking premium non-alcoholic beverages.",
      tone: "Energetic, sophisticated, vibrant, and refreshing.",
      platformFocus: "Mobile-first social media feeds with autoplay and sound-off consumption patterns.",
      visualDirection: "Macro cinematography with premium lighting, cinematic camera movement, and stylized product staging."
    },
    impact: "This project demonstrates the capability of AI video generation to produce high-quality commercial content that matches the production value of traditional 3D animation, enabling rapid prototyping and high-impact visual storytelling for modern brands."
  },
  {
    id: 7,
    title: "Nuxe Huile Prodigieuse Or",
    subtitle: "AI Luxury Product Commercial",
    description: "A conceptual promotional spot created using advanced AI video generation tools to showcase luxurious gold fluid simulations, skin-texture macro details, and elegant cosmetic brand storytelling.",
    videoUrl: "https://www.dropbox.com/scl/fi/s3hpow12grm5ofmgq9wjt/VID-20260925-WA0182.mp4?rlkey=baj0b6t2qq5kj0ovk5ayz4var&st=uc6ndxwr&raw=1",
    skills: ["AI Product Commercial", "Luxury Product Animation", "Fluid Simulation", "Cinematic Lighting", "Google Flow", "Runway ML", "CapCut", "Color Grading"],
    industry: ["Beauty & Cosmetics", "Luxury Goods", "Advertising & Marketing"],
    category: ["AI Product Commercial / CGI Marketing Video", "Skincare & Beauty", "Motion Design Portfolio"],
    toolsUsed: ["Google Flow", "Runway ML", "CapCut"],
    keyFocus: "Cinematic lighting, premium texture rendering, and AI prompt engineering for luxury beauty marketing.",
    projectGoal: "To produce a premium CGI product commercial for Nuxe Huile Prodigieuse Or using AI-assisted workflows, emphasizing luxurious gold fluid simulations, skin-texture macro cinematography, and high-end beauty advertising aesthetics.",
    workflow: [
      { title: "Advanced Prompt Engineering", description: "Developed detailed prompts for Runway and Google Flow to generate photorealistic skin textures, smooth gold oil macro shots, and elegant cosmetic environments." },
      { title: "AI Video Synthesis", description: "Utilized Runway Gen-2 for high-fidelity animation sequences and seamless visual effects that mimic traditional 3D CGI workflows for beauty products." },
      { title: "Multi-Phase Composition", description: "Orchestrated multiple AI-generated layers—including hero shots, cosmetic textures, and atmospheric effects—into a cohesive luxury commercial." },
      { title: "Motion Design & Editing", description: "Performed precise video editing, advanced sound design, and sophisticated color grading optimized for luxury beauty brand identity." }
    ],
    keyFeatures: [
      "Ultra-Realistic Skin & Oil Rendering: Showcased the cosmetic product with high-fidelity skin texture macro shots, natural glow effects, and luxurious gold fluid simulations.",
      "Cinematic Beauty Cinematography: Captured elegant product movement with premium lighting, smooth camera motion, and sophisticated visual storytelling techniques.",
      "Dual-Platform Optimization: Engineered the sequence for both Instagram Reels (short-form, vertical) and YouTube (long-form, horizontal) with adaptive cuts and pacing."
    ],
    metrics: { resolution: "1080p (1920×1080)", frameRate: "30fps", format: "MP4", duration: "30 seconds" },
    strategy: {
      targetAudience: "Consumers of luxury skincare and beauty products aged 25–55.",
      tone: "Elegant, sophisticated, premium, and radiant.",
      platformFocus: "Dual optimization for Instagram Reels (9:16) and YouTube (16:9) to maximize reach across platforms.",
      visualDirection: "Macro product cinematography, soft studio lighting, gold-tinted color grading, and seamless transitions between product and lifestyle aesthetics."
    },
    impact: "This project demonstrates the capability of modern AI tools to produce high-end cosmetic commercials that rival traditional CGI production, enabling beauty brands to create sophisticated, engaging content at scale."
  },
  {
    id: 8,
    title: "Cénée Liquid Blush",
    subtitle: "AI Beauty Commercial",
    description: "A conceptual promotional spot created using advanced AI video generation tools to showcase delicate floral product integration, smooth liquid textures, and aesthetic cosmetic brand storytelling.",
    videoUrl: "https://www.dropbox.com/scl/fi/kr67l1t1110vnqfp2pju6/VID-20260925-WA0181.mp4?rlkey=4ngfnnopgqwfjlmuf4kegdd8d&st=5adgen9v&raw=1",
    skills: ["AI Beauty Commercial", "Macro Cinematography", "Color Grading", "Texture Simulation", "Google Flow", "Runway ML", "Prompt Engineering"],
    industry: ["Beauty & Cosmetics", "Skincare & Makeup", "Advertising & Marketing"],
    category: ["AI Product Commercial", "Cosmetics Commercial", "3D Product Visualization", "Motion Design Portfolio"],
    toolsUsed: ["Google Flow", "Runway", "CapCut"],
    keyFocus: "Soft-focus color grading, macro texture close-ups, and AI prompt engineering for beauty and skincare marketing.",
    projectGoal: "Highlight petal-soft blush blending, radiant liquid pigment diffusion, and organic floral brand elegance.",
    workflow: [
      { title: "Floral Environment Integration", description: "Generating botanical studio backdrops with soft petal bokeh." },
      { title: "Liquid Pigment Dynamics", description: "Silky liquid blush droplets blending seamlessly onto skin surface." },
      { title: "Soft-Focus Color Science", description: "Pastel rose and warm peach color grading tailored to cosmetic branding." }
    ],
    keyFeatures: ["Macro Liquid Texture Close-Ups", "Delicate Botanical Staging", "Soft-Focus Pastel Color Grading"],
    metrics: { resolution: "1080p (Full HD)", frameRate: "30fps", format: "MP4", duration: "25s" },
    strategy: { targetAudience: "Beauty enthusiasts and modern clean-girl makeup consumers", tone: "Delicate, luminous, aesthetic, sensorial", platformFocus: "Instagram Reels, TikTok & Pinterest" }
  },
  {
    id: 9,
    title: "Gourmet Burger Craft",
    subtitle: "AI Food Commercial",
    description: "A conceptual promotional spot created using advanced AI video generation tools to showcase high-octane macro grilling shots, melting cheese textures, and appetizing fast-food brand storytelling.",
    videoUrl: "https://www.dropbox.com/scl/fi/uvtjihiqe8jz5e02dpmdu/VID-20260925-WA0184.mp4?rlkey=lwrmdx63s1bl9aw7cvqm7tviu&st=oh76cyj9&raw=1",
    skills: ["Food Cinematography", "Macro Simulation", "Dynamic Editing", "Textural Realism", "Google Flow", "Runway ML", "Prompt Engineering"],
    industry: ["Food & Beverage", "Culinary & Fast Food", "Advertising & Marketing"],
    category: ["CGI Product Commercial", "Food Commercial", "Brand Advertisement", "Motion Design Portfolio"],
    toolsUsed: ["Google Flow", "Runway", "CapCut"],
    keyFocus: "Extreme close-up food cinematography, textural realism, and dynamic AI prompt generation for culinary marketing.",
    projectGoal: "Capture mouth-watering burger assembly, searing flame effects, and sizzling artisanal indulgence with extreme close-ups.",
    workflow: [
      { title: "High-Octane Flame & Sizzle", description: "Simulating open flame sear marks, smoking grill grates, and sizzling burger patties." },
      { title: "Viscous Cheese Melting Physics", description: "Macro rendering of cheddar cheese dripping over textured brioche and juicy beef." },
      { title: "Crisp Vegetable Stacking", description: "Slow-motion assembly of lettuce, caramelized onions, and gourmet sauces." }
    ],
    keyFeatures: ["Searing Flame & Patty Grilling", "Sensory Cheese Melt Dynamics", "Cinematic Macro Food Stacking"],
    metrics: { resolution: "1080p (Full HD)", frameRate: "30fps", format: "MP4", duration: "22s" },
    strategy: { targetAudience: "Foodies, burger lovers, and casual dining patrons", tone: "Mouth-watering, bold, indulgent, sensory", platformFocus: "Social media video ads & delivery apps" }
  }
];
