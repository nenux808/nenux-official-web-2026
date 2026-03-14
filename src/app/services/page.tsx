import Link from "next/link";
import {
  ArrowRight,
  Briefcase,
  Globe,
  Layers3,
  MonitorSmartphone,
  ShoppingCart,
  Ticket,
  Wrench,
} from "lucide-react";
import SectionIntro from "@/components/SectionIntro";

const services = [
  {
    title: "Portfolio Websites",
    description:
      "Modern personal and professional portfolios designed to look premium, build trust, and present work clearly.",
    icon: Briefcase,
  },
  {
    title: "Business Websites",
    description:
      "Clean and polished company websites built to strengthen online presence and communicate brand value professionally.",
    icon: Globe,
  },
  {
    title: "Custom Web Applications",
    description:
      "Tailored digital systems built around your workflow, business needs, and long-term scalability.",
    icon: Layers3,
  },
  {
    title: "Ordering & Booking Systems",
    description:
      "Smart digital flows for restaurants, services, and customer bookings with a smoother user experience.",
    icon: ShoppingCart,
  },
  {
    title: "Event & Ticketing Platforms",
    description:
      "Modern systems for events, payments, digital tickets, and customer management with performance in mind.",
    icon: Ticket,
  },
  {
    title: "Startup MVP Design & Development",
    description:
      "Fast, polished, and strategic MVP builds to help ideas launch with clarity, speed, and real direction.",
    icon: MonitorSmartphone,
  },
];

export default function ServicesPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-16 md:px-6 lg:px-10">
      <section className="relative overflow-hidden rounded-[2.25rem] border border-white/10 bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.08),transparent_28%),radial-gradient(circle_at_top_left,rgba(139,92,246,0.08),transparent_28%),linear-gradient(to_bottom,rgba(255,255,255,0.03),rgba(255,255,255,0.02))] p-6 backdrop-blur-xl md:p-8 lg:p-10">
        <SectionIntro
          eyebrow="Services"
          title="What I can build"
        />

        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-[1.75rem] border border-white/10 bg-zinc-950/70 p-5 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/30">
            <p className="text-sm uppercase tracking-[0.2em] text-cyan-300">
              Focus
            </p>
            <p className="mt-3 text-lg font-bold text-white">
              Premium Digital Execution
            </p>
            <p className="mt-2 text-sm leading-6 text-zinc-400">
              Clean UI, strong performance, and business-ready delivery.
            </p>
          </div>

          <div className="rounded-[1.75rem] border border-white/10 bg-zinc-950/70 p-5 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/30">
            <p className="text-sm uppercase tracking-[0.2em] text-cyan-300">
              Brand
            </p>
            <p className="mt-3 text-lg font-bold text-white">
              Nenux Web Solutions
            </p>
            <p className="mt-2 text-sm leading-6 text-zinc-400">
              Professional websites and custom systems designed to feel sharp
              and modern.
            </p>
          </div>

          <div className="rounded-[1.75rem] border border-white/10 bg-zinc-950/70 p-5 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/30">
            <p className="text-sm uppercase tracking-[0.2em] text-cyan-300">
              Approach
            </p>
            <p className="mt-3 text-lg font-bold text-white">
              Practical + Future-Focused
            </p>
            <p className="mt-2 text-sm leading-6 text-zinc-400">
              Built with real business value, scalability, and polished user
              experience in mind.
            </p>
          </div>
        </div>
      </section>

      <section className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {services.map((service, index) => {
          const Icon = service.icon;

          return (
            <article
              key={service.title}
              className="group rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-cyan-400/30 hover:bg-white/[0.06] hover:shadow-[0_0_30px_rgba(34,211,238,0.08)]"
              style={{
                animationDelay: `${index * 80}ms`,
              }}
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 transition duration-300 group-hover:scale-110">
                <Icon className="h-6 w-6 text-cyan-300" />
              </div>

              <h3 className="mt-5 text-2xl font-black text-white">
                {service.title}
              </h3>

              <p className="mt-4 text-sm leading-7 text-zinc-400">
                {service.description}
              </p>

              <div className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-cyan-300 transition duration-300 group-hover:translate-x-1">
                Learn more <ArrowRight className="h-4 w-4" />
              </div>
            </article>
          );
        })}
      </section>

      <section className="mt-12 rounded-[2.25rem] border border-white/10 bg-zinc-950/80 p-6 md:p-8 lg:p-10">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-cyan-300">
              Work With Nenux
            </p>
            <h2 className="mt-3 text-3xl font-black text-white sm:text-4xl">
              Need something clean, modern, and actually high-value?
            </h2>
            <p className="mt-4 max-w-2xl leading-7 text-zinc-400">
              Whether it’s a portfolio, business platform, ordering system, or a
              startup concept, I focus on building digital experiences that feel
              premium and work properly in the real world.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col lg:items-end">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 font-semibold text-black transition hover:scale-[1.02]"
            >
              Start a Project <ArrowRight className="h-4 w-4" />
            </Link>

            <Link
              href="/projects"
              className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-6 py-3.5 font-semibold text-white transition hover:bg-white/10"
            >
              View My Work
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}