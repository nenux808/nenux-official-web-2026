import Link from "next/link";
import {
  ArrowRight,
  Download,
  Mail,
  Send,
  Shield,
  Sparkles,
  Briefcase,
  Layers3,
} from "lucide-react";
import ContactCards from "@/components/ContactCards";
import SectionIntro from "@/components/SectionIntro";

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-16 md:px-6 lg:px-10">
      <section className="relative overflow-hidden rounded-[2.25rem] border border-white/10 bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.08),transparent_28%),radial-gradient(circle_at_top_left,rgba(139,92,246,0.08),transparent_28%),linear-gradient(to_bottom,rgba(255,255,255,0.03),rgba(255,255,255,0.02))] p-6 backdrop-blur-xl md:p-8 lg:p-10">
        <SectionIntro
          eyebrow="Contact"
          title="Let’s build something premium and useful"
        />

        <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <section className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl md:p-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-xs uppercase tracking-[0.2em] text-cyan-300">
              <Sparkles className="h-3.5 w-3.5" />
              Available for selected work
            </div>

            <h2 className="mt-5 text-3xl font-black leading-tight text-white sm:text-4xl">
              Work with Nenux
            </h2>

            <p className="mt-5 max-w-2xl leading-8 text-zinc-300">
              I’m currently focused on cyber security, network engineering, and
              premium digital systems. If you need a clean portfolio site,
              business website, custom platform, or a polished digital concept,
              this is where the conversation starts.
            </p>

            <p className="mt-4 max-w-2xl leading-8 text-zinc-400">
              I’m especially interested in projects that combine strong
              functionality, real business value, modern visual quality, and
              long-term brand potential.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="mailto:chamithu.peiris@outlook.com"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 font-semibold text-black transition duration-300 hover:scale-[1.02]"
              >
                <Mail className="h-4 w-4" />
                Email Me
              </a>

              <Link
                href="/projects"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3.5 font-semibold text-white transition duration-300 hover:bg-white/10"
              >
                <Send className="h-4 w-4" />
                View Projects
              </Link>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              <div className="rounded-[1.5rem] border border-white/10 bg-zinc-950/70 p-5">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10">
                  <Briefcase className="h-5 w-5 text-cyan-300" />
                </div>
                <h3 className="mt-4 text-lg font-bold text-white">
                  Freelance Work
                </h3>
                <p className="mt-2 text-sm leading-6 text-zinc-400">
                  Premium websites, portfolios, and custom digital experiences.
                </p>
              </div>

              <div className="rounded-[1.5rem] border border-white/10 bg-zinc-950/70 p-5">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10">
                  <Shield className="h-5 w-5 text-cyan-300" />
                </div>
                <h3 className="mt-4 text-lg font-bold text-white">
                  Cyber / Systems
                </h3>
                <p className="mt-2 text-sm leading-6 text-zinc-400">
                  Opportunities in security, systems thinking, and technical
                  digital work.
                </p>
              </div>

              <div className="rounded-[1.5rem] border border-white/10 bg-zinc-950/70 p-5">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10">
                  <Layers3 className="h-5 w-5 text-cyan-300" />
                </div>
                <h3 className="mt-4 text-lg font-bold text-white">
                  Collaboration
                </h3>
                <p className="mt-2 text-sm leading-6 text-zinc-400">
                  Open to building future-focused ideas and meaningful digital
                  projects.
                </p>
              </div>
            </div>
          </section>

          <ContactCards />
        </div>
      </section>

      <section className="mt-10 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="rounded-[2rem] border border-white/10 bg-zinc-950/80 p-6 md:p-8">
          <p className="text-sm uppercase tracking-[0.25em] text-cyan-300">
            Resume
          </p>
          <h3 className="mt-3 text-2xl font-black text-white">
            Download my CV
          </h3>
          <p className="mt-4 leading-8 text-zinc-300">
            Get a quick overview of my background, technical direction, project
            work, and focus areas across cyber security, networking, and modern
            web systems.
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <a
              href="/Chamithu-Nenuka-CV.pdf"
              download
              className="inline-flex items-center justify-center gap-2 rounded-full bg-cyan-300 px-6 py-3.5 font-semibold text-black transition duration-300 hover:scale-[1.02]"
            >
              <Download className="h-4 w-4" />
              Download CV
            </a>

            <a
              href="/Chamithu-Nenuka-CV.pdf"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-6 py-3.5 font-semibold text-white transition duration-300 hover:bg-white/10"
            >
              Preview CV
            </a>
          </div>
        </div>

        <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl md:p-8">
          <p className="text-sm uppercase tracking-[0.25em] text-cyan-300">
            Why connect
          </p>
          <h3 className="mt-3 text-2xl font-black text-white">
            Let’s create something that feels genuinely high-value
          </h3>

          <p className="mt-4 max-w-2xl leading-8 text-zinc-400">
            Whether it’s a premium website, custom system, digital brand
            project, or a future-facing business idea, I’m interested in work
            that is intentional, polished, and built with real purpose.
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-zinc-950/80 p-5 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/30">
              <h4 className="text-base font-semibold text-white">
                Freelance Projects
              </h4>
              <p className="mt-2 text-sm leading-6 text-zinc-400">
                Business websites, portfolios, and modern digital experiences
                that feel premium and practical.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-zinc-950/80 p-5 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/30">
              <h4 className="text-base font-semibold text-white">
                Collaboration
              </h4>
              <p className="mt-2 text-sm leading-6 text-zinc-400">
                Open to technical and creative partnerships on real-world ideas
                and ambitious digital concepts.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-zinc-950/80 p-5 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/30">
              <h4 className="text-base font-semibold text-white">
                Cyber / Systems Work
              </h4>
              <p className="mt-2 text-sm leading-6 text-zinc-400">
                Opportunities connected to cyber security, networking, secure
                design, and system-focused work.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-zinc-950/80 p-5 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/30">
              <h4 className="text-base font-semibold text-white">
                Nenux Vision
              </h4>
              <p className="mt-2 text-sm leading-6 text-zinc-400">
                A growing mix of technical execution, digital branding, and
                future brand direction through Nenux Web Solutions and Nenux
                Wear.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
