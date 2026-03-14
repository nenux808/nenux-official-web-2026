export type Project = {
  slug: string;
  title: string;
  category: string;
  description: string;
  stack: string[];
  hero?: string;
  liveUrl?: string;
  githubUrl?: string;
  problem: string;
  solution: string;
  features: string[];
};

export const projects: Project[] = [
  {
    slug: "gami-gedara",
    title: "Gami Gedara",
    category: "Restaurant Ordering Platform",
    description:
      "A modern food ordering platform designed for real business operations, with meal pack flows, customer ordering, and admin tools.",
    stack: ["Next.js", "Supabase", "Stripe", "Tailwind CSS"],
    liveUrl: "https://gamigedara.com.au",
    githubUrl: "https://github.com/nenux808/GAMI-GEDARA-v2",
    problem:
      "The business needed a professional digital ordering flow that feels easy for customers and practical for daily use.",
    solution:
      "Built a custom ordering experience with structured product flows, online checkout, order visibility, and scalable admin logic.",
    features: [
      "Meal pack ordering",
      "Responsive customer experience",
      "Stripe payment flow",
      "Admin-friendly structure",
      "Clean business-focused UI"
    ]
  },
  {
    slug: "stella-events",
    title: "Stella Events System",
    category: "Event Ticketing Platform",
    description:
      "A performance-focused event ticketing platform with secure payments, QR check-in, and mobile-first flows.",
    stack: ["Next.js", "Stripe", "QR Check-in", "Responsive UI"],
    liveUrl: "https://stellaeventsitaly.com",
    githubUrl: "https://github.com/nenux808/stellaeventsitaly-live",
    problem:
      "Event operations needed a reliable and modern digital experience for ticket sales, validation, and speed at entry points.",
    solution:
      "Created a ticketing flow with payment handling, automated delivery, QR validation, and optimized checkout performance.",
    features: [
      "Secure checkout",
      "Automated ticket generation",
      "QR-based validation",
      "Mobile-optimized purchase flow",
      "Clean dashboard-ready architecture"
    ]
  },
  {
    slug: "tw-autotune",
    title: "TW AutoTune",
    category: "Workshop Management System",
    description:
      "A custom web system concept for automotive workflow management, bookings, visibility, and business efficiency.",
    stack: ["System Design", "UI/UX", "Web App Architecture"],
    githubUrl: "https://github.com/yourusername/tw-autotune",
    problem:
      "Workshop processes can become messy without a single structured place for handling customer bookings and internal workflow.",
    solution:
      "Designed a digital operations concept focused on service visibility, customer flow, and organized workshop management.",
    features: [
      "Booking flow concept",
      "Operational visibility",
      "Workshop-friendly dashboard logic",
      "Modern service-based UI",
      "Scalable custom system direction"
    ]
  },
  {
    slug: "blockchain-nft",
    title: "Blockchain Inventory & NFT App",
    category: "Security / DLT Project",
    description:
      "A security-driven distributed ledger project featuring digital signatures, consensus logic, and NFT ownership workflows.",
    stack: ["Blockchain", "Security", "JavaScript", "UI Design"],
    githubUrl: "https://github.com/yourusername/blockchain-nft",
    problem:
      "The system needed to show how secure ledger-style workflows can verify records and manage ownership with trust.",
    solution:
      "Developed a concept demonstrating secure inventory verification, digital signatures, multi-signature logic, and NFT operations.",
    features: [
      "Digital signature workflow",
      "Consensus-based thinking",
      "Multi-signature approach",
      "Ownership transfer logic",
      "Security-focused UI explanation"
    ]
  }
];
