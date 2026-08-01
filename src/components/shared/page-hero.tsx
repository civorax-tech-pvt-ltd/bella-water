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

/** Shared hero used by every interior page (Our Story, Purity, Products, Quality, Business, Contact). */
export function PageHero({ eyebrow, title, description, image, stats, actions, className }: PageHeroProps) {
  return (
    <section className={cn("relative overflow-hidden bg-brand-sky dark:bg-secondary", className)}>
      <Container className="grid items-center gap-10 py-14 sm:py-20 lg:grid-cols-2 lg:py-24">
        <div>
          <p className="mb-3 text-sm font-semibold tracking-wide text-brand-navy uppercase dark:text-primary">
            {eyebrow}
          </p>
          <h1 className="text-4xl font-bold tracking-tight text-balance text-brand-navy sm:text-5xl dark:text-foreground">
            {title}
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground text-pretty">
            {description}
          </p>
          {actions ? <div className="mt-8 flex flex-wrap gap-3">{actions}</div> : null}
          {stats && stats.length > 0 ? (
            <dl className="mt-10 flex flex-wrap gap-x-8 gap-y-4">
              {stats.map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-2">
                  <span className="flex size-9 items-center justify-center rounded-full bg-white text-brand-navy dark:bg-primary/15 dark:text-primary">
                    <Icon className="size-4" strokeWidth={1.75} />
                  </span>
                  <dd className="text-sm font-medium text-brand-navy dark:text-foreground">{label}</dd>
                </div>
              ))}
            </dl>
          ) : null}
        </div>
        <div className="relative mx-auto aspect-4/3 w-full max-w-lg overflow-hidden rounded-3xl bg-white/40 dark:bg-white/5">
          {/* eslint-disable-next-line @next/next/no-img-element -- static export, placeholder-friendly */}
          <img src={image} alt="" className="size-full object-cover" />
        </div>
      </Container>
    </section>
  );
}
