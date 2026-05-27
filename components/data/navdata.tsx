// components/header/nav-data.tsx
"use client";

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
  RiMoneyDollarCircleLine,
  RiBuildingLine,
  RiFlightTakeoffLine,
  RiArticleLine,
  RiLightbulbFlashLine,
  RiNewspaperLine,
  RiAwardLine,
  RiBriefcaseLine,
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
  img?: string;
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
          href: "/custom-software-development",
          icon: <RiSettings3Line />,
        },
        {
          label: "Web Applications",
          href: "/web-application-development",
          icon: <RiGlobalLine />,
        },
        {
          label: "App Development",
          href: "/app-development",
          icon: <RiSmartphoneLine />,
        },
        {
          label: "Healthcare Software",
          href: "/healthcare",
          icon: <RiHeartPulseLine />,
        },
        {
          label: "eLearning Platforms",
          href: "/e-learning-development",
          icon: <RiBookOpenLine />,
        },
        {
          label: ".NET Development",
          href: "/net-application-development",
          icon: <RiCodeSSlashLine />,
        },
      ],
    },
    {
      heading: "Application Development",
      links: [
        {
          label: "Web Application",
          href: "/web-application",
          icon: <RiDatabase2Line />,
        },
        {
          label: "Custom Application",
          href: "/custom-application",
          icon: <RiSettings3Line />,
        },
        {
          label: "Application Management",
          href: "/application-management",
          icon: <RiSmartphoneLine />,
        },
        {
          label: "Application Maintenance",
          href: "/application-maintenance",
          icon: <RiFlashlightLine />,
        },
        {
          label: "Application Integration",
          href: "/application-integration",
          icon: <RiStore2Line />,
        },
        {
          label: "Ecommerce Application",
          href: "/e-commerce-application",
          icon: <RiSmartphoneLine />,
        },
        {
          label: "Mobile App Development",
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
          href: "/full-stack-development",
          icon: <RiTeamLine />,
        },
        {
          label: "SaaS Product Development",
          href: "/saas-product-development",
          icon: <RiBrainLine />,
        },
        {
          label: "Artificial Intelligence",
          href: "/artificial-intelligence",
          icon: <RiBrainLine />,
        },
        {
          label: "UX/UI Designers",
          href: "/ux-ui-design",
          icon: <RiPaletteLine />,
        },
        {
          label: "DevOps",
          href: "/devops",
          icon: <RiCloudLine />,
        },
        {
          label: "QA & Testing",
          href: "/qa-and-testing",
          icon: <RiShieldCheckLine />,
        },
      ],
    },
  ],
};

export const EXPERTISE_NAV: MegaMenuData = {
  columns: [
    {
      heading: "Focus ",
      links: [
        {
          label: "SEO (Search Engine Optimization)",
          href: "/digital-marketing",
          icon: <RiBuildingLine />,
        },
        {
          label: "Social Media Marketing",
          href: "/digital-marketing",
          icon: <RiTeamLine />,
        },
        {
          label: "Paid Ads Management",
          href: "/digital-marketing",
          icon: <RiAwardLine />,
        },
      ],
    },
    {
      heading: "Solutions ",
      links: [
        {
          label: "Learning Management Systems",
          href: "/e-learning-development",
          icon: <RiBuildingLine />,
        },
        {
          label: "Content Management System",
          href: "/e-commerce",
          icon: <RiTeamLine />,
        },
        {
          label: "HRMS",

          href: "/enterprise-solutions",
          icon: <RiAwardLine />,
        },
        {
          label: "Healthcare IT",

          href: "/healthcare",
          icon: <RiAwardLine />,
        },
        {
          label: "CRM",

          href: "/enterprise-solutions",
          icon: <RiAwardLine />,
        },
        {
          label: "Service Excellence",

          href: "/enterprise-solutions",
          icon: <RiAwardLine />,
        },
      ],
    },
  ],
  blogCard: {
    tag: "Guide",
    title: "Partner with Experts",
    img: "/img/project03.webp",
    excerpt:
      "Elevate your business with our tailored digital solutions and industry-leading expertise.",
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

          href: "/healthcare",
          icon: <RiHeartPulseLine />,
        },
        {
          label: "eLearning",

          href: "/e-learning",
          icon: <RiBookOpenLine />,
        },
        {
          label: "Fintech",

          href: "/fintech",
          icon: <RiMoneyDollarCircleLine />,
        },
        {
          label: "Real Estate",

          href: "/real-estate",
          icon: <RiBuildingLine />,
        },
        {
          label: "Tour & Travel",

          href: "/tour-and-travel",
          icon: <RiFlightTakeoffLine />,
        },
        {
          label: "Ecommerce",

          href: "/e-commerce",
          icon: <RiStore2Line />,
        },
      ],
    },
  ],
  blogCard: {
    tag: "Report",
    title: "A Quick Guide on the Right Software Development",
    img: "/img/project02.webp",
    excerpt:
      "A Quick Guide on the Right Software Development Approach for Enterprises in 2024",
    href: "/blog",
  },
};

export const BLOG_NAV: MegaMenuData = {
  columns: [
    {
      heading: "Insights & News",
      links: [
        {
          label: "Latest Articles",

          href: "/blog",
          icon: <RiArticleLine />,
        },
        {
          label: "Tech Insights",

          href: "/blog",
          icon: <RiLightbulbFlashLine />,
        },
        {
          label: "Company News",

          href: "/blog",
          icon: <RiNewspaperLine />,
        },
        {
          label: "Case Studies",

          href: "/blog",
          icon: <RiBookOpenLine />,
        },
      ],
    },
  ],
  blogCard: {
    tag: "Guide",
    title: "Partner with Experts",
    img: "/img/project03.webp",
    excerpt:
      "Elevate your business with our tailored digital solutions and industry-leading expertise.",
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

          href: "/about",
          icon: <RiBuildingLine />,
        },
        {
          label: "Leadership Team",

          href: "/leadership-team",
          icon: <RiTeamLine />,
        },
        {
          label: "Awards & Recognition",

          href: "/awards-recognition",
          icon: <RiAwardLine />,
        },
        {
          label: "Careers",

          href: "/careers",
          icon: <RiBriefcaseLine />,
        },
      ],
    },
  ],
  blogCard: {
    tag: "Report",
    title: "A Quick Guide on the Right Software Development",
    img: "/img/project02.webp",
    excerpt:
      "A Quick Guide on the Right Software Development Approach for Enterprises in 2024",
    href: "/blog",
  },
};

// ─── Combined Export ───────────────────────────────────────────────────────

export const NAV: NavItem[] = [
  { label: "Services", mega: SERVICES_NAV },
  { label: "Expertise", mega: EXPERTISE_NAV },
  { label: "Industries", mega: INDUSTRIES_NAV },
  { label: "Career", href: "/careers" },
  { label: "Blog", href: "/blog", mega: BLOG_NAV },
  { label: "About", href: "/about", mega: ABOUT_NAV },
  { label: "Contact", href: "/contact-us" },
];
