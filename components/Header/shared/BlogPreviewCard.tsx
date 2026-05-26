// components/header/shared/BlogPreviewCard.tsx
import Link from "next/link";
import { RiArrowRightLine } from "react-icons/ri";
import { BlogCard } from "@/components/data/navdata";
import Image from "next/image";

export function BlogPreviewCard({ card }: { card: BlogCard }) {
  const isExternal = Boolean(card.redirect);

  return (
    <div className="flex h-full w-50 flex-col gap-2.5">
      <p className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-600">
        From the blog
      </p>

      <Link
        href={card.href}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noopener noreferrer" : undefined}
        className="group flex h-full flex-col overflow-hidden rounded-xl border border-slate-200 bg-white transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-300 hover:shadow-lg"
      >
        {/* Illustration */}
        <div className="relative h-48 overflow-hidden bg-linear-to-br from-slate-50 via-blue-50 to-indigo-100 shrink-0">
          {card.img ? (
            <Image
              src={card.img}
              alt={card.title}
              fill
              className="object-cover"
            />
          ) : (
            <>
              <svg
                className="absolute inset-0 h-full w-full"
                viewBox="0 0 220 112"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="xMidYMid slice"
              >
                <defs>
                  <linearGradient id="bcg" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#bfdbfe" />
                    <stop offset="100%" stopColor="#c7d2fe" />
                  </linearGradient>
                </defs>

                <rect width="220" height="112" fill="url(#bcg)" opacity="0.45" />

                <path
                  d="M0 80 Q55 25 110 60 Q165 95 220 40 L220 112 L0 112Z"
                  fill="#3b82f6"
                  opacity="0.18"
                />

                <path
                  d="M0 100 Q70 55 130 80 Q175 100 220 60 L220 112 L0 112Z"
                  fill="#6366f1"
                  opacity="0.14"
                />

                <circle
                  cx="180"
                  cy="26"
                  r="36"
                  fill="#60a5fa"
                  opacity="0.12"
                />

                <circle
                  cx="40"
                  cy="18"
                  r="22"
                  fill="#818cf8"
                  opacity="0.10"
                />
              </svg>
            </>
          )}

          <div className="absolute left-3 top-3 z-10">
            <span className="inline-flex rounded-full border border-blue-100 bg-white/95 px-2.5 py-0.5 text-[10px] font-extrabold uppercase tracking-[0.18em] text-blue-700 shadow-sm">
              {card.tag}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-1 flex-col px-4 py-3 gap-2">
          <h3 className="line-clamp-2 text-[13px] font-bold leading-snug text-slate-900 group-hover:text-blue-700 transition-colors duration-200">
            {card.title}
          </h3>

          <p className="line-clamp-2 text-[11px] leading-relaxed text-slate-500 flex-1">
            {card.excerpt}
          </p>

          <div className="flex items-center gap-1 text-[11px] font-semibold text-blue-600 group-hover:gap-2 transition-all duration-200 mt-1">
            Read more <RiArrowRightLine className="text-xs" />
          </div>
        </div>
      </Link>
    </div>
  );
}