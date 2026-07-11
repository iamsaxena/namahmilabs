"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import Lenis from "@studio-freight/lenis";
import {
  Activity,
  ArrowRight,
  Atom,
  BrainCircuit,
  Building2,
  Check,
  ChevronDown,
  Clock3,
  Cloud,
  Code2,
  Cpu,
  GraduationCap,
  HeartPulse,
  Lightbulb,
  Microscope,
  Network,
  Quote,
  Rocket,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  Target,
  Video,
  Waves,
  Zap,
} from "lucide-react";
import { motion, useMotionValue, useScroll, useSpring, useTransform } from "framer-motion";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const fadeUp = {
  hidden: { opacity: 0, y: 34, filter: "blur(10px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)" },
};

const lifecycle = [
  "Research",
  "Discovery",
  "Prototype",
  "Validate",
  "Engineer",
  "Launch",
  "Scale",
  "Learn",
];

const researchAreas = [
  ["Artificial Intelligence", BrainCircuit],
  ["Machine Learning", Cpu],
  ["Large Language Models", Network],
  ["Healthcare AI", HeartPulse],
  ["Bioinformatics", Microscope],
  ["Education Technology", GraduationCap],
  ["Enterprise AI", Building2],
  ["Creator Economy", Video],
  ["Automation", Zap],
  ["Cloud Systems", Cloud],
  ["Future of Work", Activity],
  ["Original Innovation", Lightbulb],
] as const;

const ventures = [
  {
    name: "Namahmi School of Skills",
    icon: GraduationCap,
    summary:
      "Preparing students, professionals and enterprises for the AI era through product, leadership and transformation programs.",
    tags: ["AI Product Management", "Corporate Training", "Leadership", "EdTech"],
    className: "md:col-span-2",
    nameClassName: "text-secondary",
    href: "https://www.nsos.live",
  },
  {
    name: "Namahmi MedTech",
    icon: Stethoscope,
    summary:
      "Advancing bioinformatics, genomics, precision medicine and AI-assisted healthcare research.",
    tags: ["Genomics", "Healthcare AI", "Precision Medicine"],
    className: "",
    nameClassName: "text-success",
  },
  {
    name: "Namahmi Studios",
    icon: Video,
    summary:
      "Building creator infrastructure, podcast ecosystems and AI-powered production workflows.",
    tags: ["Creator Economy", "Studio Infrastructure", "Media Tech"],
    className: "",
    nameClassName: "text-accent",
  },
  {
    name: "Vestigia Technologies",
    icon: Code2,
    summary:
      "Engineering SaaS platforms, cloud infrastructure, enterprise applications and AI solutions.",
    tags: ["Software", "Cloud", "Enterprise Systems", "AI Solutions"],
    className: "md:col-span-2",
    nameClassName: "text-primary",
    href: "https://www.vestigiatechnologies.com",
  },
] as const;

const pillars = [
  ["Research", "Every idea starts with curiosity, evidence and disciplined exploration.", Microscope],
  ["Innovation", "We turn overlooked questions into differentiated products and ventures.", Sparkles],
  ["Engineering", "Systems are built for precision, resilience and long-term scale.", Cpu],
  ["Execution", "Concepts move through validation, launch, feedback and continuous learning.", Rocket],
] as const;

const values = [
  ["Purpose Before Popularity", Target],
  ["Research First", Microscope],
  ["Innovation Without Limits", Sparkles],
  ["Human-Centered AI", HeartPulse],
  ["Engineering Excellence", ShieldCheck],
  ["Integrity", Check],
  ["Continuous Learning", Waves],
] as const;

const roadmap = [
  ["2025", "AI-first research reset"],
  ["2027", "Domain products across education and enterprise"],
  ["2029", "Healthcare research and creator infrastructure scale"],
  ["2032", "Global venture collaborations"],
  ["2035", "Deep tech IP and responsible AI platforms"],
] as const;

const contactItems = [
  { label: "Phone", value: "+91 70757 29458" },
  { label: "Email", value: "hello@namahmilabs.com" },
  {
    label: "LinkedIn",
    value: "Namahmi Labs",
    href: "https://www.linkedin.com/company/namahmi-labs/",
  },
] as const;

function SmoothScroll() {
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.08,
      smoothWheel: true,
    });

    let frame = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      frame = requestAnimationFrame(raf);
    };

    frame = requestAnimationFrame(raf);
    return () => {
      cancelAnimationFrame(frame);
      lenis.destroy();
    };
  }, []);

  return null;
}

function CursorGlow() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  useEffect(() => {
    const move = (event: PointerEvent) => {
      x.set(event.clientX);
      y.set(event.clientY);
    };
    window.addEventListener("pointermove", move);
    return () => window.removeEventListener("pointermove", move);
  }, [x, y]);

  return (
    <motion.div
      className="pointer-events-none fixed left-0 top-0 z-50 hidden h-72 w-72 rounded-full bg-secondary/10 blur-3xl md:block"
      style={{ x, y, translateX: "-50%", translateY: "-50%" }}
    />
  );
}

function RealtimeClock() {
  const [time, setTime] = useState({ hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const formatter = new Intl.DateTimeFormat("en-IN", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
      timeZone: "Asia/Kolkata",
    });

    const tick = () => {
      const parts = formatter.formatToParts(new Date());
      const value = (type: string) => Number(parts.find((part) => part.type === type)?.value ?? 0);
      setTime({
        hours: value("hour") % 12,
        minutes: value("minute"),
        seconds: value("second"),
      });
    };

    tick();
    const timer = window.setInterval(tick, 1000);

    return () => window.clearInterval(timer);
  }, []);

  const hourRotation = time.hours * 30 + time.minutes * 0.5;
  const minuteRotation = time.minutes * 6 + time.seconds * 0.1;
  const secondRotation = time.seconds * 6;

  return (
    <div className="absolute inset-[9%] rounded-full border border-secondary/30 bg-background/20 shadow-[0_0_42px_rgba(6,182,212,0.24),inset_0_0_34px_rgba(139,92,246,0.16)] backdrop-blur-[2px]">
      <div className="absolute inset-5 rounded-full border border-white/10" />
      <Clock3 className="absolute left-1/2 top-5 h-5 w-5 -translate-x-1/2 text-secondary/80" />
      {Array.from({ length: 12 }).map((_, index) => (
        <span
          key={index}
          className="absolute left-1/2 top-1/2 h-3 w-px origin-[50%_160px] bg-white/40"
          style={{ transform: `translate(-50%, -160px) rotate(${index * 30}deg)` }}
        />
      ))}
      <span
        className="absolute left-1/2 top-1/2 h-[28%] w-1.5 origin-bottom rounded-full bg-white shadow-[0_0_16px_rgba(255,255,255,0.6)]"
        style={{ transform: `translate(-50%, -100%) rotate(${hourRotation}deg)` }}
      />
      <span
        className="absolute left-1/2 top-1/2 h-[36%] w-1 origin-bottom rounded-full bg-secondary shadow-[0_0_18px_rgba(6,182,212,0.75)]"
        style={{ transform: `translate(-50%, -100%) rotate(${minuteRotation}deg)` }}
      />
      <span
        className="absolute left-1/2 top-1/2 h-[39%] w-0.5 origin-bottom rounded-full bg-accent transition-transform duration-500 ease-linear shadow-[0_0_16px_rgba(139,92,246,0.8)]"
        style={{ transform: `translate(-50%, -100%) rotate(${secondRotation}deg)` }}
      />
      <span className="absolute left-1/2 top-1/2 h-3.5 w-3.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white shadow-[0_0_16px_rgba(255,255,255,0.9)]" />
      <span className="absolute bottom-8 left-1/2 -translate-x-1/2 font-mono text-[10px] font-semibold tracking-[0.24em] text-secondary">
        IST
      </span>
    </div>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.65 }}
      className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 font-mono text-xs uppercase tracking-[0.24em] text-secondary"
    >
      <Sparkles className="h-3.5 w-3.5" />
      {children}
    </motion.div>
  );
}

function SectionTitle({
  label,
  title,
  copy,
  centered = false,
}: {
  label: string;
  title: string;
  copy?: string;
  centered?: boolean;
}) {
  return (
    <div className={cn("mb-12 max-w-3xl", centered && "mx-auto text-center")}>
      <SectionLabel>{label}</SectionLabel>
      <motion.h2
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, delay: 0.08 }}
        className="font-heading text-4xl font-semibold leading-tight text-white md:text-6xl"
      >
        {title}
      </motion.h2>
      {copy ? (
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, delay: 0.16 }}
          className="mt-5 text-base leading-8 text-muted md:text-lg"
        >
          {copy}
        </motion.p>
      ) : null}
    </div>
  );
}

function OrbitalCore() {
  const layers = useMemo(() => [0, 1, 2], []);
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[520px]">
      <motion.div
        className="absolute inset-[16%] rounded-full border border-secondary/30 bg-secondary/10 blur-sm"
        animate={{ rotate: 360 }}
        transition={{ duration: 34, repeat: Infinity, ease: "linear" }}
      />
      {layers.map((layer) => (
        <motion.div
          key={layer}
          className="absolute rounded-full border border-white/10"
          style={{ inset: `${layer * 13 + 5}%` }}
          animate={{ rotate: layer % 2 ? -360 : 360 }}
          transition={{ duration: 24 + layer * 8, repeat: Infinity, ease: "linear" }}
        >
          <span
            className="absolute left-1/2 top-0 h-3 w-3 rounded-full bg-secondary shadow-[0_0_24px_rgba(6,182,212,0.8)]"
            style={{ transform: "translate(-50%, -50%)" }}
          />
        </motion.div>
      ))}
      <div className="absolute inset-[28%] rounded-full border border-white/10 bg-card/80 shadow-glow backdrop-blur-2xl">
        <div className="absolute inset-4 rounded-full bg-[radial-gradient(circle,rgba(6,182,212,0.45),rgba(139,92,246,0.18)_45%,transparent_70%)]" />
        <div className="absolute inset-0 flex items-center justify-center">
          <Atom className="h-20 w-20 text-white" />
        </div>
      </div>
      <motion.div
        className="absolute left-4 top-10 rounded-2xl border border-white/10 bg-white/[0.06] px-4 py-3 backdrop-blur-xl"
        animate={{ y: [-6, 9, -6] }}
        transition={{ duration: 6, repeat: Infinity }}
      >
        <p className="font-mono text-xs text-secondary">R&D CORE</p>
      </motion.div>
      <motion.div
        className="absolute bottom-14 right-2 rounded-2xl border border-white/10 bg-white/[0.06] px-4 py-3 backdrop-blur-xl"
        animate={{ y: [8, -8, 8] }}
        transition={{ duration: 7, repeat: Infinity }}
      >
        <p className="font-mono text-xs text-accent">AI VENTURES</p>
      </motion.div>
    </div>
  );
}

function KrishnaAura() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.92, filter: "blur(18px)" }}
      whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.9 }}
      className="relative mx-auto aspect-square w-full max-w-[500px]"
      aria-label="Original animated Shri Krishna inspired visual"
    >
      <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_50%_45%,rgba(6,182,212,0.34),rgba(139,92,246,0.18)_42%,transparent_68%)] blur-2xl" />
      <motion.div
        className="absolute inset-[8%] rounded-full border border-secondary/20"
        animate={{ rotate: 360 }}
        transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute inset-[18%] rounded-full border border-accent/20"
        animate={{ rotate: -360 }}
        transition={{ duration: 36, repeat: Infinity, ease: "linear" }}
      />
      <div className="glass absolute inset-[12%] overflow-hidden rounded-full">
        <div className="absolute inset-0 bg-[linear-gradient(145deg,rgba(37,99,235,0.24),rgba(6,182,212,0.14),rgba(139,92,246,0.22))]" />
        <RealtimeClock />
        <motion.div
          className="absolute left-1/2 top-[47%] h-[42%] w-[42%] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_50%_32%,rgba(147,197,253,0.72),rgba(37,99,235,0.54)_52%,rgba(17,24,39,0.62)_78%)] shadow-glow"
          animate={{ y: [-4, 6, -4] }}
          transition={{ duration: 5.8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute left-1/2 top-[24%] h-[38%] w-[30%] -translate-x-1/2 rounded-[48%_48%_42%_42%] bg-[linear-gradient(160deg,rgba(125,211,252,0.78),rgba(37,99,235,0.62)_55%,rgba(30,27,75,0.78))] shadow-violet"
          animate={{ y: [-5, 4, -5] }}
          transition={{ duration: 5.8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute left-[51%] top-[36%] h-2 w-2 -translate-x-1/2 rounded-full bg-white shadow-[0_0_18px_rgba(255,255,255,0.9)]"
          animate={{ opacity: [0.45, 1, 0.45], scale: [0.9, 1.25, 0.9] }}
          transition={{ duration: 2.4, repeat: Infinity }}
        />
        <motion.div
          className="absolute left-[24%] top-[48%] h-3 w-[56%] rotate-[-14deg] rounded-full bg-[linear-gradient(90deg,#f8fafc,#06b6d4,#8b5cf6)] shadow-[0_0_28px_rgba(6,182,212,0.48)]"
          animate={{ rotate: [-16, -10, -16], x: [-3, 4, -3] }}
          transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute left-[48%] top-[13%] h-[30%] w-[11%] origin-bottom rounded-full bg-[linear-gradient(180deg,#22c55e,#06b6d4_42%,#2563eb)] shadow-[0_0_28px_rgba(34,197,94,0.45)]"
          animate={{ rotate: [-11, 9, -11] }}
          transition={{ duration: 5.2, repeat: Infinity, ease: "easeInOut" }}
        >
          <span className="absolute left-1/2 top-4 h-4 w-4 -translate-x-1/2 rounded-full bg-accent shadow-[0_0_22px_rgba(139,92,246,0.9)]" />
        </motion.div>
        {Array.from({ length: 16 }).map((_, index) => (
          <motion.span
            key={index}
            className="absolute h-1.5 w-1.5 rounded-full bg-secondary/80"
            style={{
              left: `${18 + ((index * 17) % 64)}%`,
              top: `${18 + ((index * 29) % 58)}%`,
            }}
            animate={{
              opacity: [0.15, 0.9, 0.15],
              y: [-8, 9, -8],
              scale: [0.75, 1.25, 0.75],
            }}
            transition={{
              duration: 3.2 + (index % 5) * 0.35,
              repeat: Infinity,
              delay: index * 0.12,
            }}
          />
        ))}
      </div>
      <motion.div
        className="absolute bottom-[9%] left-1/2 -translate-x-1/2 rounded-full border border-white/10 bg-background/70 px-5 py-2 font-mono text-xs uppercase tracking-[0.24em] text-secondary shadow-[0_0_28px_rgba(6,182,212,0.22)] backdrop-blur-xl"
        animate={{ y: [0, -7, 0] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <span>Purpose • Intelligence</span>
      </motion.div>
    </motion.div>
  );
}

function Header() {
  return (
    <header className="fixed left-0 right-0 top-0 z-40 border-b border-white/[0.06] bg-background/55 backdrop-blur-2xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
        <a href="#top" className="flex items-center gap-3">
          <span className="relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-full border border-[#D8B665]/70 bg-background shadow-[0_0_28px_rgba(216,182,101,0.28)]">
            <Image
              src="/namahmi-logo.png"
              alt="Namahmi Labs Pvt. Ltd. logo"
              fill
              sizes="48px"
              className="object-cover"
              priority
            />
          </span>
          <span className="font-heading text-lg font-semibold">Namahmi Labs</span>
        </a>
        <div className="hidden items-center gap-7 text-sm text-muted lg:flex">
          <a className="transition hover:text-white" href="#philosophy">Philosophy</a>
          <a className="transition hover:text-white" href="#ventures">Ventures</a>
          <a className="transition hover:text-white" href="#roadmap">Roadmap</a>
          <a className="transition hover:text-white" href="#contact">Contact</a>
          <a className="transition hover:text-white" href="#join-us">Join Us</a>
        </div>
        <Button asChild size="sm" variant="secondary">
          <a href="#ecosystem">
            Ecosystem
            <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
          </a>
        </Button>
      </nav>
    </header>
  );
}

export function MainPage() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 28 });
  const heroY = useTransform(scrollYProgress, [0, 0.28], [0, -120]);

  return (
    <main id="top" className="relative overflow-hidden bg-background">
      <SmoothScroll />
      <CursorGlow />
      <motion.div className="fixed left-0 right-0 top-0 z-50 h-1 origin-left bg-gradient-to-r from-primary via-secondary to-accent" style={{ scaleX }} />
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="grid-bg absolute inset-0 opacity-50" />
        <div className="absolute left-[-12%] top-[-10%] h-[34rem] w-[34rem] animate-aurora rounded-full bg-primary/20 blur-3xl" />
        <div className="absolute right-[-12%] top-[8%] h-[32rem] w-[32rem] animate-aurora rounded-full bg-accent/20 blur-3xl [animation-delay:-7s]" />
      </div>
      <Header />

      <section className="relative z-10 flex min-h-screen items-center px-5 pb-20 pt-32 md:px-8">
        <motion.div
          style={{ y: heroY }}
          className="mx-auto grid w-full max-w-7xl items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]"
        >
          <div>
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-7 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-muted backdrop-blur-xl"
            >
              <span className="flex h-2 w-2 rounded-full bg-success shadow-[0_0_16px_rgba(34,197,94,0.9)]" />
              AI-first Research & Development, reimagined for 2025
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 32, filter: "blur(12px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.9, delay: 0.08 }}
              className="max-w-5xl font-heading text-5xl font-semibold leading-[1.02] text-white md:text-6xl xl:text-7xl 2xl:text-8xl"
            >
              Engineering Tomorrow Through Research, Purpose &{" "}
              <span className="text-gradient">Artificial Intelligence</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.25 }}
              className="mt-8 max-w-3xl text-lg leading-8 text-muted md:text-xl"
            >
              Namahmi Labs Pvt. Ltd. is an AI-first Research & Development company building domain-specific ventures across Education, Healthcare, Media and Enterprise Technology.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.38 }}
              className="mt-10 flex flex-col gap-4 sm:flex-row"
            >
              <Button asChild>
                <a href="#ecosystem">
                  Explore Our Ecosystem
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </a>
              </Button>
              <Button asChild variant="secondary">
                <a href="#philosophy">
                  Our Philosophy
                  <ChevronDown className="h-4 w-4" />
                </a>
              </Button>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.92, filter: "blur(14px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            transition={{ duration: 1, delay: 0.24 }}
            className="relative"
          >
            <OrbitalCore />
          </motion.div>
        </motion.div>
      </section>

      <section id="philosophy" className="relative z-10 px-5 py-28 md:px-8">
        <div className="mx-auto max-w-6xl text-center">
          <SectionLabel>Founder Philosophy</SectionLabel>
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="font-heading text-5xl font-semibold md:text-7xl"
          >
            Believe in Your Purpose
          </motion.h2>
          <div className="mt-12 grid items-center gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <KrishnaAura />
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="glass gradient-border relative overflow-hidden rounded-[2rem] p-8 text-center md:p-14"
            >
              <Quote className="mx-auto mb-8 h-11 w-11 text-secondary" />
              <p className="font-heading text-3xl leading-tight text-white md:text-5xl">
                श्रेयान्स्वधर्मो विगुणः परधर्मात्स्वनुष्ठितात्॥
              </p>
              <p className="mt-5 font-mono text-sm text-secondary md:text-base">
                śreyān sva-dharmo viguṇaḥ para-dharmāt sv-anuṣṭhitāt
              </p>
              <p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-white/90">
                “It is better to pursue your own purpose imperfectly than to perfectly imitate someone else&apos;s.”
              </p>
              <p className="mx-auto mt-8 max-w-4xl text-base leading-8 text-muted md:text-lg">
                We are not building the next OpenAI, Tesla or NVIDIA. We are building Namahmi Labs: a company shaped by curiosity rather than comparison, driven by research instead of trends, and committed to solving real-world challenges through responsible AI.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="about" className="relative z-10 px-5 py-28 md:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            label="About Namahmi Labs"
            title="Founded in 2014. Reborn in 2025. Built for the intelligence era."
            copy="Namahmi Labs evolved into a next-generation innovation ecosystem where scientific research, engineering excellence and entrepreneurial thinking come together to create transformative ventures."
          />
          <div className="grid gap-5 md:grid-cols-3">
            {[
              ["2014", "Founded by Shobhit Shubham Saxena with a long-term belief in research-led innovation."],
              ["2025", "Reimagined as an AI-first R&D company focused on domain-specific venture creation."],
              ["Future", "A platform for bold ideas across education, healthcare, media and enterprise technology."],
            ].map(([year, copy], index) => (
              <motion.div
                key={year}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.65, delay: index * 0.08 }}
                className="glass rounded-3xl p-7"
              >
                <p className="font-mono text-sm text-secondary">{year}</p>
                <p className="mt-5 text-lg leading-8 text-white/85">{copy}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="ecosystem" className="relative z-10 px-5 py-28 md:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            label="Innovation Lifecycle"
            title="A disciplined path from original question to scalable product."
            copy="Every venture moves through a cycle designed to keep curiosity, rigor, engineering and learning in constant motion."
          />
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.035] p-5">
            <div className="absolute left-0 top-1/2 h-px w-full bg-gradient-to-r from-transparent via-secondary/40 to-transparent" />
            <div className="grid gap-4 md:grid-cols-4">
              {lifecycle.map((step, index) => (
                <motion.div
                  key={step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.55, delay: index * 0.05 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="glass relative rounded-2xl p-5"
                >
                  <span className="mb-8 flex h-10 w-10 items-center justify-center rounded-full bg-secondary/15 font-mono text-sm text-secondary">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-heading text-2xl font-semibold">{step}</h3>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 px-5 py-28 md:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            label="Research Areas"
            title="Exploring the spaces where intelligence can become impact."
            centered
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {researchAreas.map(([area, Icon], index) => (
              <motion.div
                key={area}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.55, delay: (index % 4) * 0.05 }}
                whileHover={{ y: -7, rotateX: 3, rotateY: -3 }}
                className="group rounded-2xl border border-white/[0.08] bg-card/70 p-5 transition duration-300 hover:border-secondary/40 hover:shadow-glow"
              >
                <Icon className="mb-7 h-7 w-7 text-secondary transition group-hover:scale-110" />
                <h3 className="font-heading text-xl font-semibold">{area}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="ventures" className="relative z-10 px-5 py-28 md:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            label="Our Ventures"
            title="One research foundation. Multiple domain-focused companies."
            copy="Each venture operates independently while drawing strength from a shared foundation of AI, engineering, research and innovation."
          />
          <div className="grid auto-rows-fr gap-5 md:grid-cols-3">
            {ventures.map((venture, index) => (
              <motion.article
                key={venture.name}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.65, delay: index * 0.08 }}
                whileHover={{ y: -10 }}
                className={cn("glass gradient-border relative overflow-hidden rounded-3xl p-7", venture.className)}
              >
                <venture.icon className="mb-10 h-10 w-10 text-secondary" />
                <h3 className={cn("font-heading text-3xl font-semibold", venture.nameClassName)}>
                  {"href" in venture ? (
                    <a
                      href={venture.href}
                      target="_blank"
                      rel="noreferrer"
                      className="underline-offset-4 transition hover:text-white hover:underline"
                    >
                      {venture.name}
                    </a>
                  ) : (
                    venture.name
                  )}
                </h3>
                <p className="mt-5 max-w-2xl leading-8 text-muted">{venture.summary}</p>
                <div className="mt-8 flex flex-wrap gap-2">
                  {venture.tags.map((tag) => (
                    <span key={tag} className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs text-white/80">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-10 px-5 py-28 md:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionTitle label="Why Namahmi Labs" title="Research depth with venture-speed execution." centered />
          <div className="grid gap-5 md:grid-cols-4">
            {pillars.map(([name, copy, Icon], index) => (
              <motion.div
                key={name}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                className="glass rounded-3xl p-6"
              >
                <Icon className="h-8 w-8 text-secondary" />
                <p className="mt-8 font-heading text-4xl font-semibold">{index + 1}0x</p>
                <h3 className="mt-5 font-heading text-2xl font-semibold">{name}</h3>
                <p className="mt-4 leading-7 text-muted">{copy}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-10 px-5 py-28 md:px-8">
        <div className="mx-auto grid max-w-7xl gap-5 lg:grid-cols-2">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="glass rounded-3xl p-8 md:p-10">
            <SectionLabel>Vision</SectionLabel>
            <h2 className="font-heading text-4xl font-semibold md:text-5xl">To become one of the world&apos;s most trusted AI-powered R&D organizations.</h2>
            <p className="mt-7 leading-8 text-muted">Creating technologies and ventures that improve lives, accelerate industries and inspire the next generation of innovators.</p>
          </motion.div>
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: 0.08 }} className="glass rounded-3xl p-8 md:p-10">
            <SectionLabel>Mission</SectionLabel>
            <div className="space-y-4 text-lg leading-8 text-white/85">
              {[
                "Advance human potential through responsible Artificial Intelligence.",
                "Transform research into real-world products and ventures.",
                "Build domain-specific companies that solve meaningful problems.",
                "Create technology that is intelligent, ethical, scalable and accessible.",
              ].map((item) => (
                <p key={item} className="flex gap-3">
                  <Check className="mt-1 h-5 w-5 flex-none text-success" />
                  {item}
                </p>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="relative z-10 px-5 py-28 md:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionTitle label="Core Values" title="The operating system behind every venture." centered />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-7">
            {values.map(([value, Icon], index) => (
              <motion.div
                key={value}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: index * 0.05 }}
                className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 lg:col-span-1"
              >
                <Icon className="mb-8 h-6 w-6 text-accent" />
                <h3 className="font-heading text-lg font-semibold leading-tight">{value}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="roadmap" className="relative z-10 px-5 py-28 md:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            label="Future Roadmap"
            title="A long horizon for deep technology, responsible AI and global impact."
            copy="Namahmi Labs is built with a patient ambition: original research, durable products and ventures that can compound over the next decade."
          />
          <div className="relative">
            <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-secondary via-accent to-transparent md:left-1/2" />
            <div className="space-y-8">
              {roadmap.map(([year, event], index) => (
                <motion.div
                  key={year}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.06 }}
                  className={cn("relative pl-12 md:w-1/2 md:pl-0", index % 2 ? "md:ml-auto md:pl-12" : "md:pr-12")}
                >
                  <span
                    className={cn(
                      "absolute left-0 top-7 h-8 w-8 rounded-full border border-secondary/60 bg-background shadow-glow md:left-auto",
                      index % 2 ? "md:left-[-1rem]" : "md:right-[-1rem]",
                    )}
                  />
                  <div className="glass rounded-3xl p-7">
                    <p className="font-mono text-sm text-secondary">{year}</p>
                    <h3 className="mt-4 font-heading text-2xl font-semibold">{event}</h3>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="relative z-10 px-5 py-28 md:px-8">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 md:p-12">
          <div className="grid gap-10 md:grid-cols-[1.2fr_0.8fr]">
            <div>
              <SectionLabel>Contact</SectionLabel>
              <h2 className="font-heading text-4xl font-semibold md:text-6xl">Research. Purpose. Innovation. Impact.</h2>
              <p className="mt-6 max-w-2xl leading-8 text-muted">Corporate headquarters: Over the Cloud, because ideas are not limited by geography.</p>
            </div>
            <div className="space-y-4">
              {contactItems.map((item) => (
                <div key={item.label} className="flex items-center justify-between gap-5 rounded-2xl border border-white/10 bg-background/50 p-4">
                  <span className="text-sm text-muted">{item.label}</span>
                  {"href" in item ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noreferrer"
                      className="text-right font-medium text-secondary underline-offset-4 transition hover:text-white hover:underline"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <span className="text-right font-medium text-white">{item.value}</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="join-us" className="relative z-10 px-5 py-28 md:px-8">
        <div className="mx-auto grid max-w-7xl items-center gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] shadow-glow"
          >
            <Image
              src="/namahmi-internship.png"
              alt="Namahmi Labs Summer Internship Program 2026 campaign poster"
              width={1024}
              height={1536}
              className="h-auto w-full"
            />
          </motion.div>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            transition={{ delay: 0.08 }}
            className="glass rounded-[2rem] p-8 md:p-12"
          >
            <SectionLabel>Join Us</SectionLabel>
            <h2 className="font-heading text-4xl font-semibold leading-tight md:text-6xl">
              Summer Internship Program 2026
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">
              Share your updated resume and tell us which team you want to build with.
            </p>
            <Button asChild className="mt-8">
              <a href="mailto:connect@namahmilabs.com?subject=Updated%20Resume%20-%20Namahmi%20Labs">
                Send CV to connect@namahmilabs.com
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </a>
            </Button>
          </motion.div>
        </div>
      </section>

      <footer className="relative z-10 border-t border-white/10 px-5 py-8 md:px-8">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 text-sm text-muted md:flex-row">
          <p>© 2026 Namahmi Labs Pvt. Ltd.</p>
          <p>Building tomorrow, guided by purpose.</p>
        </div>
      </footer>
    </main>
  );
}
