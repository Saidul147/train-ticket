import { j as jsxRuntimeExports } from "./index.mjs";
import { u as useT, R as Route$2, L as Link, T as TramFront, c as createLucideIcon } from "./router-BjamBj6m.mjs";
import { M as MapPin, B as Button } from "./button-5i5LSxXz.mjs";
import "node:events";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
const __iconNode$3 = [
  ["path", { d: "m12 19-7-7 7-7", key: "1l729n" }],
  ["path", { d: "M19 12H5", key: "x3x0zl" }]
];
const ArrowLeft = createLucideIcon("arrow-left", __iconNode$3);
const __iconNode$2 = [
  ["path", { d: "M8 2v4", key: "1cmpym" }],
  ["path", { d: "M16 2v4", key: "4m81vk" }],
  ["rect", { width: "18", height: "18", x: "3", y: "4", rx: "2", key: "1hopcy" }],
  ["path", { d: "M3 10h18", key: "8toen8" }],
  ["path", { d: "M8 14h.01", key: "6423bh" }],
  ["path", { d: "M12 14h.01", key: "1etili" }],
  ["path", { d: "M16 14h.01", key: "1gbofw" }],
  ["path", { d: "M8 18h.01", key: "lrp35t" }],
  ["path", { d: "M12 18h.01", key: "mhygvu" }],
  ["path", { d: "M16 18h.01", key: "kzsmim" }]
];
const CalendarDays = createLucideIcon("calendar-days", __iconNode$2);
const __iconNode$1 = [
  ["path", { d: "M15 3h6v6", key: "1q9fwt" }],
  ["path", { d: "M10 14 21 3", key: "gplh6r" }],
  ["path", { d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6", key: "a6xqqp" }]
];
const ExternalLink = createLucideIcon("external-link", __iconNode$1);
const __iconNode = [
  [
    "path",
    {
      d: "M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z",
      key: "vktsd0"
    }
  ],
  ["circle", { cx: "7.5", cy: "7.5", r: ".5", fill: "currentColor", key: "kqv944" }]
];
const Tag = createLucideIcon("tag", __iconNode);
function ConfirmPage() {
  const t = useT();
  const {
    fromcity,
    tocity,
    doj,
    class: klass
  } = Route$2.useSearch();
  const valid = fromcity && tocity && doj;
  const officialUrl = `https://eticket.railway.gov.bd/booking/train/search?fromcity=${encodeURIComponent(fromcity)}&tocity=${encodeURIComponent(tocity)}&doj=${encodeURIComponent(doj)}&class=${encodeURIComponent(klass)}`;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "mx-auto max-w-2xl px-4 py-16", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/", className: "inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground mb-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "h-4 w-4" }),
      t("confirm.back")
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-4xl font-bold tracking-tight mb-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient", children: t("confirm.title") }) }),
    !valid ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 rounded-2xl border border-destructive/30 bg-destructive/5 p-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-destructive font-medium", children: t("confirm.invalid") }) }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 rounded-3xl border border-border bg-gradient-card p-6 shadow-elegant", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-4", children: t("confirm.summary") }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("dl", { className: "space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { icon: MapPin, label: t("confirm.from"), value: fromcity }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { icon: MapPin, label: t("confirm.to"), value: tocity }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { icon: CalendarDays, label: t("confirm.date"), value: doj }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { icon: Tag, label: t("confirm.class"), value: klass })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: officialUrl, target: "_blank", rel: "noopener noreferrer", className: "block mt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { className: "h-14 w-full rounded-xl bg-gradient-hero text-base font-semibold text-primary-foreground shadow-glow hover:opacity-95", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(TramFront, { className: "mr-2 h-5 w-5" }),
        t("confirm.continue"),
        /* @__PURE__ */ jsxRuntimeExports.jsx(ExternalLink, { className: "ml-2 h-4 w-4" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-sm text-muted-foreground leading-relaxed text-center", children: t("confirm.notice") })
    ] })
  ] });
}
function Row({
  icon: Icon,
  label,
  value
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-5 w-5" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("dt", { className: "text-xs text-muted-foreground", children: label }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("dd", { className: "font-semibold", children: value })
    ] })
  ] });
}
export {
  ConfirmPage as component
};
