import Image from "next/image";
import { placeholderImage } from "@/lib/images";

export default function AboutStory() {
  return (
    <section className="mx-auto max-w-content px-6 py-20 sm:px-10 sm:py-28">
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16">
        <div className="flex flex-col justify-center lg:col-span-6">
          <p className="text-[13px] font-medium text-olive">Our Story</p>
          <h2 className="mt-2 font-sans text-3xl font-bold leading-tight text-charcoal sm:text-4xl">
            Working across land, construction and investment.
          </h2>
          <p className="mt-5 max-w-lg text-[15px] leading-relaxed text-charcoal/70">
            Al Mehboob Lands &amp; Concerns operates across the property
            lifecycle from identifying and developing land, to construction, to
            guiding clients through long-term property investment. Rather than
            treating these as separate businesses, we run them as one connected
            concern, so the same standards apply whether we&apos;re developing a
            plot, building a structure, or advising an investor.
          </p>
          <p className="mt-4 max-w-lg text-[15px] leading-relaxed text-charcoal/70">
            Our work is grounded in the realities of Pakistani land markets —
            documentation, approvals and long build cycles — and in building
            relationships that outlast a single transaction.
          </p>
        </div>
        <div className="relative aspect-[4/5] lg:col-span-5 lg:col-start-8">
          <Image
            src={placeholderImage("about-story-1", 900, 1100)}
            alt="Land development site representing the company's ongoing work"
            fill
            sizes="(min-width: 1024px) 35vw, 100vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
