import Image from "next/image";
import Link from "next/link";
import { MapPin } from "lucide-react";
import type { Property } from "@/types/property";
import { placeholderImage } from "@/lib/images";
import PlaceholderBadge from "@/components/ui/PlaceholderBadge";

interface PropertyCardProps {
  property: Property;
}

export default function PropertyCard({ property }: PropertyCardProps) {
  return (
    <article className="group border border-charcoal/12">
      <Link
        href={`/properties/${property.slug}`}
        className="block overflow-hidden"
      >
        <div className="relative aspect-[4/3] w-full overflow-hidden">
          <Image
            src={placeholderImage(property.imageQuery, 800, 600)}
            alt={property.imageAlt}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
          />
        </div>
      </Link>
      <div className="p-5">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-sans text-lg leading-snug text-charcoal">
            <Link href={`/properties/${property.slug}`}>{property.title}</Link>
          </h3>
          <PlaceholderBadge />
        </div>
        <p className="mt-2 flex items-center gap-1.5 text-[14px] text-charcoal/60">
          <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
          {property.location}
        </p>
        <div className="mt-4 flex items-center justify-between border-t border-charcoal/10 pt-4 text-[14px]">
          <span className="text-charcoal/70">{property.size}</span>
          <span className="font-medium text-olive">{property.price}</span>
        </div>
      </div>
    </article>
  );
}
