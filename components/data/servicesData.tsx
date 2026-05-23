import {
  CustomSoftware,
  Healthcare,
  WebApplication,
  AppDevelopment,
} from "@/components/svg/svg";
import {
  FaGraduationCap,
  FaGear,
  FaCode,
  FaEarthAmericas,
  FaPuzzlePiece,
  FaCloudArrowDown,
  FaRecycle,
  FaUserGroup,
} from "react-icons/fa6";
import { LuSlidersHorizontal } from "react-icons/lu";
import { FaTools, FaSearch, FaShieldAlt } from "react-icons/fa";
import { ImMobile } from "react-icons/im";
import { BsStack } from "react-icons/bs";
import { RiCpuLine, RiSlideshow3Fill } from "react-icons/ri";
import { IoColorPalette } from "react-icons/io5";
import { TfiStatsUp } from "react-icons/tfi";
import { MdEmail } from "react-icons/md";
import { IoMdCart } from "react-icons/io";

export interface Service {
  id: string | number;
  title: string;
  description: string;
  icon?: React.ComponentType<{ className?: string }>;

  tags: string[];
}

export const SERVICES: Service[] = [
  {
    id: 1,
    title: "Custom Software Development",
    description:
      "We make software that's just right for you. This software matches the way your business works. It helps you get things done faster.",
    icon: CustomSoftware,

    tags: ["Business-fit", "Scalable", "Secure"],
  },
  {
    id: 2,
    title: "Healthcare Software Development",
    description:
      "We develop healthcare systems that streamline workflows, enhance patient care, and protect sensitive medical information with strict security standards.",
    icon: Healthcare,

    tags: ["HIPAA-ready", "Clinical tools", "Secure data"],
  },
  {
    id: 3,
    title: "Web Application Development",
    description:
      "We build web applications that're fast, secure and responsive. They provide user experiences and help businesses run well.",
    icon: WebApplication,

    tags: ["Responsive UI", "Secure backend", "High performance"],
  },
  {
    id: 4,
    title: "App Development",
    description:
      "We make applications that people enjoy using. They simplify tasks. Help businesses connect with customers on different devices.",
    icon: AppDevelopment,
    tags: ["User-focused", "Cross-platform", "Reliable apps"],
  },
  {
    id: 5,
    title: "E Learning Development",
    description:
      "We build digital learning platforms that make education interactive, accessible, and easy to manage for organizations and institutions.",
    icon: FaGraduationCap,

    tags: ["Interactive courses", "Easy access", "Learning analytics"],
  },
  {
    id: 6,
    title: ".NET Application Development",
    description:
      "We deliver high-performance .NET applications that ensure stability, security, and long-term growth for enterprise and business environments.",
    icon: FaCode,

    tags: ["Microsoft stack", "Enterprise grade", "High stability"],
  },
  {
    id: 7,
    title: "Custom Application Development",
    description:
      "We make custom applications that are made for your business. These applications are designed to be flexible and to work well.",
    icon: FaGear,

    tags: ["Tailored build", "Business logic", "Secure structure"],
  },
  {
    id: 8,
    title: "Web Application",
    description:
      "We develop modern web applications that improve productivity, support digital services, and provide consistent user experiences across browsers and devices",
    icon: FaEarthAmericas,

    tags: ["Browser-ready", "Fast loading", "Cloud-ready"],
  },
  {
    id: 9,
    title: "Application Management",
    description:
      "We manage your applications to ensure smooth performance, timely updates, and continuous availability for everyday business operations.",
    icon: LuSlidersHorizontal,

    tags: ["Browser-ready", "Fast loading", "Cloud-ready"],
  },
  {
    id: 10,
    title: "Application Maintenance",
    description:
      "We help keep your applications up-to-date and working properly. This is important because technology and business needs are always changing.",
    icon: FaTools,

    tags: ["Bug fixes", "Regular updates", "System stability"],
  },
  {
    id: 11,
    title: "Application Integration",
    description:
      "We bring together systems and tools to make one simple place where everything works well. This helps make our workflows easier and makes it simpler.",
    icon: FaPuzzlePiece,

    tags: ["API linking", "Data sync", "Process automation"],
  },
  {
    id: 12,
    title: "E-Commerce Application",
    description:
      "We create online shopping websites that make it easy to manage products, improve how customers shop and increase sales online.",
    icon: IoMdCart,

    tags: ["Secure checkout", "Product control", "Sales tracking"],
  },
  {
    id: 13,
    title: "Mobile App Development",
    description:
      "We make apps that people really like to use. These apps help businesses do what they want to do. Our mobile apps work well on Android and iOS platforms.",
    icon: ImMobile,

    tags: ["Native apps", "Smooth UX", "Secure access"],
  },
  {
    id: 14,
    title: "Full Stack Development",
    description:
      "We handle both frontend and backend development to deliver complete applications that are stable, scalable, and easy to maintain.",
    icon: BsStack,

    tags: ["Frontend UI", "Backend logic", "Database design"],
  },
  {
    id: 15,
    title: "SaaS Product Development",
    description:
      "We develop cloud-based SaaS products that are secure, scalable, and designed for continuous updates and user growth.",
    icon: FaCloudArrowDown,

    tags: ["Cloud-native", "Subscription-ready", "Scalable design"],
  },

  {
    id: 16,
    title: "Artificial Intelligence",
    description:
      "We implement AI solutions that help businesses do things by themselves. We help companies get information from the data so they can make decisions using AI.",
    icon: RiCpuLine,

    tags: ["Smart automation", "Predictive models", "Data intelligence"],
  },
  {
    id: 17,
    title: "UX/UI Design",
    description:
      "We design user interfaces that are visually appealing, easy to use, and built to enhance customer satisfaction and engagement.",
    icon: IoColorPalette,
    tags: ["User journeys", "Visual clarity", "Interactive design"],
  },
  {
    id: 18,
    title: "DevOps",
    description:
      "We apply DevOps practices to improve deployment speed, system reliability, and collaboration between development and operations teams.",
    icon: FaRecycle,
    tags: ["CI/CD", "Automation tools", "Faster releases"],
  },
  {
    id: 19,
    title: "QA and Testing",
    description:
      "We test applications thoroughly to ensure quality, security, and smooth performance before and after product launch.",
    icon: FaShieldAlt,
    tags: ["Manual testing", "Automation testing", "Bug detection"],
  },
  {
    id: 20,
    title: "Search Engine Optimization (SEO)",
    description:
      "We optimize your website to improve visibility, attract organic traffic, and strengthen your presence across search engines.",
    icon: FaSearch,
    tags: ["Keyword strategy", "On-page SEO", "Technical SEO"],
  },
  {
    id: 21,
    title: "Social Media Marketing",
    description:
      "We manage social media campaigns that grow brand awareness, build trust, and connect businesses with their target audience.",
    icon: FaUserGroup,
    tags: ["Content planning", "Audience growth", "Brand visibility"],
  },
  {
    id: 22,
    title: "Performance Marketing (PPC)",
    description:
      "We run paid advertising campaigns focused on driving traffic, increasing conversions, and delivering measurable business results.",
    icon: TfiStatsUp,
    tags: ["Paid ads", "Conversion focus", "ROI tracking"],
  },
  {
    id: 23,
    title: "Email Marketing & Automation",
    description:
      "We create automated email campaigns that nurture leads, improve engagement, and strengthen long-term customer relationships.",
    icon: MdEmail,
    tags: ["Automated flows", "Lead nurturing", "Customer retention"],
  },
  {
    id: 24,
    title: "Content Marketing & Strategy",
    description:
      "We create content that actually talks to people, teaching your audience and making sure you show up first in search results and stay true to your brand's voice.",
    icon: RiSlideshow3Fill,
    tags: ["Blog strategy", "Brand messaging", "SEO content"],
  },
];
