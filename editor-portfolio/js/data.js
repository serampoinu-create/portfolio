// Portfolio Project & Showcase Data (Tailored for Entry-Level & Spec Projects)
const PORTFOLIO_DATA = {
  profile: {
    name: "Poinunganba Seram",
    role: "Video & Content Editor",
    headline: "Fresh creative perspective backed by hands-on practice & technical dedication.",
    bio: "Passionate editor skilled in DaVinci Resolve, Premiere Pro, and short-form video assembly. Driven to create engaging cuts, clean color passes, and rhythmic sound design for creators, channels, and editor roles.",
    location: "Available Remote & On-site",
    status: "Open for Full-time Roles, Freelance & Key Projects",
    email: "serampoinu@gmail.com",
    linkedin: "https://www.linkedin.com/in/poinunganba-seram",
    metrics: [
      { label: "Software Proficiency", value: "Premiere & DaVinci" },
      { label: "Spec Edits Created", value: "15+ Practice Cuts" },
      { label: "Turnaround Speed", value: "Fast & Reliable" },
      { label: "Motivation", value: "100% Dedicated" }
    ]
  },

  projects: [
    {
      id: "project-1",
      title: "Cinematic Film Re-Edit (Spec Cut)",
      category: "video",
      subcategory: "Speculative Edit",
      tags: ["Color Pass", "Pacing Practice", "DaVinci Resolve", "Sound Layering"],
      image: "assets/project1.jpg",
      duration: "2 min",
      views: "Practice Project",
      metric: "Mood & Rhythm Test",
      summary: "A self-initiated scene re-edit using open-source film footage. Re-paced the cuts to build dramatic tension and added a custom color grade.",
      challenge: "Taking unedited raw footage clips and crafting a coherent narrative arc with smooth rhythm and emotional pacing.",
      creativeApproach: "Cut out redundant pauses, built up ambient audio textures, and applied a moody teal-and-orange color LUT to accentuate depth.",
      deliverables: ["1080p Final Cut Reel", "Color Grading LUT Preset", "Audio Stems"],
      client: "Self-Initiated Spec Project",
      tools: ["DaVinci Resolve", "Adobe Premiere Pro"]
    },
    {
      id: "project-2",
      title: "Short-Form Social Reel (Concept Edit)",
      category: "commercial",
      subcategory: "Social Media Spec",
      tags: ["Vertical 9:16", "Kinetic Captions", "Sound FX", "Fast Cuts"],
      image: "assets/project2.jpg",
      duration: "45 sec",
      views: "Concept Project",
      metric: "High-Energy Retention",
      summary: "Fast-paced vertical reel edited specifically for TikTok/Instagram Reels featuring dynamic captions, beat syncing, and sound effects.",
      challenge: "Capturing viewer attention within the first 3 seconds and maintaining momentum throughout the clip.",
      creativeApproach: "Used quick whip transitions, animated pop-up captions, and audio beat-matching to keep viewer engagement high.",
      deliverables: ["9:16 MP4 Vertical Video", "Subtitled Export", "Project Template"],
      client: "Practice Concept Cut",
      tools: ["Adobe Premiere Pro", "After Effects", "CapCut"]
    },
    {
      id: "project-3",
      title: "Trailer Genre Flip: Thriller Cut (Spec Project)",
      category: "vfx",
      subcategory: "Creative Re-Edit",
      tags: ["Sound Design", "Genre Shift", "Atmosphere", "Trailer Edit"],
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1000&q=80",
      duration: "90 sec",
      views: "Editing Challenge",
      metric: "Sound & Tone Shift",
      summary: "Editing exercise transforming standard dialogue clips into an intense suspense trailer solely through sound design and cut timing.",
      challenge: "Creating a completely new tone and suspenseful atmosphere without altering the original speech audio.",
      creativeApproach: "Isolated voice tracks, added low risers and bass drops, and inserted quick dark cutaways to build tension.",
      deliverables: ["HD Trailer Export", "Sound FX Track Map"],
      client: "Personal Editing Challenge",
      tools: ["DaVinci Resolve", "Audacity", "Premiere Pro"]
    },
    {
      id: "project-4",
      title: "Sample Article Line-Edit & Proofread",
      category: "copy",
      subcategory: "Writing & Copy Spec",
      tags: ["Line Editing", "Grammar Polish", "Clarity", "AP Style"],
      image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1000&q=80",
      duration: "1,200 words",
      views: "Sample Practice",
      metric: "Clear & Concise",
      summary: "Sample line-editing exercise taking a raw draft article and polishing sentence flow, reducing wordiness, and fixing grammar errors.",
      challenge: "Eliminating filler phrases while preserving the author's original message and personal voice.",
      creativeApproach: "Removed passive voice constructions, restructured rambling paragraphs, and ensured consistent formatting throughout.",
      deliverables: ["Clean Polished PDF", "Tracked Changes Markup Document"],
      client: "Self-Study Copy Editing",
      tools: ["Google Docs", "Grammarly", "AP Stylebook Guide"]
    }
  ],

  // Data for the interactive "Before & After" Editing comparison tool
  beforeAfterCases: [
    {
      id: "color-grade",
      title: "Practice Edit: Raw Clip vs Color Graded Cut",
      type: "video",
      description: "Slide to see how a flat camera clip comes alive after applying primary correction, contrast balancing, and color grading.",
      beforeLabel: "Flat Raw Footage (Unedited)",
      afterLabel: "Graded & Polished (Spec Edit)",
      beforeImg: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1000&q=80&sat=-80&con=-30",
      afterImg: "assets/project1.jpg",
      details: [
        "Balanced shadow tones and boosted mid-tone warmth",
        "Applied complementary color grade for visual punch",
        "Trimmed awkward pauses for seamless flow",
        "Organized project files and audio tracks systematically"
      ]
    },
    {
      id: "copy-edit",
      title: "Sample Copy Edit: Raw Draft vs Clean Polish",
      type: "copy",
      description: "Compare an unedited sample draft with a polished version demonstrating clutter reduction and active phrasing.",
      beforeText: `In my personal opinion, I think that video editing is something that takes a lot of time and effort to learn properly, but I am very committed and excited to keep practicing every single day until I get really good at it.`,
      afterText: `Mastering video editing demands dedication and continuous practice. I am fully committed to refining my skills daily to deliver compelling, polished edits.`,
      editsHighlight: [],
      details: [
        "Reduced word count by 38% for punchier impact",
        "Replaced weak phrases ('In my personal opinion, I think') with decisive tone",
        "Demonstrates commitment to high editorial standards"
      ]
    }
  ],

  skills: [
    { name: "Adobe Premiere Pro", level: "Primary NLE", category: "Video Editing", icon: "✂️" },
    { name: "DaVinci Resolve Studio", level: "Color & Cut", category: "Post-Production", icon: "🎬" },
    { name: "Final Cut Pro X", level: "NLE Suite", category: "Apple Editing", icon: "💻" },
    { name: "Adobe After Effects", level: "Motion & VFX", category: "Visual Effects", icon: "⚡" },
    { name: "Avid Media Composer", level: "Industry Standard", category: "Film & TV Cut", icon: "🎞️" },
    { name: "CapCut Pro", level: "Short-Form", category: "Reels / TikTok / Shorts", icon: "📱" },
    { name: "Adobe Audition / Logic Pro", level: "Audio Polish", category: "Sound Design", icon: "🎧" },
    { name: "iZotope RX", level: "Audio Repair", category: "Voice Cleanup", icon: "🎙️" },
    { name: "Photoshop & Canva", level: "Graphics & Covers", category: "Thumbnails", icon: "🎨" },
    { name: "AP Style & Grammarly", level: "Copy Editing", category: "Proofreading", icon: "📝" }
  ],

  testimonials: [
    {
      quote: "Poinunganba shows remarkable enthusiasm and picks up editing software workflows exceptionally fast. Eager, attentive, and reliable.",
      author: "Mentor / Peer Review",
      role: "Creative Community Feedback"
    },
    {
      quote: "Great attention to detail on short-form cuts. Shows strong potential for junior editor and assistant roles.",
      author: "Sample Practice Review",
      role: "Editing Group Feedback"
    }
  ]
};
