// components/header/shared/BlogPreviewCard.tsx
import Link from "next/link";

import { BlogCard } from "../nav-data";
import { FaArrowRight } from "react-icons/fa";

export function BlogPreviewCard({ card }: { card: BlogCard }) {
  const isExternal = Boolean(card.redirect);

  return (
    <div className="flex h-full flex-col gap-3">
      {/* Section label */}
      <p className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-600">
        From the blog
      </p>

      {/* Card */}
      <div className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-lg">
        {/* Hero / Illustration */}
        <div className="relative h-36 overflow-hidden bg-linear-to-br from-slate-50 via-blue-50 to-indigo-100">
          <svg
            className="absolute inset-0 h-full w-full"
            viewBox="0 0 220 128"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMid slice"
          >
            <defs>
              <linearGradient
                id="blogCardGradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#bfdbfe" />
                <stop offset="100%" stopColor="#c7d2fe" />
              </linearGradient>
            </defs>

            <rect
              width="220"
              height="128"
              fill="url(#blogCardGradient)"
              opacity="0.45"
            />

            <path
              d="M0 90 Q55 30 110 70 Q165 110 220 50 L220 128 L0 128Z"
              fill="#3b82f6"
              opacity="0.18"
            />

            <path
              d="M0 110 Q70 60 130 90 Q175 110 220 70 L220 128 L0 128Z"
              fill="#6366f1"
              opacity="0.14"
            />

            <circle cx="180" cy="30" r="40" fill="#60a5fa" opacity="0.12" />
            <circle cx="40" cy="20" r="25" fill="#818cf8" opacity="0.1" />
          </svg>

          {/* Overlay for better contrast */}
          <div className="absolute inset-0 bg-linear-to-t from-black/5 via-transparent to-transparent" />

          {/* Tag */}
          <div className="absolute left-4 top-4">
            <span className="inline-flex rounded-full border border-blue-100 bg-white/95 px-3 py-1 text-[10px] font-extrabold uppercase tracking-[0.18em] text-blue-700 shadow-sm backdrop-blur">
              {card.tag}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-1 flex-col px-5 py-4">
          <div className="flex-1 space-y-2">
            <h3 className="line-clamp-2 text-sm font-bold leading-snug text-slate-900 transition-colors duration-200 group-hover:text-blue-700">
              {card.title}
            </h3>

            <p className="line-clamp-3 text-xs leading-relaxed text-slate-500">
              {card.excerpt}
            </p>
          </div>

          {/* CTA */}
          <div className="mt-4">
            <Link
              href={card.href}
              target={isExternal ? "_blank" : undefined}
              rel={isExternal ? "noopener noreferrer" : undefined}
              className="inline-flex w-fit items-center gap-2 rounded-full bg-blue-600 px-4 py-2 text-xs font-semibold text-white shadow-sm transition-all duration-200 hover:bg-blue-700 hover:shadow-md"
            >
              Start a project <FaArrowRight className="text-sm  " />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
