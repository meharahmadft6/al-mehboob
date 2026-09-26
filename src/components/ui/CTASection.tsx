import Link from "next/link";

interface CTASectionProps {
  title: string;
  description?: string;
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}

export default function CTASection({
  title,
  description,
  primaryLabel,
  primaryHref,
  secondaryLabel,
  secondaryHref,
}: CTASectionProps) {
  return (
    <section className="border-t border-charcoal/15 bg-sand">
      <div className="mx-auto max-w-content px-6 py-16 sm:px-10 sm:py-20">
        <div className="flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-end">
          <div className="max-w-xl">
            <h2 className="font-sans text-3xl leading-tight text-charcoal sm:text-4xl">
              {title}
            </h2>
            {description && (
              <p className="mt-3 text-[15px] leading-relaxed text-charcoal/70">
                {description}
              </p>
            )}
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              href={primaryHref}
              className="inline-flex items-center justify-center border border-olive bg-olive px-6 py-3 text-[15px] text-ivory transition-colors hover:bg-olive-deep hover:border-olive-deep"
            >
              {primaryLabel}
            </Link>
            {secondaryLabel && secondaryHref && (
              <Link
                href={secondaryHref}
                className="inline-flex items-center justify-center border border-charcoal/30 px-6 py-3 text-[15px] text-charcoal transition-colors hover:border-charcoal"
              >
                {secondaryLabel}
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
