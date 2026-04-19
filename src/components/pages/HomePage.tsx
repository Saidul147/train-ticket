import { SearchForm } from "@/components/search/SearchForm";
import { HomeContent } from "@/components/home/HomeContent";
import { useT } from "@/lib/i18n";

export function HomePage() {
  const t = useT();
  return (
    <main>
      <section className="relative overflow-hidden pb-12">
        {/* Background layers */}
        <div className="absolute inset-0 grid-pattern opacity-60 pointer-events-none" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[500px] w-[800px] rounded-full bg-primary/15 blur-[120px] pointer-events-none animate-pulse-glow" />
        <div className="absolute -top-20 -right-40 h-[400px] w-[400px] rounded-full bg-accent/20 blur-[100px] pointer-events-none animate-float" />
        <div className="absolute -bottom-20 -left-40 h-[400px] w-[400px] rounded-full bg-primary-glow/15 blur-[100px] pointer-events-none animate-float" style={{ animationDelay: "2s" }} />
        <div className="absolute inset-0 noise opacity-[0.4] pointer-events-none mix-blend-overlay" />

        <div className="relative mx-auto max-w-4xl px-4 pt-20 pb-10 text-center animate-fade-up">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 backdrop-blur-sm px-4 py-1.5 text-xs font-semibold text-primary mb-6 shadow-xs">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            {t("site.tagline")}
          </div>
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight leading-[1.02]">
            <span className="text-gradient">{t("hero.title")}</span>
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            {t("hero.subtitle")}
          </p>
        </div>

        <div className="relative mx-auto max-w-3xl px-4 pb-4 animate-fade-up" style={{ animationDelay: "0.15s" }}>
          <SearchForm />
        </div>
      </section>

      <HomeContent />
    </main>
  );
}
