import { values } from "@/data/about";

export default function ValuesSection() {
  return (
    <section className="mx-auto max-w-content px-6 py-20 sm:px-10 sm:py-28">
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-4">
          <p className="text-[13px] font-medium text-olive">What We Value</p>
          <h2 className="mt-2 font-sans text-3xl font-bold leading-tight text-charcoal sm:text-4xl">
            Principles behind the work.
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-3 lg:col-span-8">
          {values.map((value) => (
            <div key={value.title}>
              <h3 className="font-sans text-lg font-semibold text-charcoal">
                {value.title}
              </h3>
              <p className="mt-3 text-[15px] leading-relaxed text-charcoal/70">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
