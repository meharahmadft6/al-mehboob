import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/types/property";
import { placeholderImage } from "@/lib/images";
import PlaceholderBadge from "@/components/ui/PlaceholderBadge";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const statusLabel = project.status === "ongoing" ? "Ongoing" : "Completed";

  return (
    <article className="group grid grid-cols-1 gap-6 border-b border-charcoal/12 pb-10 sm:grid-cols-12 sm:gap-8">
      <Link
        href={`/projects/${project.slug}`}
        className="relative block aspect-[4/3] overflow-hidden sm:col-span-5"
      >
        <Image
          src={placeholderImage(project.imageQuery, 800, 600)}
          alt={project.imageAlt}
          fill
          sizes="(min-width: 640px) 40vw, 100vw"
          className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
        />
      </Link>
      <div className="flex flex-col justify-center sm:col-span-7">
        <div className="flex flex-wrap items-center gap-3 text-[13px] text-charcoal/60">
          <span>{project.category}</span>
          <span aria-hidden="true">·</span>
          <span>{statusLabel}</span>
          <PlaceholderBadge />
        </div>
        <h3 className="mt-3 font-sans text-2xl leading-snug text-charcoal">
          <Link href={`/projects/${project.slug}`}>{project.title}</Link>
        </h3>
        <p className="mt-2 text-[14px] text-charcoal/60">{project.location}</p>
        <p className="mt-3 max-w-md text-[15px] leading-relaxed text-charcoal/70">
          {project.description}
        </p>
      </div>
    </article>
  );
}
