import { MessageCircle } from "lucide-react";
import { useTranslations } from "next-intl";
import { siteConfig } from "@/config/site";

export function WhatsAppFloatButton() {
  const t = useTranslations("common");

  return (
    <a
      href={siteConfig.contact.whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={t("chatOnWhatsapp")}
      className="fixed right-5 bottom-5 z-50 flex size-14 items-center justify-center rounded-full bg-whatsapp text-white shadow-lg transition-transform hover:scale-105"
    >
      <MessageCircle className="size-7" fill="currentColor" strokeWidth={0} />
      <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-whatsapp/60" />
    </a>
  );
}
