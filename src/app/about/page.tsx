import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Briefcase,
  Globe,
  Layers3,
  Shield,
  Sparkles,
} from "lucide-react";
import SectionIntro from "@/components/SectionIntro";

const focusAreas = [
  "Cyber Security",
  "Network Engineering",
  "Cloud Security",
  "Web Development",
  "System Design",
  "Brand Strategy",
  "UI / UX Thinking",
  "Digital Product Design",
];

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-16 md:px-6 lg:px-10">
      <section className="relative overflow-hidden rounded-[2.25rem] border border-white/10 bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.08),transparent_28%),radial-gradient(circle_at_top_left,rgba(139,92,246,0.08),transparent_28%),linear-gradient(to_bottom,rgba(255,255,255,0.03),rgba(255,255,255,0.02))] p-6 backdrop-blur-xl md:p-8 lg:p-10">
        <SectionIntro
          eyebrow="About"
          title="Chamithu Nenuka"
        />

        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl md:p-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-xs uppercase tracking-[0.2em] text-cyan-300">
              <Sparkles className="h-3.5 w-3.5" />
              Founder • Builder • Future-Focused
            </div>

            <p className="mt-6 text-base leading-8 text-zinc-300 md:text-lg">
              I’m Chamithu Nenuka, a Melbourne-based IT student focused on
              <span className="font-semibold text-white"> cyber security</span>,
              <span className="font-semibold text-white"> network engineering</span>,
              and <span className="font-semibold text-white"> modern web systems</span>.
              My work sits between technical depth and digital creativity, with a
              strong focus on building things that feel polished, practical, and
              genuinely high-value in the real world.
            </p>

            <p className="mt-5 text-base leading-8 text-zinc-400">
              Through <span className="font-semibold text-white">Nenux Web Solutions</span>,
              I’m building websites and custom digital experiences that are designed
              to look premium and perform properly. At the same time, I’m also
              growing <span className="font-semibold text-white">Nenux Wear</span> as a
              lifestyle and streetwear direction under the wider Nenux vision.
            </p>

            <p className="mt-5 text-base leading-8 text-zinc-400">
              For me, this portfolio is more than a collection of projects — it’s a
              reflection of where technical skill, design taste, brand identity, and
              long-term ambition come together.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/projects"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 font-semibold text-black transition hover:scale-[1.02]"
              >
                View Projects <ArrowRight className="h-4 w-4" />
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-6 py-3.5 font-semibold text-white transition hover:bg-white/10"
              >
                Let’s Connect
              </Link>
            </div>
          </div>

          <div className="grid gap-4">
            <div className="rounded-[2rem] border border-white/10 bg-zinc-950/80 p-5 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/30">
              <div className="flex items-center gap-4">
                <div className="relative h-24 w-24 overflow-hidden rounded-[1.5rem] border border-white/10 bg-black">
                  <Image
                    src="/images/about-profile.png"
                    alt="Chamithu Nenuka"
                    fill
                    quality={100}
                    unoptimized
                    className="object-cover object-top"
                  />
                </div>

                <div>
                  <h3 className="text-lg font-bold text-white">
                    Chamithu Nenuka
                  </h3>
                  <p className="mt-1 text-sm text-zinc-400">
                    Cyber Security • Networks • Web Systems
                  </p>
                  <div className="mt-3 inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-cyan-300">
                    Available
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-zinc-950/80 p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/30">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10">
                <Shield className="h-5 w-5 text-cyan-300" />
              </div>
              <h3 className="mt-5 text-xl font-bold text-white">
                Technical Direction
              </h3>
              <p className="mt-3 text-sm leading-7 text-zinc-400">
                Building a path around cyber security, networks, system
                reliability, and digital products with strong foundations.
              </p>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-zinc-950/80 p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/30">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10">
                <Globe className="h-5 w-5 text-cyan-300" />
              </div>
              <h3 className="mt-5 text-xl font-bold text-white">
                Nenux Web Solutions
              </h3>
              <p className="mt-3 text-sm leading-7 text-zinc-400">
                A premium web services direction focused on websites, business
                platforms, and tailored digital systems.
              </p>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-zinc-950/80 p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/30">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10">
                <Layers3 className="h-5 w-5 text-cyan-300" />
              </div>
              <h3 className="mt-5 text-xl font-bold text-white">
                Nenux Wear
              </h3>
              <p className="mt-3 text-sm leading-7 text-zinc-400">
                A creative extension of the Nenux identity through lifestyle,
                branding, and future-oriented streetwear ideas.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-10 grid gap-6 lg:grid-cols-2">
        <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl md:p-8">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10">
            <Briefcase className="h-5 w-5 text-cyan-300" />
          </div>

          <h3 className="mt-5 text-2xl font-black text-white">
            My direction
          </h3>
          <p className="mt-4 leading-8 text-zinc-300">
            I’m building a career that blends technical capability with real-world
            execution — especially in cyber security, networking, modern web systems,
            and digital product thinking.
          </p>
          <p className="mt-4 leading-8 text-zinc-400">
            The long-term goal is to keep expanding both my technical foundation and
            the Nenux ecosystem into something strong, credible, and future-ready.
          </p>
        </div>

        <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl md:p-8">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10">
            <Sparkles className="h-5 w-5 text-cyan-300" />
          </div>

          <h3 className="mt-5 text-2xl font-black text-white">
            What I care about
          </h3>
          <p className="mt-4 leading-8 text-zinc-300">
            Secure thinking, clean execution, premium presentation, and systems that
            feel genuinely valuable — not just visually nice, but actually useful.
          </p>
          <p className="mt-4 leading-8 text-zinc-400">
            I care about digital experiences that are reliable, intentional, and built
            with both technical depth and long-term identity in mind.
          </p>
        </div>
      </section>

      <section className="mt-10 rounded-[2rem] border border-white/10 bg-zinc-950/80 p-6 md:p-8">
        <h3 className="text-2xl font-black text-white">Core focus areas</h3>
        <p className="mt-3 max-w-2xl leading-7 text-zinc-400">
          A mix of technical, strategic, and creative focus areas that shape the way I
          build systems, brands, and digital products.
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          {focusAreas.map((item) => (
            <span
              key={item}
              className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-zinc-200 transition hover:border-cyan-400/30 hover:text-white"
            >
              {item}
            </span>
          ))}
        </div>
      </section>
    </main>
  );
}