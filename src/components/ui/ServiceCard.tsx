import Link from "next/link";
import type { Service } from "@/types/property";

interface ServiceCardProps {
  service: Service;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  return (
    <div className="border-t border-charcoal/15 py-8 first:border-t-0 sm:border-t-0 sm:border-l sm:py-0 sm:pl-8 sm:first:border-l-0 sm:first:pl-0">
      <h3 className="font-sans text-xl text-charcoal">{service.title}</h3>
      <p className="mt-3 text-[15px] leading-relaxed text-charcoal/70">
        {service.description}
      </p>
      <Link
        href={service.href}
        className="mt-4 inline-block text-[14px] font-medium text-olive hover:text-olive-deep"
      >
        Learn more
      </Link>
    </div>
  );
}
