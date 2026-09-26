import SectionHeading from "@/components/ui/SectionHeading";
import ServiceCard from "@/components/ui/ServiceCard";
import { services } from "@/data/services";

export default function ServicesOverview() {
  return (
    <section className="border-t border-charcoal/12 bg-ivory-dim">
      <div className="mx-auto max-w-content px-6 py-20 sm:px-10 sm:py-28">
        <SectionHeading
          label="What We Do"
          title="Four disciplines, one concern."
          description="From raw land to finished structure, our work is organized around four connected areas."
        />
        <div className="mt-14 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0">
          {services.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
