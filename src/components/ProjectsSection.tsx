import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";
import Link from "next/link";

export default function ProjectsSection() {
  const featuredProjects = projects.filter(
    (project) => project.featured
  );

  return (
    <section id="projects" className="space-y-12">

      <div className="space-y-6">
        {featuredProjects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>

      {/* View all projects */}
      <Link
        href="/projects"
        className="inline-flex items-center gap-2 text-sm font-medium text-teal-300 hover:gap-3 transition-all"
      >
        View all projects
        <span>→</span>
      </Link>
    </section>
  );
}
