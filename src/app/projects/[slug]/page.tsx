import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import { projects } from "@/data/projects";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return {
      title: "Project Not Found | Nenux"
    };
  }

  return {
    title: `${project.title} | Nenux`,
    description: project.description
  };
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug
  }));
}

export default async function ProjectDetailsPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) return notFound();

  return (
    <main className="mx-auto max-w-7xl px-4 py-16 md:px-6 lg:px-10">
      <Link
        href="/projects"
        className="mb-8 inline-flex items-center gap-2 text-sm text-zinc-400 transition hover:text-white"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to Projects
      </Link>

      <section className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl md:p-8">
        <p className="text-sm uppercase tracking-[0.25em] text-cyan-300">
          {project.category}
        </p>
        <h1 className="mt-3 text-3xl font-black sm:text-4xl md:text-5xl">
          {project.title}
        </h1>
        <p className="mt-4 max-w-3xl leading-7 text-zinc-200">
          {project.description}
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          {project.liveUrl ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-black transition hover:scale-[1.02]"
            >
              Live Demo <ExternalLink className="h-4 w-4" />
            </a>
          ) : null}

          {project.githubUrl ? (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              GitHub <Github className="h-4 w-4" />
            </a>
          ) : null}
        </div>
      </section>

      <section className="mt-8 grid gap-6 lg:grid-cols-2">
        <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl md:p-8">
          <h2 className="text-xl font-semibold">Problem</h2>
          <p className="mt-4 leading-7 text-zinc-300">{project.problem}</p>
        </div>

        <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl md:p-8">
          <h2 className="text-xl font-semibold">Solution</h2>
          <p className="mt-4 leading-7 text-zinc-300">{project.solution}</p>
        </div>
      </section>

      <section className="mt-6 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="rounded-[2rem] border border-white/10 bg-zinc-950/80 p-6 md:p-8">
          <h2 className="text-xl font-semibold">Key Features</h2>
          <ul className="mt-4 space-y-3 text-zinc-300">
            {project.features.map((feature) => (
              <li key={feature}>• {feature}</li>
            ))}
          </ul>
        </div>

        <div className="rounded-[2rem] border border-white/10 bg-zinc-950/80 p-6 md:p-8">
          <h2 className="text-xl font-semibold">Tech Stack</h2>
          <div className="mt-4 flex flex-wrap gap-3">
            {project.stack.map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-zinc-200"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
