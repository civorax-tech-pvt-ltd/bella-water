import type { LucideIcon } from "lucide-react";
import { Container } from "@/components/shared/container";
import { cn } from "@/lib/utils";

interface HeroStat {
  icon: LucideIcon;
  label: string;
}

interface PageHeroProps {
  eyebrow: string;
  title: React.ReactNode;
  description: string;
  image: string;
  stats?: HeroStat[];
  actions?: React.ReactNode;
  className?: string;
}

/**
 * Full-bleed photo hero with a left-side scrim for text legibility, shared
 * by every interior page (Our Story, Purity, Products, Quality, Business,
 * Contact). The scrim fades from the page background color on the left to
 * fully transparent on the right, so the photo shows unobstructed while the
 * text sits on a readable, theme-matched backdrop regardless of what part
 * of the photo is behind it.
 */
export function PageHero({ eyebrow, title, description, image, stats, actions, className }: PageHeroProps) {
  return (
    <section
      className={cn(
        "relative isolate flex min-h-[520px] items-center overflow-hidden sm:min-h-[580px] lg:min-h-[640px]",
        className,
      )}
    >
      {/* eslint-disable-next-line @next/next/no-img-element -- static export, placeholder-friendly */}
      <img src={image} alt="" className="absolute inset-0 -z-20 size-full object-cover" />
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-r from-background via-background/60 to-transparent"
        aria-hidden
      />

      <Container className="pt-28 pb-14 sm:pt-32 sm:pb-20">
        <div className="max-w-xl">
          <p className="mb-3 text-sm font-semibold tracking-wide text-brand-navy uppercase dark:text-primary">
            {eyebrow}
          </p>
          <h1 className="text-4xl font-bold tracking-tight text-balance text-brand-navy sm:text-5xl dark:text-foreground">
            {title}
          </h1>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground text-pretty">{description}</p>
          {actions ? <div className="mt-8 flex flex-wrap gap-3">{actions}</div> : null}
          {stats && stats.length > 0 ? (
            <dl className="mt-10 flex flex-wrap gap-x-8 gap-y-4">
              {stats.map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-2">
                  <span className="flex size-9 items-center justify-center rounded-full bg-white text-brand-navy shadow-sm dark:bg-primary/15 dark:text-primary">
                    <Icon className="size-4" strokeWidth={1.75} />
                  </span>
                  <dd className="text-sm font-medium text-brand-navy dark:text-foreground">{label}</dd>
                </div>
              ))}
            </dl>
          ) : null}
        </div>
      </Container>
    </section>
  );
}
