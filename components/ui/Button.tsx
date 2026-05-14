 
import { cn } from "@/lib/utils";
import Link from "next/link";
import { RiArrowRightLine } from "react-icons/ri";

const Button = ({ href, title }: { href: string; title: string }) => {
  return (
    <Link
      href={href}
      className={cn(
        "hidden sm:inline-flex items-center gap-1.5 text-[13px] font-semibold",
        "px-5 py-3 rounded-lg bg-blue-600 text-white",
        "hover:bg-blue-700 active:bg-blue-800 transition-colors",
        "shadow-sm shadow-blue-200",
      )}
    >
      {title} <RiArrowRightLine className="text-sm" />
    </Link>
  );
};

export default Button;
