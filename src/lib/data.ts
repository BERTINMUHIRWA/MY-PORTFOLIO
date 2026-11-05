// ─────────────────────────────────────────────────────────────
//  EDIT THIS FILE to change the content of your portfolio.
//  Every text, link, project and experience entry lives here.
// ─────────────────────────────────────────────────────────────

export const profile = {
  name: "Bertin Muhirwa",
  shortName: "Bertin",
  initial: "b",
  role: "Software Developer",
  headline: ["Hello, I'm", "Bertin — a", "Software", "Developer."],
  intro:
    "A software developer, UI/UX designer and graphic designer who builds digital products that look considered and work reliably.",
  email: "bertinmuhi76@gmail.com",
  location: "Rwanda",
  photo: "/images/bertin.jpg",
  cvUrl: "/cv.pdf", // put your CV at public/cv.pdf
  availability: "Open to new projects",
  yearsExperience: "3+",
  about: [
    "I'm Bertin Muhirwa, a software developer, UI/UX designer and graphic designer based in Rwanda. My work spans full-stack development, interface design and visual branding — built around solving real problems with thoughtful design and reliable engineering.",
    "Good digital products should look exceptional, feel intuitive and hold up in real use. That's the standard I hold every project to, for individuals and businesses alike.",
  ],
  socials: {
    github: "https://github.com/BERTINMUHIRWA",
    linkedin: "https://www.linkedin.com/bertin-muhirwa-10bab93ba",
    instagram: "https://www.instagram.com/bertincreatives",
  },
};

export const nav = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Expertise", href: "#expertise" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Contact", href: "#contact" },
];

export const stack = ["JavaScript", "TypeScript", "React", "Next.js"];

export const stats = [
  { value: "3+", label: "Years of Experience" },
  { value: "100%", label: "Client Satisfaction" },
  { value: "30+", label: "Projects Done" },
];

export const marquee = ["Software Developer", "UI/UX Designer", "Graphic Designer"];

export const expertise = [
  {
    title: "Software Development",
    description:
      "From database to interface — full-stack applications built to hold up under real use, not just in a demo.",
    tags: ["JavaScript", "TypeScript", "React.js", "Next.js", "Node.js", "PostgreSQL"],
  },
  {
    title: "UI/UX Design",
    description:
      "Interfaces designed around how people actually use them — clear flows, honest feedback, nothing wasted.",
    tags: ["Figma", "Prototyping", "Design Systems", "User Research"],
  },
  {
    title: "Graphic Design",
    description:
      "Visual identity that makes a brand recognisable at a glance — from a single poster to a full brand system.",
    tags: ["Photoshop", "Illustrator", "InDesign", "Canva"],
  },
];

export type Project = {
  title: string;
  category: string;
  description: string;
  tags: string[];
  year: string;
  href?: string;
};

// Replace these with your real projects (add `href` for a live link).
export const projects: Project[] = [
  {
    title: "Photo Hub",
    category: "Web Application",
    description:
      "A location-based platform that connects clients with nearby photographers, with search, profiles and bookings.",
    tags: ["Next.js", "PostgreSQL", "Vercel"],
    year: "2026",
  },
  {
    title: "Community Budget App",
    category: "Web Application",
    description:
      "A budget management tool for community groups to plan contributions, track spending and stay transparent.",
    tags: ["Next.js", "JavaScript", "PostgreSQL"],
    year: "2026",
  },
  {
    title: "Marketplace Frontend",
    category: "Frontend Engineering",
    description:
      "Buyer and seller dashboards for a shop discovery marketplace, built as a fast, responsive Next.js interface.",
    tags: ["Next.js", "React", "UI Design"],
    year: "2026",
  },
  {
    title: "Brand Identity System",
    category: "Graphic Design",
    description:
      "A complete logo and brand system for a consumer technology brand, from mark construction to usage guidelines.",
    tags: ["Illustrator", "Branding", "Logo"],
    year: "2026",
  },
];

export const experiences = [
  {
    period: "2026 — Now",
    role: "Graphic Designer & Social Media Manager",
    company: "Your Company",
    description:
      "Designing campaign visuals and managing social channels for clients across a variety of industries.",
  },
  {
    period: "2026",
    role: "Frontend Developer (Industrial Attachment)",
    company: "Algorithm Inc.",
    description:
      "Built and improved Next.js interfaces, working with the team on buyer and seller dashboards.",
  },
  {
    period: "2024 — Now",
    role: "Information Technology Student",
    company: "RP-IPRC Tumba College",
    description:
      "Studying Information Technology while building real-world web applications and design projects.",
      phoneDisplay: "+250 793 852 958",
phoneIntl: "+250793852958",
whatsappNumber: "250793852958",
  },
];
