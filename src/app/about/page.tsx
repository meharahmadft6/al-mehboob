import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
import AboutStory from "@/components/sections/AboutStory";
import ProcessSteps from "@/components/sections/ProcessSteps";
import ValuesSection from "@/components/sections/ValuesSection";
import CTASection from "@/components/ui/CTASection";

export const metadata: Metadata = {
  title: "About Us | Al Mehboob Lands & Concerns",
  description:
    "Learn about Al Mehboob Lands & Concerns — our approach to property development, construction and land investment.",
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        label="About Us"
        title="A concern built around land, construction and lasting value."
        description="We work across property development, construction and investment, treating each as part of the same long-term commitment to the land and the people who build on it."
      />
      <AboutStory />
      <ProcessSteps />
      <ValuesSection />
      <CTASection
        title="Want to know more about how we work?"
        description="Get in touch with our team to discuss a project, a plot, or an investment opportunity."
        primaryLabel="Contact Us"
        primaryHref="/contact"
        secondaryLabel="View Services"
        secondaryHref="/services"
      />
    </>
  );
}
