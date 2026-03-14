import Link from "next/link";
import { ExternalLink } from "lucide-react";
import type { Project } from "@/data/projects";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group rounded-[2rem] border border-white/10 bg-zinc-950/80 p-6 shadow-xl transition duration-200 hover:-translate-y-1">
      <p className="text-xs uppercase tracking-[0.2em] text-cyan-300">
        {project.category}
      </p>

      <h3 className="mt-3 text-2xl font-bold">{project.title}</h3>

      <p className="mt-4 text-sm leading-6 text-zinc-300">
        {project.description}
      </p>

      <div className="mt-5 flex flex-wrap gap-2">
        {project.stack.map((item) => (
          <span
            key={item}
            className="rounded-full bg-white/5 px-3 py-1 text-xs text-zinc-300"
          >
            {item}
          </span>
        ))}
      </div>

      <div className="mt-6">
        <Link
          href={`/projects/${project.slug}`}
          className="inline-flex items-center gap-2 text-sm font-semibold text-white"
        >
          View Case Study <ExternalLink className="h-4 w-4" />
        </Link>
      </div>
    </article>
  );
}
