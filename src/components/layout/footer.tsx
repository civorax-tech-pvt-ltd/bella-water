import { MapPin, Phone, Mail } from "lucide-react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Container } from "@/components/shared/container";
import { Logo } from "@/components/layout/logo";
import { FacebookIcon, InstagramIcon, YoutubeIcon } from "@/components/icons/social-icons";
import { footerNav, siteConfig } from "@/config/site";

export function Footer() {
  const t = useTranslations("nav");
  const tFooter = useTranslations("footer");
  const year = new Date().getFullYear();

  return (
    <footer className="bg-brand-navy-deep text-white">
      <Container className="py-14">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr_1fr_1fr_1.2fr]">
          <div>
            <Logo tone="inverted" />
            <p className="mt-4 max-w-xs text-sm text-white/70">{tFooter("tagline")}</p>
            <div className="mt-5 flex items-center gap-3">
              <a href={siteConfig.social.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="flex size-9 items-center justify-center rounded-full bg-white/10 hover:bg-white/20">
                <FacebookIcon className="size-4" />
              </a>
              <a href={siteConfig.social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="flex size-9 items-center justify-center rounded-full bg-white/10 hover:bg-white/20">
                <InstagramIcon className="size-4" />
              </a>
              <a href={siteConfig.social.youtube} target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="flex size-9 items-center justify-center rounded-full bg-white/10 hover:bg-white/20">
                <YoutubeIcon className="size-4" />
              </a>
            </div>
          </div>

          {footerNav.map((column) => (
            <div key={column.key}>
              <h3 className="text-xs font-semibold tracking-wide text-white/50 uppercase">
                {tFooter(`columns.${column.key}`)}
              </h3>
              <ul className="mt-4 space-y-2.5">
                {column.links.map((link) => (
                  <li key={link.key}>
                    {link.href.startsWith("http") ? (
                      <a href={link.href} target="_blank" rel="noopener noreferrer" className="text-sm text-white/70 hover:text-white">
                        {t(link.key)}
                      </a>
                    ) : (
                      <Link href={link.href} className="text-sm text-white/70 hover:text-white">
                        {t(link.key)}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h3 className="text-xs font-semibold tracking-wide text-white/50 uppercase">
              {tFooter("columns.contact")}
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-white/70">
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 size-4 shrink-0" />
                <span>{siteConfig.address.factory}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="size-4 shrink-0" />
                <a href={`tel:${siteConfig.contact.phone}`} className="hover:text-white">
                  {siteConfig.contact.phoneDisplay}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="size-4 shrink-0" />
                <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-white">
                  {siteConfig.contact.email}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </Container>

      <div className="border-t border-white/10">
        <Container className="flex flex-col items-center justify-between gap-3 py-5 text-xs text-white/60 sm:flex-row">
          <p>
            &copy; {year} {siteConfig.fullName}. {tFooter("rightsReserved")}
          </p>
          <div className="flex gap-5">
            <Link href="/privacy-policy" className="hover:text-white">
              {tFooter("privacyPolicy")}
            </Link>
            <Link href="/terms-and-conditions" className="hover:text-white">
              {tFooter("termsAndConditions")}
            </Link>
          </div>
        </Container>
      </div>
    </footer>
  );
}
