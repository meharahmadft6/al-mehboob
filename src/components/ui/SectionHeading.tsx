interface SectionHeadingProps {
  label?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

export default function SectionHeading({
  label,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  const isCentered = align === "center";

  return (
    <div className={isCentered ? "mx-auto max-w-2xl text-center" : "max-w-xl"}>
      {label && <p className="text-[13px] font-medium text-olive">{label}</p>}
      <h2
        className={`font-sans text-3xl leading-tight text-charcoal sm:text-4xl ${
          label ? "mt-2" : ""
        }`}
      >
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-[15px] leading-relaxed text-charcoal/70">
          {description}
        </p>
      )}
    </div>
  );
}
