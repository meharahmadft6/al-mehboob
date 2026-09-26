import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";
import ProjectCard from "@/components/ui/ProjectCard";
import { projects } from "@/data/projects";

export default function FeaturedProjects() {
  return (
    <section className="border-t border-charcoal/12 bg-ivory-dim">
      <div className="mx-auto max-w-content px-6 py-20 sm:px-10 sm:py-28">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            label="Our Projects"
            title="Ongoing and completed work."
          />
          <Link
            href="/projects"
            className="text-[14px] font-medium text-olive hover:text-olive-deep"
          >
            View all projects
          </Link>
        </div>
        <div className="mt-12 flex flex-col gap-10">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
