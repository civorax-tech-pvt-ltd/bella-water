"use client";

import { useEffect, useRef, useState } from "react";
import { Menu, MessageCircle, ShoppingCart } from "lucide-react";
import { useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import { Logo } from "@/components/layout/logo";
import { LanguageSwitcher } from "@/components/layout/language-switcher";
import { ThemeToggle } from "@/components/theme/theme-toggle";
import { Container } from "@/components/shared/container";
import { mainNav, siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

export function Header() {
  const t = useTranslations("nav");
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const lastScrollY = useRef(0);
  const stopTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    function onScroll() {
      const y = window.scrollY;
      setScrolled(y > 24);

      // Hide while actively scrolling down past the hero; reveal on scroll up,
      // and always reveal again shortly after scrolling stops.
      setHidden(y > lastScrollY.current && y > 120);
      lastScrollY.current = y;

      if (stopTimer.current) clearTimeout(stopTimer.current);
      stopTimer.current = setTimeout(() => setHidden(false), 500);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (stopTimer.current) clearTimeout(stopTimer.current);
    };
  }, []);

  // Only pages listed in mainNav have a hero photo behind the header — everything
  // else (legal pages, 404) always gets the fully solid header.
  const hasHero = mainNav.some((item) => (item.href === "/" ? pathname === "/" : pathname.startsWith(item.href)));
  const solid = scrolled || open || !hasHero;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b transition-all duration-300",
        solid
          ? "border-border bg-background/90 backdrop-blur-sm"
          // No background of its own here — the hero section underneath already
          // renders a full-height scrim, so this stays fully transparent to avoid
          // stacking a second, independently-edged layer (which showed as a seam
          // at the header's bottom edge). drop-shadow is the legibility safety
          // net instead — it covers both text and icon SVGs, unlike text-shadow.
          : "border-transparent bg-transparent [filter:drop-shadow(0_1px_2px_rgb(0_0_0_/_0.35))]",
        hidden && !open ? "-translate-y-full" : "translate-y-0",
      )}
    >
      <Container className="flex h-20 items-center justify-between gap-4 py-3">
        <Logo />

        <nav className="hidden items-center gap-1 lg:flex">
          {mainNav.map((item) => {
            const isActive = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-md px-3 py-2 text-sm font-medium transition-colors hover:text-brand-navy dark:hover:text-primary",
                  isActive
                    ? "text-brand-navy underline decoration-brand-green decoration-2 underline-offset-8 dark:text-primary"
                    : "text-foreground/80",
                )}
              >
                {t(item.key)}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <a
            href={siteConfig.contact.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-sm font-medium text-brand-green hover:opacity-80"
          >
            <MessageCircle className="size-4" />
            {t("whatsappUs")}
          </a>
          <LanguageSwitcher />
          <ThemeToggle />
          <Button asChild className="ml-1">
            <a href={`${siteConfig.contact.whatsappLink}?text=${encodeURIComponent("Hi, I'd like to order Bella water.")}`} target="_blank" rel="noopener noreferrer">
              <ShoppingCart className="size-4" />
              {t("orderWater")}
            </a>
          </Button>
        </div>

        <div className="flex items-center gap-1 lg:hidden">
          <LanguageSwitcher />
          <ThemeToggle />
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" aria-label={t("menu")}>
                <Menu className="size-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-72">
              <SheetHeader>
                <SheetTitle>
                  <Logo />
                </SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col gap-1 px-4">
                {mainNav.map((item) => {
                  const isActive = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
                  return (
                    <SheetClose asChild key={item.href}>
                      <Link
                        href={item.href}
                        className={cn(
                          "rounded-md px-3 py-2.5 text-base font-medium",
                          isActive ? "bg-brand-sky text-brand-navy dark:bg-secondary dark:text-primary" : "text-foreground/80",
                        )}
                      >
                        {t(item.key)}
                      </Link>
                    </SheetClose>
                  );
                })}
              </nav>
              <div className="mt-4 flex flex-col gap-3 border-t px-4 pt-4">
                <Button asChild variant="outline">
                  <a href={siteConfig.contact.whatsappLink} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="size-4" />
                    {t("whatsappUs")}
                  </a>
                </Button>
                <Button asChild>
                  <a href={siteConfig.contact.whatsappLink} target="_blank" rel="noopener noreferrer">
                    <ShoppingCart className="size-4" />
                    {t("orderWater")}
                  </a>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </Container>
    </header>
  );
}
