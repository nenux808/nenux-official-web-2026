import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Briefcase,
  Download,
  Globe,
  Layers3,
  Shield,
  Sparkles,
} from "lucide-react";
import { projects } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";
import SectionIntro from "@/components/SectionIntro";

const expertise = [
  "Cyber Security",
  "Network Engineering",
  "Nenux Web Solutions",
  "Nenux Wear",
];

const highlights = [
  {
    title: "Secure Thinking",
    description:
      "Systems shaped by trust, resilience, and practical digital protection.",
    icon: Shield,
  },
  {
    title: "Premium Web",
    description:
      "Modern websites and scalable digital experiences built with clarity and business value.",
    icon: Globe,
  },
  {
    title: "Brand Direction",
    description:
      "Growing Nenux through digital services, identity, and lifestyle-led expansion.",
    icon: Layers3,
  },
];

export default function HomePage() {
  return (
    <main>
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0">
          <Image
            src="/images/hero-banner.jpg"
            alt="Nenux hero banner"
            fill
            priority
            className="object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.16),transparent_24%),radial-gradient(circle_at_top_left,rgba(139,92,246,0.14),transparent_28%),linear-gradient(to_bottom,rgba(3,3,3,0.92),rgba(5,5,5,0.97),rgba(3,3,3,1))]" />
        </div>

        <div className="relative mx-auto grid max-w-7xl gap-12 px-4 pb-16 pt-16 md:px-6 md:pb-24 md:pt-24 lg:grid-cols-[1.05fr_0.95fr] lg:px-10 lg:pt-28">
          <div className="flex flex-col justify-center">
            <div className="mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-cyan-400/20 bg-white/5 px-4 py-2 text-[11px] uppercase tracking-[0.28em] text-zinc-200 backdrop-blur">
              <Sparkles className="h-3.5 w-3.5 text-cyan-300" />
              Cyber Security • Web Systems • Nenux
            </div>

            <p className="text-sm font-medium uppercase tracking-[0.24em] text-cyan-300">
              Chamithu Nenuka
            </p>

            <h1 className="mt-4 max-w-4xl text-4xl font-black leading-[0.95] text-white sm:text-5xl lg:text-7xl">
              Building secure digital
              <br className="hidden sm:block" /> experiences with
              <br className="hidden sm:block" /> clarity and brand value.
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-zinc-300 sm:text-lg">
              Founder of{" "}
              <span className="font-semibold text-white">
                Nenux Web Solutions
              </span>
              , building premium websites and modern digital systems — while
              growing <span className="font-semibold text-white">Nenux Wear</span>{" "}
              as part of a wider future-focused brand vision.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/projects"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 font-semibold text-black transition hover:scale-[1.02]"
              >
                Explore Projects <ArrowRight className="h-4 w-4" />
              </Link>

              <a
                href="/Chamithu-Nenuka-CV.pdf"
                download
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3.5 font-semibold text-white transition hover:bg-white/10"
              >
                <Download className="h-4 w-4" />
                Download CV
              </a>
            </div>

            <div className="mt-5 flex flex-wrap items-center gap-3 text-sm text-zinc-300">
              <div className="rounded-full border border-yellow-400/20 bg-yellow-400/10 px-4 py-2 text-yellow-300">
                ★ 5.0 Client Rating
              </div>
              <div className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2">
                Trusted for premium digital work
              </div>
              <div className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2">
                Client-focused execution
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              {expertise.map((item) => (
                <div
                  key={item}
                  className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-zinc-300 transition hover:border-cyan-400/30 hover:text-white"
                >
                  {item}
                </div>
              ))}
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {highlights.map(({ title, description, icon: Icon }) => (
                <div
                  key={title}
                  className="group rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-white/[0.06] hover:shadow-[0_0_30px_rgba(34,211,238,0.08)]"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10">
                    <Icon className="h-5 w-5 text-cyan-300" />
                  </div>

                  <p className="mt-5 text-xl font-black text-white">{title}</p>
                  <p className="mt-3 text-sm leading-7 text-zinc-400">
                    {description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-4">
            <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] p-5 backdrop-blur-xl">
              <div className="relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-zinc-950/70">
                <div className="relative aspect-[4/4.9] w-full">
                  <Image
                    src="/images/chamithu-profilev8.png"
                    alt="Chamithu Nenuka"
                    fill
                    quality={100}
                    unoptimized
                    className="object-cover object-top"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/70 to-transparent" />
                </div>
              </div>

              <div className="mt-5 flex items-center justify-between gap-4">
                <div>
                  <h2 className="text-xl font-bold text-white">
                    Chamithu Nenuka
                  </h2>
                  <p className="mt-1 text-sm text-zinc-400">
                    Cyber Security • Networks • Web Systems
                  </p>
                  <div className="mt-3 inline-flex items-center rounded-full border border-yellow-400/20 bg-yellow-400/10 px-3 py-1 text-xs font-medium tracking-[0.18em] text-yellow-300">
                    ★ 5.0 CLIENT RATING
                  </div>
                </div>

                <div className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-cyan-300">
                  Available
                </div>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-[2rem] border border-white/10 bg-zinc-950/80 p-5 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/30">
                <p className="text-sm uppercase tracking-[0.2em] text-cyan-300">
                  Nenux Web Solutions
                </p>
                <h3 className="mt-3 text-lg font-bold text-white">
                  Web services company
                </h3>
                <p className="mt-2 text-sm leading-6 text-zinc-400">
                  Premium websites and tailored digital systems for modern
                  businesses.
                </p>
              </div>

              <div className="rounded-[2rem] border border-white/10 bg-zinc-950/80 p-5 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/30">
                <p className="text-sm uppercase tracking-[0.2em] text-cyan-300">
                  Nenux Wear
                </p>
                <h3 className="mt-3 text-lg font-bold text-white">
                  Brand expansion
                </h3>
                <p className="mt-2 text-sm leading-6 text-zinc-400">
                  A lifestyle and streetwear direction built under the Nenux
                  vision.
                </p>
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-5 backdrop-blur-xl">
              <p className="text-sm uppercase tracking-[0.2em] text-cyan-300">
                Positioning
              </p>
              <p className="mt-3 text-sm leading-7 text-zinc-400">
                A portfolio shaped around secure engineering, polished digital
                execution, and the long-term growth of the Nenux ecosystem.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 md:px-6 lg:px-10">
        <SectionIntro
          eyebrow="About"
          title="Where secure systems meet modern digital brand building"
        />

        <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl md:p-8">
            <p className="text-base leading-8 text-zinc-300 md:text-lg">
              I’m Chamithu Nenuka, a Melbourne-based IT student focused on
              <span className="font-semibold text-white"> cyber security</span>,
              <span className="font-semibold text-white">
                {" "}
                network engineering
              </span>
              , and
              <span className="font-semibold text-white">
                {" "}
                premium web systems
              </span>
              . I build digital products that combine technical depth, polished
              design, and practical business value.
            </p>

            <p className="mt-5 text-base leading-8 text-zinc-400">
              Through{" "}
              <span className="font-semibold text-white">
                Nenux Web Solutions
              </span>
              , I create modern websites and custom online systems that are
              designed to feel clean, professional, and future-ready. Beyond
              services, I’m also expanding the Nenux identity through
              <span className="font-semibold text-white"> Nenux Wear</span>, a
              lifestyle and streetwear direction built around creativity, brand
              culture, and long-term growth.
            </p>

            <p className="mt-5 text-base leading-8 text-zinc-400">
              This portfolio represents more than just projects — it reflects a
              broader vision of combining secure engineering, creative
              execution, and brand-building into one evolving ecosystem.
            </p>
          </div>

          <div className="grid gap-4">
            <div className="rounded-[2rem] border border-white/10 bg-zinc-950/80 p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/30">
              <p className="text-sm uppercase tracking-[0.2em] text-cyan-300">
                Nenux Web Solutions
              </p>
              <h3 className="mt-3 text-xl font-bold text-white">
                Web systems with a premium business focus
              </h3>
              <p className="mt-3 text-sm leading-7 text-zinc-400">
                Professional websites, custom digital platforms, and modern
                online experiences built to look sharp and work properly.
              </p>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-zinc-950/80 p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/30">
              <p className="text-sm uppercase tracking-[0.2em] text-cyan-300">
                Nenux Wear
              </p>
              <h3 className="mt-3 text-xl font-bold text-white">
                A lifestyle and streetwear brand direction under Nenux
              </h3>
              <p className="mt-3 text-sm leading-7 text-zinc-400">
                A creative extension of the Nenux identity, combining modern
                style, branding, and long-term vision beyond digital services
                alone.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 md:px-6 lg:px-10">
        <SectionIntro eyebrow="Projects" title="Featured work" />
        <div className="grid gap-6 lg:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>
    </main>
  );
}