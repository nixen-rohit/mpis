// components/header/desktop/MegaMenuPanel.tsx
import Link from "next/link";
import { cn } from "@/lib/utils";
import { RiExternalLinkLine } from "react-icons/ri";
import { MegaMenuData } from "../navdata";
import { BlogPreviewCard } from "../shared/BlogPreviewCard";

interface MegaMenuPanelProps {
  mega: MegaMenuData;
  align?: "left" | "right" | "center";
  isTech?: boolean;
  
}

export function MegaMenuPanel({
  mega,
  align = "left",
  isTech = false,
 
}: MegaMenuPanelProps) {
  const colCount = mega.columns.length;
  const hasBlog = !!mega.blogCard;

  const alignClass =
    align === "right"
      ? "right-0"
      : align === "center"
        ? "left-1/2 -translate-x-1/2"
        : "left-0";

  // Technologies gets a special wide grid layout
  if (isTech) {
    return (
      <div
        className={cn(
          "absolute top-full mt-1.5 z-50",
          alignClass,
          "bg-white rounded-2xl border border-gray-200 shadow-xl shadow-black/8",
          "p-5 opacity-0 translate-y-2 scale-[0.98] pointer-events-none",
          "group-hover:opacity-100 group-hover:translate-y-0 group-hover:scale-100 group-hover:pointer-events-auto",
          "transition-all duration-200 ease-out origin-top",
        )}
        style={{ width: "860px", maxWidth: "calc(100vw - 32px)" }}
      >
        <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-3 pb-2 border-b border-gray-100">
          All Technologies
        </p>
        <div className="grid grid-cols-5 gap-x-4 gap-y-4">
          {mega.columns.map((col, ci) => (
            <div key={ci}>
              <p className="text-[9px] font-black uppercase tracking-widest text-gray-400 mb-1.5">
                {col.heading}
              </p>
              <ul className="flex flex-col gap-0.5">
                {col.links.map((link, li) => (
                  <li key={li}>
                    <Link
                      href={link.href}
                      className="group/link flex items-center gap-2 rounded-md px-1.5 py-1.5 hover:bg-gray-50 transition-colors duration-100"
                    >
                      <span className="shrink-0 flex h-6 w-6 items-center justify-center rounded-md bg-gray-100 text-gray-500 group-hover/link:bg-blue-100 group-hover/link:text-blue-600 transition-colors overflow-hidden">
                        {link.icon}
                      </span>
                      <span className="text-[12px] font-medium text-gray-700 group-hover/link:text-blue-700 transition-colors leading-tight truncate">
                        {link.label}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    );
  }

  const totalCols = hasBlog ? colCount + 1 : colCount;
  const minWidth = Math.min(totalCols * 215, 920);

  return (
    <div
      className={cn(
        "absolute top-full mt-1.5 z-50 ",
        alignClass,
        "bg-white  rounded-2xl border border-gray-200 shadow-xl shadow-black/8",
        "p-5 opacity-0 translate-y-2 scale-[0.98] pointer-events-none",
        "group-hover:opacity-100 group-hover:translate-y-0 group-hover:scale-100 group-hover:pointer-events-auto",
        "transition-all duration-200 ease-out origin-top ",
      )}
      style={{ minWidth: `${minWidth}px`, maxWidth: "920px" }}
    >
      <div
        className="grid gap-0"
        style={{
          gridTemplateColumns: hasBlog
            ? `repeat(${colCount}, 1fr) 200px`
            : `repeat(${colCount}, 1fr)`,
        }}
      >
        {mega.columns.map((col, ci) => (
          <div
            key={ci}
            className={cn(
              "pr-5",
              ci > 0 && "border-l border-gray-100 pl-5",
              ci === mega.columns.length - 1 && !hasBlog && "pr-0",
            )}
          >
            <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-2.5 pb-2 border-b border-gray-100">
              {col.heading}
            </p>
            <ul className="flex flex-col gap-0.5">
              {col.links.map((link, li) => (
                <li key={li}>
                  <Link
                    href={link.href}
                    target={link.redirect ? "_blank" : undefined}
                    rel={link.redirect ? "noopener noreferrer" : undefined}
                    className="group/link flex items-center gap-3 rounded-lg px-2 py-2 hover:bg-gray-50 transition-colors duration-100"
                  >
                    {link.icon && (
                      <span className="shrink-0 flex h-8 w-8 items-center justify-center rounded-lg bg-gray-100 text-gray-500 text-[15px] group-hover/link:bg-blue-100 group-hover/link:text-blue-600 transition-colors">
                        {link.icon}
                      </span>
                    )}
                    <span className="flex flex-col gap-0.5 min-w-0 flex-1">
                      <span className="flex items-center gap-1 text-[13px] font-semibold text-gray-800 group-hover/link:text-blue-700 transition-colors leading-tight">
                        {link.label}
                        {link.redirect && (
                          <RiExternalLinkLine className="text-[11px] text-gray-400 group-hover/link:text-blue-500 transition-colors shrink-0" />
                        )}
                      </span>
                      {link.description && (
                        <span className="text-[11px] text-gray-400 leading-snug truncate">
                          {link.description}
                        </span>
                      )}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
        {hasBlog && (
          <div className="border-l   border-gray-100 pl-5">
            <BlogPreviewCard card={mega.blogCard!} />
          </div>
        )}
      </div>
    </div>
  );
}
