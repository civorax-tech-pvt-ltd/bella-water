import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface IconFeatureProps {
  icon: LucideIcon;
  title: string;
  description?: string;
  align?: "left" | "center";
  tone?: "default" | "inverted";
  className?: string;
}

export function IconFeature({
  icon: Icon,
  title,
  description,
  align = "center",
  tone = "default",
  className,
}: IconFeatureProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-2",
        align === "center" ? "items-center text-center" : "items-start text-left",
        className,
      )}
    >
      <span
        className={cn(
          "flex size-12 shrink-0 items-center justify-center rounded-full",
          tone === "inverted"
            ? "bg-white/10 text-white"
            : "bg-brand-sky text-brand-navy dark:bg-primary/15 dark:text-primary",
        )}
      >
        <Icon className="size-5" strokeWidth={1.75} />
      </span>
      <p
        className={cn(
          "text-sm font-semibold",
          tone === "inverted" ? "text-white" : "text-brand-navy dark:text-foreground",
        )}
      >
        {title}
      </p>
      {description ? (
        <p
          className={cn(
            "text-sm",
            tone === "inverted" ? "text-white/70" : "text-muted-foreground",
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
