import SectionHeading from "@/components/ui/SectionHeading";
import { processSteps } from "@/data/about";

export default function ProcessSteps() {
  return (
    <section className="border-t border-charcoal/12 bg-ivory-dim">
      <div className="mx-auto max-w-content px-6 py-20 sm:px-10 sm:py-28">
        <SectionHeading
          label="How We Work"
          title="From land to handover."
          description="Every project moves through the same four stages, regardless of scale."
        />
        <ol className="mt-14 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step, index) => (
            <li key={step.title} className="border-t border-charcoal/20 pt-5">
              <span className="text-[13px] text-charcoal/50">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-2 font-sans text-lg font-semibold text-charcoal">
                {step.title}
              </h3>
              <p className="mt-2 text-[14px] leading-relaxed text-charcoal/70">
                {step.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
