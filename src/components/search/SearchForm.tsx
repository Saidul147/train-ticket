import * as React from "react";
import { format } from "date-fns";
import { CalendarIcon, ArrowLeftRight, Search, Sparkles, Train } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { StationCombobox } from "./StationCombobox";
import { TRAIN_CLASSES, useT } from "@/lib/i18n";

const POPULAR: Array<[string, string]> = [
  ["DHAKA", "CHATTOGRAM"],
  ["DHAKA", "SYLHET"],
  ["DHAKA", "COX'S BAZAR"],
  ["DHAKA", "RAJSHAHI"],
  ["DHAKA", "KHULNA"],
];

const CLASS_LABELS: Record<string, string> = {
  AC_B: "AC Berth", AC_S: "AC Seat", SNIGDHA: "Snigdha", F_BERTH: "First Berth",
  F_SEAT: "First Seat", F_CHAIR: "First Chair", S_CHAIR: "Second Chair",
  SHOVAN: "Shovan", SHULOV: "Shulov", AC_CHAIR: "AC Chair",
};

export function SearchForm() {
  const t = useT();
  const [from, setFrom] = React.useState("");
  const [to, setTo] = React.useState("");
  const [date, setDate] = React.useState<Date | undefined>(new Date());
  const [klass, setKlass] = React.useState<string>("");
  const [swapping, setSwapping] = React.useState(false);
  const [dateOpen, setDateOpen] = React.useState(false);

  const swap = () => {
    if (!from && !to) return;
    setSwapping(true);
    setFrom(to);
    setTo(from);
    setTimeout(() => setSwapping(false), 500);
  };

  const valid = from && to && date && klass && from !== to;

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!valid) return;
    const params = new URLSearchParams({
      fromcity: from,
      tocity: to,
      doj: format(date, "dd-MMM-yyyy"),
      class: klass,
    });
    window.open(`/confirm?${params.toString()}`, "_blank", "noopener");
  };

  const pickRoute = (f: string, tt: string) => {
    setFrom(f);
    setTo(tt);
    if (!klass) setKlass("SNIGDHA");
  };

  return (
    <form onSubmit={submit} className="relative group">
      {/* Outer ambient glow */}
      <div className="absolute -inset-1 bg-gradient-hero opacity-20 blur-2xl rounded-[2rem] group-hover:opacity-30 transition-opacity duration-700" />

      <div className="relative rounded-[1.75rem] border border-border/60 bg-card/85 backdrop-blur-2xl shadow-xl-soft overflow-hidden">
        {/* Top accent line */}
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

        {/* Tab-like header */}
        <div className="flex items-center gap-2 px-6 pt-5 pb-1">
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-primary">
            <Train className="h-3.5 w-3.5" />
            One Way
          </div>
        </div>

        <div className="p-5 sm:p-6 pt-3">
          {/* Stations row with integrated swap */}
          <div className="relative rounded-2xl border border-border/70 bg-background/40 overflow-hidden">
            <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-border/60">
              <FieldInline label={t("form.from")}>
                <StationCombobox value={from} onChange={setFrom} placeholder={t("form.from.placeholder")} exclude={to} />
              </FieldInline>
              <FieldInline label={t("form.to")}>
                <StationCombobox value={to} onChange={setTo} placeholder={t("form.to.placeholder")} exclude={from} />
              </FieldInline>
            </div>
            {/* Floating swap button — perfectly centered between fields */}
            <button
              type="button"
              onClick={swap}
              aria-label={t("form.swap")}
              className={cn(
                "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10",
                "h-10 w-10 rounded-full border border-border bg-card shadow-md",
                "flex items-center justify-center text-foreground",
                "hover:bg-primary hover:text-primary-foreground hover:border-primary hover:scale-110",
                "transition-all duration-300",
                "max-md:rotate-90",
                swapping && "animate-swap",
              )}
            >
              <ArrowLeftRight className="h-4 w-4" />
            </button>
          </div>

          {/* Date + Class row */}
          <div className="mt-3 grid gap-3 sm:grid-cols-2">
            <Popover open={dateOpen} onOpenChange={setDateOpen}>
              <PopoverTrigger asChild>
                <button
                  type="button"
                  className={cn(
                    "group/field text-left rounded-2xl border border-border/70 bg-background/40 px-4 py-3 transition-all",
                    "hover:border-primary/40 hover:bg-background/70",
                    dateOpen && "border-primary/50 ring-soft",
                  )}
                >
                  <div className="text-[10px] font-bold uppercase tracking-[0.1em] text-muted-foreground mb-1">
                    {t("form.date")}
                  </div>
                  <div className="flex items-center gap-2">
                    <CalendarIcon className="h-4 w-4 text-primary shrink-0" />
                    <span className="text-sm font-semibold text-foreground truncate">
                      {date ? format(date, "EEE, dd MMM yyyy") : t("form.date.placeholder")}
                    </span>
                  </div>
                </button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={(d) => { setDate(d); setDateOpen(false); }}
                  disabled={(d) => d < new Date(new Date().setHours(0, 0, 0, 0))}
                  initialFocus
                  className="p-3 pointer-events-auto"
                />
              </PopoverContent>
            </Popover>

            <Select value={klass} onValueChange={setKlass}>
              <SelectTrigger
                className={cn(
                  "h-auto items-start text-left rounded-2xl border border-border/70 bg-background/40 px-4 py-3 transition-all",
                  "hover:border-primary/40 hover:bg-background/70 [&>svg]:mt-3",
                  klass && "data-[state=open]:border-primary/50",
                )}
              >
                <div className="flex-1 min-w-0">
                  <div className="text-[10px] font-bold uppercase tracking-[0.1em] text-muted-foreground mb-1">
                    {t("form.class")}
                  </div>
                  <div className="text-sm font-semibold text-foreground truncate">
                    {klass ? CLASS_LABELS[klass] : <span className="text-muted-foreground font-normal">{t("form.class.placeholder")}</span>}
                  </div>
                </div>
              </SelectTrigger>
              <SelectContent className="rounded-xl">
                {TRAIN_CLASSES.map((c) => (
                  <SelectItem key={c} value={c} className="rounded-lg">
                    <span className="font-medium">{CLASS_LABELS[c]}</span>
                    <span className="ml-2 text-xs text-muted-foreground">({c})</span>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Submit */}
          <Button
            type="submit"
            disabled={!valid}
            className="relative mt-4 h-14 w-full rounded-2xl bg-gradient-hero text-base font-semibold text-primary-foreground shadow-glow hover:shadow-xl-soft hover:scale-[1.01] active:scale-[0.99] disabled:opacity-50 disabled:hover:scale-100 disabled:shadow-none transition-all duration-300 overflow-hidden group/btn"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000" />
            <Search className="mr-2 h-5 w-5" />
            <span className="relative">{t("form.search")}</span>
          </Button>

          {/* Popular routes */}
          <div className="mt-5 pt-5 border-t border-border/50">
            <div className="flex items-center gap-1.5 mb-3">
              <Sparkles className="h-3.5 w-3.5 text-primary" />
              <p className="text-[11px] font-bold uppercase tracking-[0.1em] text-muted-foreground">
                {t("form.popular")}
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {POPULAR.map(([f, tt]) => (
                <button
                  key={`${f}-${tt}`}
                  type="button"
                  onClick={() => pickRoute(f, tt)}
                  className="group/chip inline-flex items-center gap-1.5 rounded-full border border-border/80 bg-background/60 px-3.5 py-1.5 text-xs font-medium text-foreground hover:border-primary/40 hover:bg-primary/5 hover:text-primary hover:scale-105 transition-all duration-200"
                >
                  <span>{f}</span>
                  <ArrowLeftRight className="h-2.5 w-2.5 opacity-50 group-hover/chip:opacity-100" />
                  <span>{tt}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}

function FieldInline({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="px-4 py-3">
      <label className="block text-[10px] font-bold uppercase tracking-[0.1em] text-muted-foreground mb-1.5 pl-0.5">
        {label}
      </label>
      <div className="[&_button]:!h-auto [&_button]:!border-0 [&_button]:!bg-transparent [&_button]:!shadow-none [&_button]:!px-0 [&_button]:!ring-0 [&_button]:hover:!bg-transparent">
        {children}
      </div>
    </div>
  );
}
