import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface StepCardProps {
  number: string;
  icon: LucideIcon;
  title: string;
  description: string;
  image?: string;
  reversed?: boolean;
}

/** Numbered horizontal process step, used on the Purity and Quality pages. */
export function StepCard({ number, icon: Icon, title, description, image, reversed }: StepCardProps) {
  return (
    <div className="relative flex gap-4 sm:gap-6">
      <div className="flex flex-col items-center">
        <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-brand-navy text-sm font-bold text-white dark:bg-primary">
          {number}
        </span>
        <span className="mt-2 w-px flex-1 bg-border" aria-hidden />
      </div>
      <div
        className={cn(
          "grid flex-1 gap-4 pb-10 sm:grid-cols-[auto_1fr_auto] sm:items-center",
          reversed && "sm:grid-cols-[auto_auto_1fr]",
        )}
      >
        <span className="hidden size-11 items-center justify-center rounded-full bg-brand-sky text-brand-navy sm:flex dark:bg-primary/15 dark:text-primary">
          <Icon className="size-5" strokeWidth={1.75} />
        </span>
        <div className="rounded-2xl border bg-card p-5">
          <h3 className="mb-1.5 flex items-center gap-2 text-lg font-bold text-brand-navy dark:text-foreground">
            <Icon className="size-4 shrink-0 sm:hidden" />
            {title}
          </h3>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>
        {image ? (
          // eslint-disable-next-line @next/next/no-img-element -- static export, placeholder-friendly
          <img
            src={image}
            alt=""
            className="hidden h-24 w-32 rounded-xl object-cover sm:block"
            loading="lazy"
          />
        ) : null}
      </div>
    </div>
  );
}
