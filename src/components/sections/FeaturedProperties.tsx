import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";
import PropertyCard from "@/components/ui/PropertyCard";
import { properties } from "@/data/properties";

export default function FeaturedProperties() {
  return (
    <section className="mx-auto max-w-content px-6 py-20 sm:px-10 sm:py-28">
      <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
        <SectionHeading
          label="Featured Properties"
          title="Land and plots currently available."
        />
        <Link
          href="/properties"
          className="text-[14px] font-medium text-olive hover:text-olive-deep"
        >
          View all properties
        </Link>
      </div>
      <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {properties.map((property) => (
          <PropertyCard key={property.slug} property={property} />
        ))}
      </div>
    </section>
  );
}
