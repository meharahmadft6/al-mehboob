interface PageHeaderProps {
  label?: string;
  title: string;
  description?: string;
}

export default function PageHeader({
  label,
  title,
  description,
}: PageHeaderProps) {
  return (
    <section className="border-b border-charcoal/12 bg-ivory-dim">
      <div className="mx-auto max-w-content px-6 py-16 sm:px-10 sm:py-20">
        <div className="max-w-2xl">
          {label && (
            <p className="text-[13px] font-medium text-olive">{label}</p>
          )}
          <h1
            className={`font-sans text-4xl font-bold leading-tight text-charcoal sm:text-5xl ${
              label ? "mt-3" : ""
            }`}
          >
            {title}
          </h1>
          {description && (
            <p className="mt-5 text-[16px] leading-relaxed text-charcoal/70">
              {description}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
