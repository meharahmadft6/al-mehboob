import Hero from "@/components/sections/Hero";
import IntroSplit from "@/components/sections/IntroSplit";
import ServicesOverview from "@/components/sections/ServicesOverview";
import FeaturedProperties from "@/components/sections/FeaturedProperties";
import FeaturedProjects from "@/components/sections/FeaturedProjects";
import CTASection from "@/components/ui/CTASection";

export default function Home() {
  return (
    <>
      <Hero />
      <IntroSplit />
      <ServicesOverview />
      <FeaturedProperties />
      <FeaturedProjects />
      <CTASection
        title="Looking to invest in land or build your next project?"
        description="Get in touch and our team will walk you through current availability and how we can help."
        primaryLabel="Contact Us"
        primaryHref="/contact"
        secondaryLabel="View Services"
        secondaryHref="/services"
      />
    </>
  );
}
