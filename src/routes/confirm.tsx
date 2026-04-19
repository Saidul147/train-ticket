import { createFileRoute, Link } from "@tanstack/react-router";
import { zodValidator, fallback } from "@tanstack/zod-adapter";
import { z } from "zod";
import { ArrowLeft, ExternalLink, Train, MapPin, CalendarDays, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useT, TRAIN_CLASSES } from "@/lib/i18n";

const schema = z.object({
  fromcity: fallback(z.string().min(1), "").default(""),
  tocity: fallback(z.string().min(1), "").default(""),
  doj: fallback(z.string().min(1), "").default(""),
  class: fallback(z.enum(TRAIN_CLASSES), "SNIGDHA").default("SNIGDHA"),
});

export const Route = createFileRoute("/confirm")({
  validateSearch: zodValidator(schema),
  head: () => ({
    meta: [
      { title: "Confirm — BD Train Ticket" },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: ConfirmPage,
});

function ConfirmPage() {
  const t = useT();
  const { fromcity, tocity, doj, class: klass } = Route.useSearch();
  const valid = fromcity && tocity && doj;

  const officialUrl = `https://eticket.railway.gov.bd/booking/train/search?fromcity=${encodeURIComponent(fromcity)}&tocity=${encodeURIComponent(tocity)}&doj=${encodeURIComponent(doj)}&class=${encodeURIComponent(klass)}`;

  return (
    <main className="mx-auto max-w-2xl px-4 py-16">
      <Link to="/" className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground mb-6">
        <ArrowLeft className="h-4 w-4" />
        {t("confirm.back")}
      </Link>

      <h1 className="text-4xl font-bold tracking-tight mb-2">
        <span className="text-gradient">{t("confirm.title")}</span>
      </h1>

      {!valid ? (
        <div className="mt-8 rounded-2xl border border-destructive/30 bg-destructive/5 p-6">
          <p className="text-destructive font-medium">{t("confirm.invalid")}</p>
        </div>
      ) : (
        <>
          <div className="mt-8 rounded-3xl border border-border bg-gradient-card p-6 shadow-elegant">
            <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-4">
              {t("confirm.summary")}
            </p>
            <dl className="space-y-4">
              <Row icon={MapPin} label={t("confirm.from")} value={fromcity} />
              <Row icon={MapPin} label={t("confirm.to")} value={tocity} />
              <Row icon={CalendarDays} label={t("confirm.date")} value={doj} />
              <Row icon={Tag} label={t("confirm.class")} value={klass} />
            </dl>
          </div>

          <a href={officialUrl} target="_blank" rel="noopener noreferrer" className="block mt-6">
            <Button className="h-14 w-full rounded-xl bg-gradient-hero text-base font-semibold text-primary-foreground shadow-glow hover:opacity-95">
              <Train className="mr-2 h-5 w-5" />
              {t("confirm.continue")}
              <ExternalLink className="ml-2 h-4 w-4" />
            </Button>
          </a>

          <p className="mt-6 text-sm text-muted-foreground leading-relaxed text-center">
            {t("confirm.notice")}
          </p>
        </>
      )}
    </main>
  );
}

function Row({ icon: Icon, label, value }: { icon: React.ComponentType<{ className?: string }>; label: string; value: string }) {
  return (
    <div className="flex items-center gap-3">
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
        <Icon className="h-5 w-5" />
      </div>
      <div className="flex-1">
        <dt className="text-xs text-muted-foreground">{label}</dt>
        <dd className="font-semibold">{value}</dd>
      </div>
    </div>
  );
}
