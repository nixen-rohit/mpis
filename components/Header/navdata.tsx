// components/header/nav-data.tsx
"use client";
import {
  Magento,
  React,
  Angular,
  Vuejs,
  Javascript,
  Tailwind,
  Typescript,
  Vite,
  Net,
  Laravel,
  Codeigniter,
  PHP,
  Nodejs,
  NetCore,
  Python,
  SQLServer,
  MySQL,
  PostgreSQL,
  MongoDB,
  DynamoDB,
  SQLite,
  Firebase,
  Woocommerce,
  Apple,
  Android,
  Flutter,
  ReactNative,
  AWS,
  Googlecloud,
  Azure,
  Shopify,
  Wordpress,
  BlockChain,
  AzureDevOps,
} from "@/components/svg/page";

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
          href: "/e-learning-development",
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
      heading: "Application Development",
      links: [
        {
          label: "Web Application",
          description: "Built from the ground up",
          href: "/web-application",
          icon: <RiDatabase2Line />,
        },
        {
         label: "Custom Application",
          description: "Ongoing support & monitoring",
          href: "/custom-application",
          icon: <RiSettings3Line />,
        },
        {
          label: "Application Management",
          description: "Flutter, React Native & more",
          href: "/application-management",
          icon: <RiSmartphoneLine />,
        },
        {
          label: "Application Maintenance",
          description: "Connect your tech ecosystem",
          href: "/application-maintenance",
          icon: <RiFlashlightLine />,
        },
        {
          label: "Application Integration",
          description: "Conversion-optimised storefronts",
          href: "/application-integration",
          icon: <RiStore2Line />,
        },
        {
          label: "Ecommerce Application",
          description: "Flutter, React Native & more",
          href: "/e-commerce-application",
          icon: <RiSmartphoneLine />,
        },
         {
          label: "Mobile App Development",
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
          label: "SaaS Product Development",
          description: "Intelligent system builders",
          href: "/saas-product-development",
          icon: <RiBrainLine />,
        },
        {
          label: "Artificial Intelligence",
          description: "Intelligent system builders",
          href: "/artificial-intelligence",
          icon: <RiBrainLine />,
        },
        {
          label: "UX/UI Designers",
          description: "Human-centred design craft",
          href: "/ux-ui-design",
          icon: <RiPaletteLine />,
        },
        {
          label: "DevOps",
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
 
};


export const EXPERTISE_NAV: MegaMenuData = {
  columns: [
    {
      heading: "Focus ",
      links: [
        {
          label: "SEO (Search Engine Optimization)",
          description: "Our mission, values & vision",
          href: "/digital-marketing",
          icon: <RiBuildingLine />,
        },
        {
          label: "Social Media Marketing",
          description: "The minds behind MPIS",
           href: "/digital-marketing",
          icon: <RiTeamLine />,
        },
        {
          label: "Paid Ads Management",
          description: "Industry accolades we've earned",
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
          description: "Our mission, values & vision",
          href: "/e-learning-development",
          icon: <RiBuildingLine />,
        },
        {
          label: "Content Management System",
          description: "The minds behind MPIS",
          href: "/e-commerce",
          icon: <RiTeamLine />,
        },
        {
          label: "HRMS",
          description: "Industry accolades we've earned",
          href: "/enterprise-solutions",
          icon: <RiAwardLine />,
        },
         {
          label: "Healthcare IT",
          description: "Industry accolades we've earned",
          href: "/healthcare",
          icon: <RiAwardLine />,
        },
         {
          label: "CRM",
          description: "Industry accolades we've earned",
          href: "/enterprise-solutions",
          icon: <RiAwardLine />,
        },
         {
          label: "Service Excellence",
          description: "Industry accolades we've earned",
        href: "/enterprise-solutions",
          icon: <RiAwardLine />,
        },

         
      ],
    },

    
    //  {
    //   heading: "Technologies ",
    //   links: [
    //     {
    //       label: "AWS",
    //       description: "Our mission, values & vision",
    //       href: "/about",
    //       icon: <RiBuildingLine />,
    //     },
    //     {
    //       label: "Azure",
    //       description: "The minds behind MPIS",
    //       href: "/leadership-team",
    //       icon: <RiTeamLine />,
    //     },
    //     {
    //       label: "GCP",
    //       description: "Industry accolades we've earned",
    //       href: "/awards-recognition",
    //       icon: <RiAwardLine />,
    //     },
    //      {
    //       label: "Utho/IN",
    //       description: "Industry accolades we've earned",
    //       href: "/awards-recognition",
    //       icon: <RiAwardLine />,
    //     },
    //      {
    //       label: "ReactJS",
    //       description: "Industry accolades we've earned",
    //       href: "/awards-recognition",
    //       icon: <RiAwardLine />,
    //     },
    //      {
    //       label: "NextJs",
    //       description: "Industry accolades we've earned",
    //       href: "/awards-recognition",
    //       icon: <RiAwardLine />,
    //     },

         
    //   ],
    // },

    
    
     
  ],
   blogCard: {
    tag: "Guide",
    title: "Partner with Experts",
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
          description: "Digital-first patient experiences",
          href: "/healthcare",
          icon: <RiHeartPulseLine />,
        },
        {
          label: "eLearning",
          description: "Interactive learning ecosystems",
          href: "/e-learning",
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
          href: "/e-commerce",
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
        { label: "PHP", href: "/elearning", icon: <PHP /> },
        { label: "Node.js", href: "/fintech", icon: <Nodejs /> },
        { label: ".Net Core", href: "/fintech", icon: <NetCore /> },
        { label: "Python", href: "/fintech", icon: <Python /> },
      ],
    },

    {
      heading: "Frameworks",
      links: [
        { label: "Laravel", href: "/fintech", icon: <Laravel /> },
        { label: "CodeIgniter", href: "/fintech", icon: <Codeigniter /> },
      ],
    },
    {
      heading: "Database",
      links: [
        { label: "SQL Server", href: "/healthcare", icon: <SQLServer /> },
        { label: "MySQL", href: "/elearning", icon: <MySQL /> },
        { label: "PostgreSQL", href: "/fintech", icon: <PostgreSQL /> },
        { label: "MongoDB", href: "/fintech", icon: <MongoDB /> },
        { label: "DynamoDB", href: "/fintech", icon: <DynamoDB /> },
        { label: "SQLite", href: "/fintech", icon: <SQLite /> },
        { label: "Firebase", href: "/fintech", icon: <Firebase /> },
      ],
    },
    {
      heading: "Mobile",
      links: [
        { label: "iOS", href: "/healthcare", icon: <Apple /> },
        { label: "Android", href: "/elearning", icon: <Android /> },
        { label: "Flutter", href: "/fintech", icon: <Flutter /> },
        { label: "React Native", href: "/fintech", icon: <ReactNative /> },
      ],
    },
    {
      heading: "Cloud",
      links: [
        { label: "AWS", href: "/healthcare", icon: <AWS /> },
        { label: "Google Cloud", href: "/elearning", icon: <Googlecloud /> },
        { label: "Azure", href: "/fintech", icon: <Azure /> },
      ],
    },
    {
      heading: "E Commerce",
      links: [
        { label: "Woo Commerce", href: "/healthcare", icon: <Woocommerce /> },
        { label: "Magneto", href: "/elearning", icon: <Magento /> },
        { label: "Shopify", href: "/fintech", icon: <Shopify /> },
      ],
    },

    {
      heading: "CMS",
      links: [{ label: "Wordpress", href: "/healthcare", icon: <Wordpress /> }],
    },

    {
      heading: "Emerging ",
      links: [
        { label: "Block Chain", href: "/healthcare", icon: <BlockChain /> },
      ],
    },

    {
      heading: "DevOps",
      links: [
        { label: "Azure DevOps", href: "/healthcare", icon: <AzureDevOps /> },
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
  {label : "Expertise" , mega:EXPERTISE_NAV},
  { label: "Industries", mega: INDUSTRIES_NAV },
  { label: "Technologies", mega: TECHNOLOGIES },
  { label: "Career", },
  { label: "Blog", href: "/blog", mega: BLOG_NAV },
  { label: "About", href: "/about", mega: ABOUT_NAV },
];