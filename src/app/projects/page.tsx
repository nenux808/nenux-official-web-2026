import ProjectCard from "@/components/ProjectCard";
import SectionIntro from "@/components/SectionIntro";
import { projects } from "@/data/projects";

export default function ProjectsPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-16 md:px-6 lg:px-10">
      <SectionIntro
        eyebrow="Projects"
        title="Portfolio case studies"
      />

      <div className="grid gap-6 lg:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </main>
  );
}
