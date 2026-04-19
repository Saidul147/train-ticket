import * as React from "react";
import { useLocation } from "@tanstack/react-router";

export type Locale = "en" | "bn";

type Dict = Record<string, string>;

const en: Dict = {
  "site.name": "BD Train Ticket",
  "site.tagline": "Bangladesh Railway ticket search, made simple",
  "nav.home": "Home",
  "nav.lang": "বাংলা",
  "hero.title": "Search Bangladesh Railway tickets",
  "hero.subtitle": "Find trains across Bangladesh. We help you search — booking happens on the official eticket.railway.gov.bd portal.",
  "form.from": "From",
  "form.to": "To",
  "form.from.placeholder": "Departure station",
  "form.to.placeholder": "Destination station",
  "form.date": "Date of journey",
  "form.date.placeholder": "Pick a date",
  "form.class": "Class",
  "form.class.placeholder": "Select class",
  "form.swap": "Swap stations",
  "form.search": "Search trains",
  "form.popular": "Popular routes",
  "confirm.title": "Confirm your search",
  "confirm.summary": "Trip summary",
  "confirm.from": "From",
  "confirm.to": "To",
  "confirm.date": "Date",
  "confirm.class": "Class",
  "confirm.continue": "Proceed to booking",
  "confirm.notice": "You must be logged in to your Bangladesh Railway account to complete the booking. If you don't have an account, please register first on the official portal.",
  "confirm.back": "Back to search",
  "confirm.invalid": "Invalid search parameters. Please go back and try again.",
  "footer.about": "About",
  "footer.disclaimer": "Unofficial helper site. Booking on eticket.railway.gov.bd.",
  "footer.copy": "© {year} BD Train Ticket",
  "seo.title": "BD Train Ticket — Bangladesh Railway online ticket search 2026",
  "seo.desc": "Search Bangladesh Railway train tickets online. Fast station autocomplete, all classes (AC, Snigdha, Shovan), and a one-click handoff to the official eticket.railway.gov.bd portal.",
};

const bn: Dict = {
  "site.name": "বিডি ট্রেন টিকেট",
  "site.tagline": "বাংলাদেশ রেলওয়ে টিকেট অনুসন্ধান, সহজভাবে",
  "nav.home": "হোম",
  "nav.lang": "English",
  "hero.title": "বাংলাদেশ রেলওয়ে টিকেট খুঁজুন",
  "hero.subtitle": "সারা বাংলাদেশের ট্রেন খুঁজুন। আমরা শুধু অনুসন্ধানে সাহায্য করি — বুকিং সম্পন্ন হয় সরকারি eticket.railway.gov.bd পোর্টালে।",
  "form.from": "যেখান থেকে",
  "form.to": "যেখানে",
  "form.from.placeholder": "ছাড়ার স্টেশন",
  "form.to.placeholder": "গন্তব্য স্টেশন",
  "form.date": "যাত্রার তারিখ",
  "form.date.placeholder": "তারিখ নির্বাচন করুন",
  "form.class": "শ্রেণি",
  "form.class.placeholder": "শ্রেণি নির্বাচন করুন",
  "form.swap": "স্টেশন বদল",
  "form.search": "ট্রেন খুঁজুন",
  "form.popular": "জনপ্রিয় রুট",
  "confirm.title": "আপনার অনুসন্ধান নিশ্চিত করুন",
  "confirm.summary": "যাত্রার সারসংক্ষেপ",
  "confirm.from": "যেখান থেকে",
  "confirm.to": "যেখানে",
  "confirm.date": "তারিখ",
  "confirm.class": "শ্রেণি",
  "confirm.continue": "বুকিং-এ এগিয়ে যান",
  "confirm.notice": "বুকিং সম্পন্ন করতে আপনাকে অবশ্যই বাংলাদেশ রেলওয়ে অ্যাকাউন্টে লগইন করা থাকতে হবে। অ্যাকাউন্ট না থাকলে প্রথমে অফিসিয়াল পোর্টালে রেজিস্টার করুন।",
  "confirm.back": "অনুসন্ধানে ফিরুন",
  "confirm.invalid": "অবৈধ অনুসন্ধান প্যারামিটার। অনুগ্রহ করে ফিরে গিয়ে আবার চেষ্টা করুন।",
  "footer.about": "সম্পর্কে",
  "footer.disclaimer": "এটি একটি অনানুষ্ঠানিক সহায়ক সাইট। বুকিং eticket.railway.gov.bd এ।",
  "footer.copy": "© {year} বিডি ট্রেন টিকেট",
  "seo.title": "বিডি ট্রেন টিকেট — বাংলাদেশ রেলওয়ে অনলাইন টিকেট ২০২৬",
  "seo.desc": "অনলাইনে বাংলাদেশ রেলওয়ে ট্রেন টিকেট খুঁজুন। দ্রুত স্টেশন অটোকমপ্লিট, সব শ্রেণি (AC, স্নিগ্ধা, শোভন), এবং সরাসরি সরকারি eticket.railway.gov.bd পোর্টালে হ্যান্ডঅফ।",
};

const dictionaries: Record<Locale, Dict> = { en, bn };

const LocaleContext = React.createContext<Locale>("en");

export function LocaleProvider({ locale, children }: { locale: Locale; children: React.ReactNode }) {
  React.useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.lang = locale;
    }
  }, [locale]);
  return <LocaleContext.Provider value={locale}>{children}</LocaleContext.Provider>;
}

export function useLocale(): Locale {
  return React.useContext(LocaleContext);
}

export function useLocaleFromPath(): Locale {
  const loc = useLocation();
  return loc.pathname.startsWith("/bn") ? "bn" : "en";
}

export function useT() {
  const locale = useLocale();
  return React.useCallback(
    (key: string, vars?: Record<string, string | number>) => {
      let s = dictionaries[locale][key] ?? dictionaries.en[key] ?? key;
      if (vars) {
        for (const k of Object.keys(vars)) {
          s = s.replace(`{${k}}`, String(vars[k]));
        }
      }
      return s;
    },
    [locale],
  );
}

export function buildLocalePath(locale: Locale, path: string): string {
  const clean = path.startsWith("/") ? path : `/${path}`;
  if (locale === "bn") {
    if (clean === "/") return "/bn";
    return `/bn${clean}`;
  }
  return clean;
}

export const SITE_ORIGIN = "https://bangladeshrailway.online";

export function makeHomeHead(locale: Locale) {
  const title = dictionaries[locale]["seo.title"];
  const desc = dictionaries[locale]["seo.desc"];
  const canonical = locale === "bn" ? `${SITE_ORIGIN}/bn` : `${SITE_ORIGIN}/`;
  return {
    meta: [
      { title },
      { name: "description", content: desc },
      { property: "og:title", content: title },
      { property: "og:description", content: desc },
      { property: "og:type", content: "website" },
      { property: "og:url", content: canonical },
      { property: "og:locale", content: locale === "bn" ? "bn_BD" : "en_US" },
      { property: "og:locale:alternate", content: locale === "bn" ? "en_US" : "bn_BD" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: desc },
    ],
    links: [
      { rel: "canonical", href: canonical },
      { rel: "alternate", hrefLang: "en", href: `${SITE_ORIGIN}/` },
      { rel: "alternate", hrefLang: "bn", href: `${SITE_ORIGIN}/bn` },
      { rel: "alternate", hrefLang: "x-default", href: `${SITE_ORIGIN}/` },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" as const },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Hind+Siliguri:wght@400;500;600;700&display=swap",
      },
    ],
  };
}

export const TRAIN_CLASSES = [
  "AC_B", "AC_S", "SNIGDHA", "F_BERTH", "F_SEAT", "F_CHAIR",
  "S_CHAIR", "SHOVAN", "SHULOV", "AC_CHAIR",
] as const;

export type TrainClass = typeof TRAIN_CLASSES[number];
