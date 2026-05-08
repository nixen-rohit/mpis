// components/header/nav-data.tsx
"use client";
import { RiFirebaseFill } from "react-icons/ri";
import { SiWoocommerce } from "react-icons/si";
import { Magento ,React,Angular,Vuejs,Javascript,Tailwind,Typescript,Vite,Net} from "@/components/svg/page";
import {
  SiVuedotjs,
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
  SiVite,
  SiPhp,
  SiNodedotjs,
  SiPython,
  SiLaravel,
  SiCodeigniter,
  SiMongodb,
  SiSqlite,
  SiFirebase,
  SiApple,
  SiAndroid,
  SiFlutter,
  SiGooglecloud,
} from "react-icons/si";
import { PiFileSqlFill } from "react-icons/pi";

import { AiOutlineDotNet } from "react-icons/ai";
import { BiLogoPostgresql } from "react-icons/bi";

import { FaAws } from "react-icons/fa6";
import { VscAzure } from "react-icons/vsc";
import { GiDatabase } from "react-icons/gi";
import { RiReactjsLine } from "react-icons/ri";
import { TbBrandMysql } from "react-icons/tb";

import {
  RiSettings3Line,
  RiGlobalLine,
  RiSmartphoneLine,
  RiHeartPulseLine,
  RiBookOpenLine,
  RiCodeSSlashLine,
  RiDatabase2Line,
  RiFlashlightLine,
  RiStore2Line,
  RiTeamLine,
  RiBrainLine,
  RiPaletteLine,
  RiCloudLine,
  RiShieldCheckLine,
  RiBarChartBoxLine,
  RiServerLine,
  RiRobot2Line,
  RiMoneyDollarCircleLine,
  RiBuildingLine,
  RiFlightTakeoffLine,
  RiArticleLine,
  RiLightbulbFlashLine,
  RiNewspaperLine,
  RiAwardLine,
  RiBriefcaseLine,
  RiExternalLinkLine,
} from "react-icons/ri";

// ─── Types ──────────────────────────────────────────────────────────────────

export interface NavLink {
  label: string;
  description?: string;
  href: string;
  icon?: React.ReactNode;
  redirect?: boolean;
}

export interface NavColumn {
  heading: string;
  links: NavLink[];
}

export interface BlogCard {
  tag: string;
  title: string;
  excerpt: string;
  href: string;
  redirect?: boolean;
}

export interface MegaMenuData {
  columns: NavColumn[];
  blogCard?: BlogCard;
}

export interface NavItem {
  label: string;
  href?: string;
  redirect?: boolean;
  mega?: MegaMenuData;
}

// ─── Section Data ──────────────────────────────────────────────────────────

export const SERVICES_NAV: MegaMenuData = {
  columns: [
    {
      heading: "Software Development",
      links: [
        {
          label: "Custom Software",
          description: "Tailored solutions for your business",
          href: "/custom-software-development",
          icon: <RiSettings3Line />,
        },
        {
          label: "Web Applications",
          description: "Scalable web platforms & portals",
          href: "/web-application-development",
          icon: <RiGlobalLine />,
        },
        {
          label: "App Development",
          description: "iOS, Android & cross-platform",
          href: "/app-development",
          icon: <RiSmartphoneLine />,
        },
        {
          label: "Healthcare Software",
          description: "HIPAA-compliant digital health",
          href: "/healthcare",
          icon: <RiHeartPulseLine />,
        },
        {
          label: "eLearning Platforms",
          description: "LMS & interactive learning",
          href: "/elearning-development",
          icon: <RiBookOpenLine />,
        },
        {
          label: ".NET Development",
          description: "Enterprise-grade .NET solutions",
          href: "/net-application-development",
          icon: <RiCodeSSlashLine />,
        },
      ],
    },
    {
      heading: "Application Services",
      links: [
        {
          label: "Custom Applications",
          description: "Built from the ground up",
          href: "/custom-application",
          icon: <RiDatabase2Line />,
        },
        {
          label: "App Management",
          description: "Ongoing support & monitoring",
          href: "/application-management",
          icon: <RiSettings3Line />,
        },
        {
          label: "App Integration",
          description: "Connect your tech ecosystem",
          href: "/application-integration",
          icon: <RiFlashlightLine />,
        },
        {
          label: "Ecommerce Apps",
          description: "Conversion-optimised storefronts",
          href: "/ecommerce-application",
          icon: <RiStore2Line />,
        },
        {
          label: "Mobile Development",
          description: "Flutter, React Native & more",
          href: "/mobile-app-development",
          icon: <RiSmartphoneLine />,
        },
      ],
    },
    {
      heading: "Hire Experts",
      links: [
        {
          label: "Full Stack Teams",
          description: "End-to-end delivery squads",
          href: "/full-stack-development",
          icon: <RiTeamLine />,
        },
        {
          label: "AI & ML Engineers",
          description: "Intelligent system builders",
          href: "/artificial-intelligence",
          icon: <RiBrainLine />,
        },
        {
          label: "UX/UI Designers",
          description: "Human-centred design craft",
          href: "/uxui-design",
          icon: <RiPaletteLine />,
        },
        {
          label: "DevOps Engineers",
          description: "CI/CD & cloud infrastructure",
          href: "/devops",
          icon: <RiCloudLine />,
        },
        {
          label: "QA & Testing",
          description: "Bulletproof quality assurance",
          href: "/qa-and-testing",
          icon: <RiShieldCheckLine />,
        },
      ],
    },
  ],
  blogCard: {
    tag: "Guide",
    title: "Partner with Experts",
    excerpt:
      "Elevate your business with our tailored digital solutions and industry-leading expertise.",
    href: "/blog",
  },
};

export const PLATFORM_NAV: MegaMenuData = {
  columns: [
    {
      heading: "Platform",
      links: [
        {
          label: "Analytics",
          description: "Real-time dashboards and metrics",
          href: "/analytics",
          icon: <RiBarChartBoxLine />,
        },
        {
          label: "Automation",
          description: "Workflows that run themselves",
          href: "/automation",
          icon: <RiFlashlightLine />,
        },
        {
          label: "Infrastructure",
          description: "Edge compute and storage",
          href: "/devops",
          icon: <RiServerLine />,
        },
        {
          label: "Database",
          description: "Managed Postgres and Redis",
          href: "/full-stack-development",
          icon: <RiDatabase2Line />,
        },
      ],
    },
    {
      heading: "Developer",
      links: [
        {
          label: "Developer Tools",
          description: "SDKs, APIs, and CLI",
          href: "/full-stack-development",
          icon: <RiCodeSSlashLine />,
        },
        {
          label: "AI Engine",
          description: "Built-in machine learning",
          href: "/artificial-intelligence",
          icon: <RiBrainLine />,
        },
        {
          label: "Security",
          description: "Enterprise-grade protection",
          href: "/qa-and-testing",
          icon: <RiShieldCheckLine />,
        },
        {
          label: "AI Agents",
          description: "Autonomous task runners",
          href: "/artificial-intelligence",
          icon: <RiRobot2Line />,
        },
      ],
    },
  ],
  blogCard: {
    tag: "New",
    title: "Introducing MPIS Analytics 2.0",
    excerpt:
      "Faster queries, smarter dashboards, and real-time collaboration for your team.",
    href: "/blog",
  },
};

export const INDUSTRIES_NAV: MegaMenuData = {
  columns: [
    {
      heading: "Industries We Serve",
      links: [
        {
          label: "Healthcare",
          description: "Digital-first patient experiences",
          href: "/healthcare",
          icon: <RiHeartPulseLine />,
        },
        {
          label: "eLearning",
          description: "Interactive learning ecosystems",
          href: "/elearning",
          icon: <RiBookOpenLine />,
        },
        {
          label: "Fintech",
          description: "Secure financial platforms",
          href: "/fintech",
          icon: <RiMoneyDollarCircleLine />,
        },
        {
          label: "Real Estate",
          description: "PropTech & listing solutions",
          href: "/real-estate",
          icon: <RiBuildingLine />,
        },
        {
          label: "Tour & Travel",
          description: "Booking & itinerary platforms",
          href: "/tour-and-travel",
          icon: <RiFlightTakeoffLine />,
        },
        {
          label: "Ecommerce",
          description: "High-conversion storefronts",
          href: "/ecommerce",
          icon: <RiStore2Line />,
        },
      ],
    },
  ],
  blogCard: {
    tag: "Report",
    title: "Industry Digitisation Benchmark 2025",
    excerpt:
      "How leading enterprises are accelerating with custom software investments.",
    href: "/blog",
  },
};

export const TECHNOLOGIES: MegaMenuData = {
  columns: [
    {
      heading: "Frontend",
      links: [
        { label: "AngularJS", href: "/healthcare", icon: <Angular /> },
        { label: "ReactJS", href: "/elearning", icon: <React /> },
        { label: "Vue.js", href: "/fintech", icon: <Vuejs /> },
        { label: "JavaScript", href: "/fintech", icon: <Javascript /> },
        { label: "TypeScript", href: "/fintech", icon: <Typescript /> },
        { label: "Tailwind CSS", href: "/fintech", icon: <Tailwind /> },
        { label: "ViteJS", href: "/fintech", icon: <Vite /> },
      ],
    },
    {
      heading: "Backend",
      links: [
        { label: ".Net", href: "/healthcare", icon: <Net /> },
        { label: "PHP", href: "/elearning", icon: <SiPhp /> },
        { label: "Node.js", href: "/fintech", icon: <SiNodedotjs /> },
        { label: ".Net Core", href: "/fintech", icon: <AiOutlineDotNet /> },
        { label: "Python", href: "/fintech", icon: <SiPython /> },
      ],
    },

    {
      heading: "Frameworks",
      links: [
        { label: "Laravel", href: "/fintech", icon: <SiLaravel /> },
        { label: "CodeIgniter", href: "/fintech", icon: <SiCodeigniter /> },
      ],
    },
    {
      heading: "Database",
      links: [
        { label: "SQL Server", href: "/healthcare", icon: <PiFileSqlFill /> },
        { label: "MySQL", href: "/elearning", icon: <TbBrandMysql /> },
        { label: "PostgreSQL", href: "/fintech", icon: <BiLogoPostgresql /> },
        { label: "MongoDB", href: "/fintech", icon: <SiMongodb /> },
        { label: "DynamoDB", href: "/fintech", icon: <GiDatabase /> },
        { label: "SQLite", href: "/fintech", icon: <SiSqlite /> },
        { label: "Firebase", href: "/fintech", icon: <RiFirebaseFill /> },
      ],
    },
    {
      heading: "Mobile",
      links: [
        { label: "iOS", href: "/healthcare", icon: <SiApple /> },
        { label: "Android", href: "/elearning", icon: <SiAndroid /> },
        { label: "Flutter", href: "/fintech", icon: <SiFlutter /> },
        { label: "React Native", href: "/fintech", icon: <RiReactjsLine /> },
      ],
    },
    {
      heading: "Cloud",
      links: [
        { label: "AWS", href: "/healthcare", icon: <FaAws /> },
        { label: "Google Cloud", href: "/elearning", icon: <SiGooglecloud /> },
        { label: "Azure", href: "/fintech", icon: <VscAzure /> },
      ],
    },
    {
      heading: "E Commerce",
      links: [
        { label: "Woo Commerce", href: "/healthcare", icon: <SiWoocommerce /> },
        { label: "Magneto", href: "/elearning", icon: <Magento /> },
        { label: "Shopify", href: "/fintech", icon: <VscAzure /> },
      ],
    },
  ],
};

export const BLOG_NAV: MegaMenuData = {
  columns: [
    {
      heading: "Insights & News",
      links: [
        {
          label: "Latest Articles",
          description: "Fresh perspectives from our team",
          href: "/blog",
          icon: <RiArticleLine />,
        },
        {
          label: "Tech Insights",
          description: "Deep-dives into emerging tech",
          href: "/tech-insights",
          icon: <RiLightbulbFlashLine />,
        },
        {
          label: "Company News",
          description: "Updates from MPIS Revolution",
          href: "/company-news",
          icon: <RiNewspaperLine />,
        },
        {
          label: "Case Studies",
          description: "Real results, real clients",
          href: "/case-studies",
          icon: <RiBookOpenLine />,
        },
      ],
    },
  ],
  blogCard: {
    tag: "Featured",
    title: "How AI is Reshaping Custom Software in 2025",
    excerpt:
      "We explore the biggest trends transforming how enterprises build and ship software.",
    href: "/blog",
  },
};

export const ABOUT_NAV: MegaMenuData = {
  columns: [
    {
      heading: "Discover MPIS",
      links: [
        {
          label: "Our Company",
          description: "Our mission, values & vision",
          href: "/about",
          icon: <RiBuildingLine />,
        },
        {
          label: "Leadership Team",
          description: "The minds behind MPIS",
          href: "/leadership-team",
          icon: <RiTeamLine />,
        },
        {
          label: "Awards & Recognition",
          description: "Industry accolades we've earned",
          href: "/awards-recognition",
          icon: <RiAwardLine />,
        },
        {
          label: "Careers",
          description: "Join a team that builds the future",
          href: "/careers",
          icon: <RiBriefcaseLine />,
        },
      ],
    },
  ],
  blogCard: {
    tag: "We're Hiring",
    title: "Join Our Growing Team of Innovators",
    excerpt:
      "Open roles across engineering, design, and product. Remote-first culture.",
    href: "/careers",
  },
};

// ─── Combined Export ───────────────────────────────────────────────────────

export const NAV: NavItem[] = [
  { label: "Services", mega: SERVICES_NAV },
  { label: "Platform", mega: PLATFORM_NAV },
  { label: "Technologies", mega: TECHNOLOGIES },
  { label: "Industries", mega: INDUSTRIES_NAV },
  { label: "Blog", href: "/blog", mega: BLOG_NAV },
  { label: "About", href: "/about", mega: ABOUT_NAV },
];
