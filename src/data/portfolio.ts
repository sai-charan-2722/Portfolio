// All site content lives here. Never hardcode content in components.

export const personalInfo = {
  name: "U Sai Charan",
  firstName: "Sai Charan",
  role: "Frontend Engineer",
  tagline:
    "Frontend-leaning full-stack engineer crafting fast, pixel-perfect Angular applications — with a 30% initial performance increase track record and an AI-augmented workflow built for 2026.",
  email: "saicharanyadav211981@gmail.com",
  phone: "+91 7093600312",
  location: "Hyderabad, Telangana, India",
  linkedin: "https://www.linkedin.com/in/u-saicharan-yadav/",
  github: "https://github.com/sai-charan-2722",
  resumeUrl: "/Sai_Charan_Resume.pdf",
  availability: "Open to Opportunities",
};

export const typedRoles = [
  "Frontend Applications",
  "Interactive Web Experiences",
  "Full-Stack Development",
  "Modern Web Animations",
];

export const aboutText = [
  "I'm a frontend engineer who believes the gap between a good UI and a great one is almost always a performance problem. For the past year I've been building production Angular applications at Cognizant — shipping 15+ responsive pages, cutting initial load times by 30%, and wiring NgRx state machines that hold up under real pressure.",
  "My stack lives in the Angular ecosystem — TypeScript, NgRx, RxJS — but I'm comfortable across the full MEAN stack and have shipped backends with Java and Spring Boot too. What makes me a bit different: I pair traditional engineering skills with a Prompt Engineering mindset, using AI tools like GitHub Copilot and Claude Code to move faster and write cleaner code.",
];

export type MetricColor = "purple" | "cyan" | "amber" | "green";

export const metrics: { value: string; label: string; color: MetricColor }[] = [
  { value: "1+", label: "Years Experience", color: "purple" },
  { value: "15+", label: "Pages Shipped", color: "cyan" },
  { value: "30%", label: "Load Time Reduced", color: "amber" },
  { value: "4", label: "Projects on GitHub", color: "green" },
];

export const stackTags = [
  "HTML5",
  "CSS3",
  "Tailwind CSS",
  "JavaScript ES6+",
  "TypeScript",
  "Angular",
  "NgRx",
  "RxJS",
  "Node.js",
  "Express.js",
  "Java",
  "Spring Boot",
  "MongoDB",
  "SQL",
  "Git",
  "GitHub Copilot",
  "Claude Code",
];

export const skillCategories = [
  {
    name: "Frontend",
    icon: "monitor",
    skills: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "TypeScript",
      "Angular",
      "NgRx",
      "RxJS",
      "React",
      "Vite",
      "Karma + Jasmine",
    ],
  },
  {
    name: "Backend",
    icon: "server",
    skills: [
      "Node.js",
      "Express.js",
      "Java",
      "Spring Boot",
      "JWT",
      "REST APIs",
      "Swagger",
    ],
  },
  {
    name: "State & Data",
    icon: "layers",
    skills: ["NgRx", "Redux", "RxJS", "Recharts", "MongoDB", "SQL"],
  },
  {
    name: "DevOps & Tools",
    icon: "wrench",
    skills: [
      "Git",
      "GitHub",
      "GitLab",
      "Jira",
      "Jenkins",
      "GitHub Actions",
      "GitHub Copilot",
      "Prompt Engineering",
      "Claude Code",
      "Amazon Q Developer",
      "VS Code",
    ],
  },
];

export const aiBadge = {
  heading: "AI-Augmented Developer",
  body: "Integrating GitHub Copilot and Prompt Engineering into my daily workflow to ship faster, write cleaner code, and stay ahead of the curve.",
  tags: ["GitHub Copilot", "Prompt Engineering", "Vibe Coding"],
};

export type CoverAccent = "teal" | "purple" | "cyan" | "amber";

export interface Project {
  id: string;
  shortName: string;
  title: string;
  tagline: string;
  description: string;
  longDescription: string;
  tech: string[];
  features: string[];
  github: string | null;
  live: string | null;
  status: string;
  featured: boolean;
  coverAccent: CoverAccent;
}

export const projects: Project[] = [
  // ── FEATURED (top row) ──────────────────────────────────────────────
  {
    id: "wellness-dashboard",
    shortName: "WD",
    title: "Wellness Dashboard",
    tagline:
      "Local-first wellness tracker with charts, streaks, habits & insights",
    description:
      "A modern, local-first wellness app to log water, sleep, calories, mood, workouts, and habits. Features real-time trend charts, a score calendar, streak tracking, customizable goals, browser reminders, and full data export/import — all without a backend.",
    longDescription:
      "Built with React 19 and TypeScript, this app demonstrates a production-quality frontend architecture: a Zustand store as single source of truth, a swappable StorageAdapter interface for future backend support, and Recharts for animated data visualizations. Every feature is unit-tested with Vitest and the project ships with CI/CD via GitHub Actions. On mobile it behaves like a native app with a bottom-nav shell; on desktop it uses a full sidebar layout.",
    tech: [
      "React 19",
      "TypeScript",
      "Vite",
      "Tailwind CSS v4",
      "Zustand",
      "Recharts",
      "Framer Motion",
      "Vitest",
      "shadcn/ui",
      "GitHub Actions",
    ],
    features: [
      "Daily logging for water, sleep, meals (calorie totals), mood, workout type & duration",
      "Goal-aware wellness score (0–100) computed from logged data in real time",
      "Monthly score calendar — each day color-coded by daily wellness score",
      "7/30-day trend charts powered by Recharts with real logged data",
      "Insights engine: averages, streaks, week-over-week trends, best/toughest day",
      "Habits with full CRUD, icons & color customization, streaks computed from history",
      "Customizable goals and in-app browser notification reminders",
      "Export to JSON/CSV and import from JSON; full data reset",
      "Responsive: sidebar + top-bar on desktop, bottom-nav app shell on mobile",
      "Rich Framer Motion animations: route transitions, staggered cards, count-up, confetti",
      "Keyboard accessible; prefers-reduced-motion respected; CI/CD via GitHub Actions",
    ],
    github: "https://github.com/sai-charan-2722/wellness-dashboard",
    live: "https://sai-charan-2722.github.io/wellness-dashboard/",
    status: "Completed",
    featured: true,
    coverAccent: "teal",
  },
  {
    id: "splitsmart",
    shortName: "SS",
    title: "SplitSmart",
    tagline:
      "Smart expense splitter with a custom greedy settlement algorithm — live on Vercel",
    description:
      "A full-featured expense splitting app for trips, shared flats, and group events. Create groups, track shared expenses with flexible splits, and get settlement suggestions that minimize total transactions using a custom greedy two-pointer algorithm.",
    longDescription:
      "Built on Angular 17 Standalone Components (the latest Angular pattern — no NgModules), SplitSmart features a clean SCSS design system built from scratch. The settlement engine implements a greedy two-pointer algorithm that minimizes the number of payment transactions to clear all debts — with full edge-case handling and floating-point precision. Services are unit-tested with Karma + Jasmine and the app is live on Vercel.",
    tech: [
      "Angular 17",
      "TypeScript",
      "SCSS",
      "Standalone Components",
      "RxJS",
      "Karma + Jasmine",
      "Angular CLI",
      "Vercel",
    ],
    features: [
      "Group management with custom emoji icons (trips, flats, events)",
      "Dynamic member management per group (add/remove at any time)",
      "Expense tracking: title, amount, category, date, and payer",
      "Flexible splitting: choose which members each expense applies to (unequal splits supported)",
      "Real-time balance calculation showing exactly who owes what",
      "Smart Settlement engine: greedy two-pointer algorithm minimizes total transactions",
      "Floating-point precision: Math.round(x * 100) / 100 throughout",
      "Angular 17 Standalone Components — modern architecture, no NgModules",
      "Custom SCSS design system — no component library, fully hand-crafted",
      "Unit-tested services with Karma + Jasmine",
      "LocalStorage persistence; live deployment on Vercel",
    ],
    github: "https://github.com/sai-charan-2722/Expenses_tracker",
    live: "http://sai-charan-2722.github.io/Expenses_tracker/",
    status: "Completed",
    featured: true,
    coverAccent: "purple",
  },
  // ── ADDITIONAL (second row) ─────────────────────────────────────────
  {
    id: "scholarship-portal",
    shortName: "SSP",
    title: "Student Scholarship Portal",
    tagline:
      "Full-stack MEAN portal for scholarship applications and admin workflows",
    description:
      "A complete scholarship management system where students apply for scholarships, track application status, and receive decisions. Administrators get a dedicated dashboard to review, approve, or reject applications with full audit visibility.",
    longDescription:
      "Built with the MEAN stack, this portal replaces manual scholarship processes with a structured digital workflow. Students submit through a multi-step form; admins review through a dedicated dashboard; both sides have real-time status updates.",
    tech: ["MongoDB", "Angular", "Express.js", "Node.js", "TypeScript"],
    features: [
      "Student application submission with multi-step form",
      "Admin dashboard with approve/reject workflow and audit trail",
      "Real-time application status tracking for students",
      "Role-based access control (student vs. admin views)",
      "Fully responsive Angular UI with reusable components",
      "RESTful API backend with Express.js and MongoDB",
    ],
    github: "https://github.com/sai-charan-2722/MEAN_FSA_Scholarship",
    live: null,
    status: "Completed",
    featured: false,
    coverAccent: "cyan",
  },
  {
    id: "ecommerce-platform",
    shortName: "SHOP",
    title: "E-Commerce Platform",
    tagline:
      "Angular + Spring Boot e-commerce with JWT auth, cart, orders, and Swagger docs",
    description:
      "A feature-complete e-commerce application with separate customer and seller portals. Customers browse, cart, and order. Sellers manage catalogues. Secured throughout with JWT; REST API documented with Swagger.",
    longDescription:
      "This project covers the full lifecycle of e-commerce: a responsive Angular frontend with clean component architecture, a Java Spring Boot backend exposing documented REST APIs, and JWT protecting all sensitive routes.",
    tech: ["Angular", "Spring Boot", "Java", "JWT", "Swagger", "TypeScript", "REST API"],
    features: [
      "Customer cart management and checkout flow",
      "Order placement and order history",
      "Seller product CRUD (add, update, delete products)",
      "JWT-based authentication and route protection",
      "REST API fully documented with Swagger UI",
      "Responsive Angular frontend with component-driven architecture",
    ],
    github: "https://github.com/sai-charan-2722/POC_Project_E-Commerce",
    live: null,
    status: "Completed",
    featured: false,
    coverAccent: "amber",
  },
];

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  location: string;
  type: "work" | "internship" | "education";
  icon: "briefcase" | "code" | "graduation-cap";
  bullets: string[];
  tech: string[];
}

export const experience: ExperienceItem[] = [
  {
    role: "Programmer Analyst",
    company: "Cognizant",
    period: "Dec 2023 – Present",
    location: "Hyderabad, Telangana",
    type: "work",
    icon: "briefcase",
    bullets: [
      "Develop and maintain web applications using Angular; built 15+ responsive pages pixel-perfectly aligned with Figma designs.",
      "Collaborate with backend teams to integrate RESTful APIs and troubleshoot end-to-end flows across the stack.",
      "Implement NgRx for scalable state management and leverage RxJS to simplify complex asynchronous patterns.",
      "Reduced initial load time by 30% through lazy-loading modular architecture — a measurable performance win.",
      "Write optimized, maintainable TypeScript code; participate in code reviews and agile team ceremonies.",
    ],
    tech: [
      "Angular",
      "TypeScript",
      "NgRx",
      "RxJS",
      "REST APIs",
      "Figma",
      "Jira",
      "GitHub Copilot",
    ],
  },
  {
    role: "Programmer Analyst Trainee",
    company: "Cognizant",
    period: "Oct 2023 – Dec 2023",
    location: "Hyderabad, Telangana",
    type: "internship",
    icon: "code",
    bullets: [
      "Completed intensive training programme covering MEAN stack fundamentals.",
      "Built proof-of-concept components and practised API integration and state management basics.",
    ],
    tech: ["MongoDB", "Express.js", "Angular", "Node.js"],
  },
  {
    role: "B.E. Electronics & Communications Engineering",
    company: "Matrusri Engineering College",
    period: "Aug 2019 – Jun 2023",
    location: "CGPA: 7.66",
    type: "education",
    icon: "graduation-cap",
    bullets: [
      "Bachelor of Engineering in Electronics & Communications Engineering.",
      "Built foundational skills in programming, data structures, and embedded systems.",
    ],
    tech: [],
  },
];

export const certifications = [
  { name: "AWS Cloud Foundations", issuer: "NSIC", icon: "amazonaws" },
  { name: "Python Programming", issuer: "Spoken Tutorial (IIT)", icon: "python" },
  { name: "Arduino", issuer: "Spoken Tutorial (IIT)", icon: "arduino" },
  { name: "JavaScript", issuer: "Udemy", icon: "javascript" },
  { name: "Angular", issuer: "Udemy", icon: "angular" },
  { name: "Java & Spring Boot", issuer: "Udemy", icon: "spring" },
];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];
