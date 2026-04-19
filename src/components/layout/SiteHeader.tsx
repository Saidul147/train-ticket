import { Link } from "@tanstack/react-router";
import { Train, Globe } from "lucide-react";
import { useLocale, useT, buildLocalePath } from "@/lib/i18n";

export function SiteHeader() {
  const locale = useLocale();
  const t = useT();
  const otherLocale = locale === "en" ? "bn" : "en";
  const otherHome = otherLocale === "bn" ? "/bn" : "/";

  return (
    <header className="sticky top-0 z-50 w-full">
      <div className="absolute inset-0 glass border-b border-border/40" />
      <div className="relative mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link to={buildLocalePath(locale, "/") as "/"} className="flex items-center gap-2.5 group">
          <div className="relative flex h-9 w-9 items-center justify-center rounded-2xl bg-gradient-hero shadow-glow transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
            <div className="absolute inset-0 rounded-2xl shadow-inner-glow" style={{ boxShadow: "var(--shadow-inner-glow)" }} />
            <Train className="relative h-4.5 w-4.5 text-primary-foreground" strokeWidth={2.5} />
          </div>
          <div className="flex flex-col leading-none">
            <span className="font-bold text-[15px] tracking-tight">{t("site.name")}</span>
            <span className="text-[10px] font-medium text-muted-foreground tracking-wide uppercase mt-0.5">Bangladesh Railway</span>
          </div>
        </Link>
        <nav className="flex items-center gap-1">
          <Link
            to={buildLocalePath(locale, "/") as "/"}
            className="hidden sm:inline-flex px-3 py-1.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-secondary"
          >
            {t("nav.home")}
          </Link>
          <Link
            to={otherHome as "/"}
            preload="intent"
            className="ml-1 inline-flex items-center gap-1.5 rounded-full border border-border/80 bg-card/80 px-3.5 py-1.5 text-xs font-semibold shadow-xs hover:border-primary/30 hover:bg-primary/5 hover:text-primary transition-all"
          >
            <Globe className="h-3.5 w-3.5" />
            {t("nav.lang")}
          </Link>
        </nav>
      </div>
    </header>
  );
}
