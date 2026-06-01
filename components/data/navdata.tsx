// components/header/nav-data.tsx
"use client";

 
import { IoNewspaperSharp } from "react-icons/io5";
import { RiLightbulbFlashFill } from "react-icons/ri";
import { BiSolidNews } from "react-icons/bi";
import { FaBook } from "react-icons/fa6";
import { HiBuildingOffice2 } from "react-icons/hi2";
import { FaGear } from "react-icons/fa6";
import { TbWorld } from "react-icons/tb";
import { FaMobileScreenButton } from "react-icons/fa6";;
import { FaHeartbeat } from "react-icons/fa";
import { FaCode } from "react-icons/fa";
import { FaTools } from "react-icons/fa";
import { FaArrowRightArrowLeft } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";
import { FaBusinessTime } from "react-icons/fa";
import { MdGroups } from "react-icons/md";
import { RiRobot3Fill } from "react-icons/ri";
import { IoIosColorPalette } from "react-icons/io";
import { FaCloudArrowDown } from "react-icons/fa6";
import { MdDashboardCustomize } from "react-icons/md";
import { RiTestTubeFill } from "react-icons/ri";
import { FaSearch } from "react-icons/fa";
import { IoPeople } from "react-icons/io5";
import { MdLiveTv } from "react-icons/md";
import { FaBuildingColumns } from "react-icons/fa6";
import { FaHospital } from "react-icons/fa";
import { FaPhotoVideo } from "react-icons/fa";
import { AiFillControl } from "react-icons/ai";
import { FaRegWindowRestore } from "react-icons/fa";
import { BsFillTrophyFill } from "react-icons/bs";
import { BsPersonVideo } from "react-icons/bs";
import { RiMoneyRupeeCircleFill } from "react-icons/ri";
import { BsBuildingsFill } from "react-icons/bs";
import { FaPlaneDeparture } from "react-icons/fa";
import { FaSuitcase } from "react-icons/fa";


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
          icon: <FaGear />,
        },
        {
          label: "Web Applications",
          href: "/web-application-development",
          icon: <TbWorld />,
        },
        {
          label: "App Development",
          href: "/app-development",
          icon: <FaMobileScreenButton />,
        },
        {
          label: "Healthcare Software",
          href: "/healthcare",
          icon: <FaHeartbeat />,
        },
        {
          label: "eLearning Platforms",
          href: "/e-learning-development",
          icon: <BsPersonVideo />,
        },
        {
          label: ".NET Development",
          href: "/net-application-development",
          icon: <FaCode />,
        },
      ],
    },
    {
      heading: "Application Development",
      links: [
        {
          label: "Web Application",
          href: "/web-application",
          icon: <TbWorld />,
        },
        {
          label: "Custom Application",
          href: "/custom-application",
          icon: <FaGear />,
        },
        {
          label: "Application Management",
          href: "/application-management",
          icon: <FaBusinessTime />,
        },
        {
          label: "Application Maintenance",
          href: "/application-maintenance",
          icon: <FaTools />,
        },
        {
          label: "Application Integration",
          href: "/application-integration",
          icon: <FaArrowRightArrowLeft />,
        },
        {
          label: "Ecommerce Application",
          href: "/e-commerce-application",
          icon: <FaShoppingCart />,
        },
        {
          label: "Mobile App Development",
          href: "/mobile-app-development",
          icon: <FaMobileScreenButton />,
        },
      ],
    },
    {
      heading: "Hire Experts",
      links: [
        {
          label: "Full Stack Teams",
          href: "/full-stack-development",
          icon: <MdGroups />,
        },
        {
          label: "SaaS Product Development",
          href: "/saas-product-development",
          icon: <MdDashboardCustomize />,
        },
        {
          label: "Artificial Intelligence",
          href: "/artificial-intelligence",
          icon: <RiRobot3Fill />,
        },
        {
          label: "UX/UI Designers",
          href: "/ux-ui-design",
          icon: <IoIosColorPalette />,
        },
        {
          label: "DevOps",
          href: "/devops",
          icon: <FaCloudArrowDown />,
        },
        {
          label: "QA & Testing",
          href: "/qa-and-testing",
          icon: <RiTestTubeFill />,
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
          icon: <FaSearch />,
        },
        {
          label: "Social Media Marketing",
          href: "/digital-marketing",
          icon: <IoPeople />,
        },
        {
          label: "Paid Ads Management",
          href: "/digital-marketing",
          icon: <MdLiveTv />,
        },
      ],
    },
    {
      heading: "Solutions ",
      links: [
        {
          label: "Learning Management Systems",
          href: "/e-learning-development",
          icon: <FaBuildingColumns />,
        },
        {
          label: "Content Management System",
          href: "/e-commerce",
          icon: <FaPhotoVideo />,
        },
        {
          label: "HRMS",

          href: "/enterprise-solutions",
          icon: <FaRegWindowRestore />,
        },
        {
          label: "Healthcare IT",

          href: "/healthcare",
          icon: <FaHospital />,
        },
        {
          label: "CRM",

          href: "/enterprise-solutions",
          icon: <AiFillControl />,
        },
        {
          label: "Service Excellence",

          href: "/enterprise-solutions",
          icon: <BsFillTrophyFill />,
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
          icon: <FaHeartbeat />,
        },
        {
          label: "eLearning",

          href: "/e-learning",
          icon: <BsPersonVideo />,
        },
        {
          label: "Fintech",

          href: "/fintech",
          icon: <RiMoneyRupeeCircleFill />,
        },
        {
          label: "Real Estate",

          href: "/real-estate",
          icon: <BsBuildingsFill />,
        },
        {
          label: "Tour & Travel",

          href: "/tour-and-travel",
          icon: <FaPlaneDeparture />,
        },
        {
          label: "Ecommerce",

          href: "/e-commerce",
          icon: <FaShoppingCart />,
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
          icon: <IoNewspaperSharp />,
        },
        {
          label: "Tech Insights",

          href: "/blog",
          icon: <RiLightbulbFlashFill />,
        },
        {
          label: "Company News",

          href: "/blog",
          icon: <BiSolidNews />,
        },
        {
          label: "Case Studies",

          href: "/blog",
          icon: <FaBook />,
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
          icon: <HiBuildingOffice2 />,
        },
        {
          label: "Leadership Team",

          href: "/leadership-team",
          icon: <IoPeople />,
        },
        {
          label: "Awards & Recognition",

          href: "/awards-recognition",
          icon: <BsFillTrophyFill />,
        },
        {
          label: "Careers",

          href: "/careers",
          icon: <FaSuitcase />,
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
