import Image from "next/image";
import Link from "next/link";

export default function IntroSplit() {
  return (
    <section className="mx-auto max-w-content px-6 py-20 sm:px-10 sm:py-28">
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16">
        <div className="relative aspect-[4/5] lg:col-span-5">
          <Image
            src="/section.png"
            alt="Construction site under active development"
            fill
            sizes="(min-width: 1024px) 40vw, 100vw"
            className="object-cover"
          />
        </div>
        <div className="flex flex-col justify-center lg:col-span-6 lg:col-start-7">
          <p className="text-[13px] font-medium text-olive">Who We Are</p>
          <h2 className="mt-2 font-sans text-3xl leading-tight text-charcoal sm:text-4xl">
            A concern built around land, construction and lasting value.
          </h2>
          <p className="mt-5 max-w-lg text-[15px] leading-relaxed text-charcoal/70">
            Al Mehboob Lands &amp; Concerns brings together property
            development, construction and investment advisory under one roof.
            Our work spans residential plots, commercial land and custom-built
            structures, handled with the same attention from planning through to
            handover.
          </p>
          <p className="mt-4 max-w-lg text-[15px] leading-relaxed text-charcoal/70">
            We work directly with landowners, investors and families looking to
            build, developing each project around the practical realities of the
            land and the people who will use it.
          </p>
          <Link
            href="/about"
            className="mt-6 inline-block text-[14px] font-medium text-olive hover:text-olive-deep"
          >
            More about our company
          </Link>
        </div>
      </div>
    </section>
  );
}
