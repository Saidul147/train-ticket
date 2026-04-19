import { Train } from "lucide-react";
import { useT } from "@/lib/i18n";

export function SiteFooter() {
  const t = useT();
  return (
    <footer className="mt-32 border-t border-border/50 bg-card/30 backdrop-blur-xl">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-12">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-hero shadow-glow">
            <Train className="h-5 w-5 text-primary-foreground" strokeWidth={2.5} />
          </div>
          <div>
            <p className="font-bold text-foreground">{t("site.name")}</p>
            <p className="text-xs text-muted-foreground mt-0.5">{t("footer.copy", { year: new Date().getFullYear() })}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
