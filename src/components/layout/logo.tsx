import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/config/site";

/**
 * Text wordmark by default so the site renders correctly before brand
 * assets arrive. Drop a real mark at `public/images/logo/bella-logo.svg`
 * and swap the JSX below for an <img> once it's ready.
 */
export function Logo({ tone = "default" }: { tone?: "default" | "inverted" }) {
  return (
    <Link href="/" className="flex flex-col leading-none" aria-label={siteConfig.fullName}>
      <span
        className={cn(
          "font-heading text-2xl font-extrabold tracking-tight",
          tone === "inverted" ? "text-white" : "text-brand-navy dark:text-foreground",
        )}
      >
        {siteConfig.name}
      </span>
      <span
        className={cn(
          "text-[10px] font-medium tracking-wide uppercase",
          tone === "inverted" ? "text-white/70" : "text-muted-foreground",
        )}
      >
        Premium Drinking Water
      </span>
    </Link>
  );
}
