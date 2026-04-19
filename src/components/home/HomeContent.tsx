import { CheckCircle2, Smartphone, ShieldCheck, Clock, CreditCard, Train } from "lucide-react";
import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from "@/components/ui/accordion";
import { useLocale } from "@/lib/i18n";

const COPY = {
  en: {
    intro: "Booking Bangladesh Railway tickets online is easier than ever. Use our fast search to find the right train, date, and class — then complete your purchase securely on the official Bangladesh Railway eticket portal. We support all intercity routes including Dhaka, Chattogram, Sylhet, Khulna, Rajshahi, and Cox's Bazar.",
    howTitle: "How to book a train ticket in 3 steps",
    steps: [
      { t: "Search your route", d: "Enter your origin, destination, journey date, and preferred class." },
      { t: "Review & continue", d: "Confirm your trip details, then continue to the official Bangladesh Railway portal." },
      { t: "Pay & receive ticket", d: "Pay with bKash, Nagad, Rocket, or card. Your e-ticket arrives instantly." },
    ],
    benefitsTitle: "Why use BD Train Ticket",
    benefits: [
      { i: Clock, t: "Fast search", d: "Find trains in seconds with smart station autocomplete." },
      { i: ShieldCheck, t: "Official handoff", d: "Booking happens on eticket.railway.gov.bd — fully secure." },
      { i: Smartphone, t: "Mobile-friendly", d: "Works perfectly on every phone, tablet, and desktop." },
      { i: CreditCard, t: "All payment methods", d: "bKash, Nagad, Rocket, Visa, MasterCard supported on the portal." },
    ],
    classesTitle: "Train classes explained",
    classes: [
      { t: "AC_B", d: "AC Berth — air-conditioned sleeping berth, the most premium overnight option." },
      { t: "SNIGDHA", d: "AC Chair — comfortable air-conditioned reclining chair." },
      { t: "S_CHAIR", d: "Second Chair — the most popular non-AC seat with good comfort." },
      { t: "SHOVAN", d: "Shovan — economical non-AC seating for short and medium trips." },
      { t: "F_BERTH", d: "First Berth — non-AC sleeping berth for overnight journeys." },
      { t: "AC_CHAIR", d: "AC Chair — air-conditioned standard chair." },
    ],
    fareTitle: "Bangladesh Railway fare table 2026 (from Dhaka)",
    fareCols: ["Route", "Shovan", "S_Chair", "Snigdha", "AC_S"],
    fares: [
      ["Dhaka → Chattogram", "৳ 405", "৳ 485", "৳ 805", "৳ 966"],
      ["Dhaka → Sylhet", "৳ 320", "৳ 375", "৳ 720", "৳ 863"],
      ["Dhaka → Khulna", "৳ 390", "৳ 465", "৳ 890", "৳ 1066"],
      ["Dhaka → Rajshahi", "৳ 340", "৳ 405", "৳ 776", "৳ 932"],
    ],
    payTitle: "Accepted payment methods",
    pays: ["bKash", "Nagad", "Rocket", "Visa", "MasterCard"],
    faqTitle: "Frequently asked questions",
    faqs: [
      { q: "Is BD Train Ticket the official Bangladesh Railway website?", a: "No. We are an unofficial helper that makes searching faster. All bookings are completed on the official eticket.railway.gov.bd portal operated by Bangladesh Railway." },
      { q: "How early can I book a train ticket?", a: "Bangladesh Railway opens advance booking 10 days before the journey date for most routes." },
      { q: "Can I cancel my ticket?", a: "Yes, refunds are processed by Bangladesh Railway according to their cancellation policy. Cancel via the official portal." },
      { q: "Which payment methods are accepted?", a: "bKash, Nagad, Rocket, Visa, and MasterCard are all accepted on the official portal." },
      { q: "Do I need to print the ticket?", a: "No, your e-ticket on your phone (with NID match) is sufficient for boarding." },
      { q: "How do I book Eid special train tickets?", a: "Eid special tickets typically open 7-10 days before each Eid. Book early — they sell out fast." },
      { q: "What is the difference between Snigdha and AC_S?", a: "Snigdha is an AC chair coach, while AC_S refers to AC seat — both are air-conditioned but seating layouts differ." },
      { q: "Can I book tickets for foreign visitors?", a: "Yes, but the passport number must be entered correctly during booking on the official portal." },
    ],
    eidTitle: "Eid travel tips",
    eidBody: "During Eid-ul-Fitr and Eid-ul-Azha, demand for Bangladesh Railway tickets skyrockets. Set a reminder for the booking opening time, prepare your NID number in advance, and have your payment app ready. Trains to Chattogram, Sylhet, Rajshahi, and Khulna fill up within minutes.",
    appTitle: "Rail Sheba mobile app",
    appBody: "Bangladesh Railway also offers the official Rail Sheba app on Android and iOS. You can use either Rail Sheba or eticket.railway.gov.bd — both share the same booking system and account.",
  },
  bn: {
    intro: "বাংলাদেশ রেলওয়ের অনলাইন টিকেট বুকিং এখন সবচেয়ে সহজ। আমাদের দ্রুত অনুসন্ধান ব্যবহার করে আপনার ট্রেন, তারিখ ও শ্রেণি খুঁজুন — তারপর সরকারি বাংলাদেশ রেলওয়ে eticket পোর্টালে নিরাপদে বুকিং সম্পন্ন করুন। ঢাকা, চট্টগ্রাম, সিলেট, খুলনা, রাজশাহী, কক্সবাজার সহ সব আন্তঃনগর রুট সাপোর্টেড।",
    howTitle: "৩ ধাপে ট্রেন টিকেট বুক করুন",
    steps: [
      { t: "রুট খুঁজুন", d: "ছাড়ার স্টেশন, গন্তব্য, তারিখ এবং পছন্দের শ্রেণি লিখুন।" },
      { t: "চেক করে এগিয়ে যান", d: "যাত্রার বিবরণ নিশ্চিত করে সরকারি বাংলাদেশ রেলওয়ে পোর্টালে যান।" },
      { t: "পেমেন্ট ও টিকেট", d: "বিকাশ, নগদ, রকেট বা কার্ডে পেমেন্ট করুন। ই-টিকেট সাথে সাথে পেয়ে যাবেন।" },
    ],
    benefitsTitle: "কেন বিডি ট্রেন টিকেট ব্যবহার করবেন",
    benefits: [
      { i: Clock, t: "দ্রুত অনুসন্ধান", d: "স্মার্ট অটোকমপ্লিট দিয়ে সেকেন্ডেই ট্রেন খুঁজুন।" },
      { i: ShieldCheck, t: "সরকারি হ্যান্ডঅফ", d: "বুকিং হয় eticket.railway.gov.bd এ — সম্পূর্ণ নিরাপদ।" },
      { i: Smartphone, t: "মোবাইল-বান্ধব", d: "প্রতিটি ফোন, ট্যাবলেট ও ডেস্কটপে দারুণ কাজ করে।" },
      { i: CreditCard, t: "সব পেমেন্ট মাধ্যম", d: "বিকাশ, নগদ, রকেট, ভিসা, মাস্টারকার্ড সাপোর্টেড।" },
    ],
    classesTitle: "ট্রেন শ্রেণি পরিচিতি",
    classes: [
      { t: "AC_B", d: "AC বার্থ — শীতাতপ নিয়ন্ত্রিত স্লিপিং বার্থ, সবচেয়ে প্রিমিয়াম অপশন।" },
      { t: "SNIGDHA", d: "AC চেয়ার — আরামদায়ক শীতাতপ নিয়ন্ত্রিত রিক্লাইনিং চেয়ার।" },
      { t: "S_CHAIR", d: "সেকেন্ড চেয়ার — সবচেয়ে জনপ্রিয় নন-AC সিট।" },
      { t: "SHOVAN", d: "শোভন — সাশ্রয়ী নন-AC সিটিং, ছোট-মাঝারি যাত্রার জন্য।" },
      { t: "F_BERTH", d: "ফার্স্ট বার্থ — নন-AC স্লিপিং বার্থ রাতের যাত্রার জন্য।" },
      { t: "AC_CHAIR", d: "AC চেয়ার — শীতাতপ নিয়ন্ত্রিত স্ট্যান্ডার্ড চেয়ার।" },
    ],
    fareTitle: "বাংলাদেশ রেলওয়ে ভাড়া তালিকা ২০২৬ (ঢাকা থেকে)",
    fareCols: ["রুট", "শোভন", "এস_চেয়ার", "স্নিগ্ধা", "AC_S"],
    fares: [
      ["ঢাকা → চট্টগ্রাম", "৳ ৪০৫", "৳ ৪৮৫", "৳ ৮০৫", "৳ ৯৬৬"],
      ["ঢাকা → সিলেট", "৳ ৩২০", "৳ ৩৭৫", "৳ ৭২০", "৳ ৮৬৩"],
      ["ঢাকা → খুলনা", "৳ ৩৯০", "৳ ৪৬৫", "৳ ৮৯০", "৳ ১০৬৬"],
      ["ঢাকা → রাজশাহী", "৳ ৩৪০", "৳ ৪০৫", "৳ ৭৭৬", "৳ ৯৩২"],
    ],
    payTitle: "গৃহীত পেমেন্ট মাধ্যম",
    pays: ["বিকাশ", "নগদ", "রকেট", "ভিসা", "মাস্টারকার্ড"],
    faqTitle: "প্রায়শই জিজ্ঞাসিত প্রশ্ন",
    faqs: [
      { q: "বিডি ট্রেন টিকেট কি বাংলাদেশ রেলওয়ের সরকারি ওয়েবসাইট?", a: "না। আমরা একটি অনানুষ্ঠানিক সহায়ক যা অনুসন্ধানকে দ্রুত করে। সব বুকিং সরকারি eticket.railway.gov.bd পোর্টালে সম্পন্ন হয়।" },
      { q: "কতদিন আগে টিকেট বুক করা যায়?", a: "বাংলাদেশ রেলওয়ে যাত্রার ১০ দিন আগে অগ্রিম বুকিং খুলে।" },
      { q: "টিকেট বাতিল করা যাবে?", a: "হ্যাঁ, বাংলাদেশ রেলওয়ের নীতি অনুযায়ী রিফান্ড দেওয়া হয়। সরকারি পোর্টালে গিয়ে বাতিল করুন।" },
      { q: "কোন কোন পেমেন্ট মাধ্যম গৃহীত হয়?", a: "বিকাশ, নগদ, রকেট, ভিসা, এবং মাস্টারকার্ড সরকারি পোর্টালে গৃহীত হয়।" },
      { q: "টিকেট কি প্রিন্ট করতে হবে?", a: "না, ফোনে থাকা ই-টিকেট (NID মিল সহ) যথেষ্ট।" },
      { q: "ঈদ স্পেশাল টিকেট কীভাবে বুক করব?", a: "ঈদ স্পেশাল টিকেট সাধারণত ঈদের ৭-১০ দিন আগে খুলে। দ্রুত বুক করুন — শেষ হয়ে যায় মুহূর্তেই।" },
      { q: "স্নিগ্ধা ও AC_S এর মধ্যে পার্থক্য কী?", a: "স্নিগ্ধা একটি AC চেয়ার কোচ, এবং AC_S বলতে AC সিট বোঝায় — দুটোই শীতাতপ নিয়ন্ত্রিত তবে সিটিং আলাদা।" },
      { q: "বিদেশি যাত্রীদের জন্য টিকেট বুক করা যাবে?", a: "হ্যাঁ, তবে বুকিংয়ের সময় পাসপোর্ট নম্বর সঠিকভাবে দিতে হবে।" },
    ],
    eidTitle: "ঈদ যাত্রার টিপস",
    eidBody: "ঈদুল ফিতর ও ঈদুল আজহার সময় বাংলাদেশ রেলওয়ের টিকেটের চাহিদা আকাশছোঁয়া। বুকিং খোলার সময়ের জন্য রিমাইন্ডার সেট করুন, NID নম্বর প্রস্তুত রাখুন, এবং পেমেন্ট অ্যাপ চালু রাখুন। চট্টগ্রাম, সিলেট, রাজশাহী, খুলনার ট্রেন কয়েক মিনিটেই শেষ হয়ে যায়।",
    appTitle: "Rail Sheba মোবাইল অ্যাপ",
    appBody: "বাংলাদেশ রেলওয়ের অফিশিয়াল Rail Sheba অ্যাপ Android ও iOS এ পাওয়া যায়। Rail Sheba বা eticket.railway.gov.bd — দুটোই একই বুকিং সিস্টেম ও অ্যাকাউন্ট ব্যবহার করে।",
  },
} as const;

export function HomeContent() {
  const locale = useLocale();
  const c = COPY[locale];

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: c.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  const howJsonLd = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: c.howTitle,
    step: c.steps.map((s, i) => ({
      "@type": "HowToStep",
      position: i + 1,
      name: s.t,
      text: s.d,
    })),
  };

  return (
    <section className="mx-auto max-w-4xl px-4 mt-20 space-y-16">
      <p className="text-lg text-muted-foreground leading-relaxed">{c.intro}</p>

      <div>
        <h2 className="text-3xl font-bold tracking-tight mb-6">{c.howTitle}</h2>
        <ol className="grid gap-4 md:grid-cols-3">
          {c.steps.map((s, i) => (
            <li key={s.t} className="rounded-2xl border border-border bg-card p-6 shadow-soft">
              <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-full bg-gradient-hero text-sm font-bold text-primary-foreground">
                {i + 1}
              </div>
              <h3 className="font-semibold mb-1">{s.t}</h3>
              <p className="text-sm text-muted-foreground">{s.d}</p>
            </li>
          ))}
        </ol>
      </div>

      <div>
        <h2 className="text-3xl font-bold tracking-tight mb-6">{c.benefitsTitle}</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {c.benefits.map((b) => (
            <div key={b.t} className="flex gap-4 rounded-2xl border border-border bg-card p-5 shadow-soft">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <b.i className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-semibold">{b.t}</h3>
                <p className="text-sm text-muted-foreground mt-1">{b.d}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-3xl font-bold tracking-tight mb-6">{c.classesTitle}</h2>
        <div className="grid gap-3 sm:grid-cols-2">
          {c.classes.map((cl) => (
            <div key={cl.t} className="flex gap-3 rounded-xl border border-border bg-card p-4">
              <Train className="h-5 w-5 shrink-0 text-primary mt-0.5" />
              <div>
                <span className="font-mono text-sm font-bold text-primary">{cl.t}</span>
                <p className="text-sm text-muted-foreground mt-0.5">{cl.d}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-3xl font-bold tracking-tight mb-6">{c.fareTitle}</h2>
        <div className="overflow-x-auto rounded-2xl border border-border bg-card shadow-soft">
          <table className="w-full text-sm">
            <thead className="bg-secondary/50">
              <tr>
                {c.fareCols.map((h) => (
                  <th key={h} className="px-4 py-3 text-left font-semibold">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {c.fares.map((row) => (
                <tr key={row[0]} className="border-t border-border">
                  {row.map((cell, i) => (
                    <td key={i} className={i === 0 ? "px-4 py-3 font-medium" : "px-4 py-3 text-muted-foreground"}>
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div>
        <h2 className="text-3xl font-bold tracking-tight mb-6">{c.payTitle}</h2>
        <div className="flex flex-wrap gap-3">
          {c.pays.map((p) => (
            <div key={p} className="flex items-center gap-2 rounded-xl border border-border bg-card px-4 py-2.5 shadow-soft">
              <CheckCircle2 className="h-4 w-4 text-primary" />
              <span className="font-medium">{p}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-2xl border border-accent/20 bg-accent/5 p-6">
        <h2 className="text-2xl font-bold mb-2">{c.eidTitle}</h2>
        <p className="text-muted-foreground leading-relaxed">{c.eidBody}</p>
      </div>

      <div className="rounded-2xl border border-border bg-card p-6 shadow-soft">
        <h2 className="text-2xl font-bold mb-2">{c.appTitle}</h2>
        <p className="text-muted-foreground leading-relaxed">{c.appBody}</p>
      </div>

      <div>
        <h2 className="text-3xl font-bold tracking-tight mb-6">{c.faqTitle}</h2>
        <Accordion type="single" collapsible className="rounded-2xl border border-border bg-card px-4 shadow-soft">
          {c.faqs.map((f, i) => (
            <AccordionItem key={i} value={`item-${i}`}>
              <AccordionTrigger className="text-left font-semibold">{f.q}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howJsonLd) }} />
    </section>
  );
}
