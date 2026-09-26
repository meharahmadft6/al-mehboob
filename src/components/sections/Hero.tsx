import Image from "next/image";
import Link from "next/link";
import { MapPin, Layers, Wallet, Search } from "lucide-react";

export default function Hero() {
  return (
    <section className="bg-ivory">
      <div className="mx-auto max-w-content px-6 pt-16 sm:px-10 sm:pt-20 lg:pt-24">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-6">
            <p className="text-[13px] font-medium text-olive">
              Property Development &amp; Construction
            </p>
            <h1 className="mt-4 font-sans text-4xl font-medium leading-[1.1] text-charcoal sm:text-5xl lg:text-[3.4rem]">
              Your gateway to
              <br />
              <span className="font-bold">land &amp; property.</span>
            </h1>
            <p className="mt-6 max-w-md text-[16px] leading-relaxed text-charcoal/70">
              Al Mehboob Lands &amp; Concerns works across residential and
              commercial land development, construction and long-term property
              investment.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/properties"
                className="inline-flex items-center justify-center bg-charcoal px-6 py-3 text-[15px] text-ivory transition-colors hover:bg-charcoal-soft"
              >
                Explore Properties
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center justify-center border border-charcoal/25 px-6 py-3 text-[15px] text-charcoal transition-colors hover:border-charcoal"
              >
                About Us
              </Link>
            </div>
          </div>

          <div className="relative lg:col-span-6">
            <div className="relative aspect-[4/3] w-full overflow-hidden">
              <Image
                src="/home.png"
                alt="Featured property developed by Al Mehboob Lands & Concerns"
                fill
                priority
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 border border-charcoal/12 bg-white px-6 py-6 sm:mt-14 sm:grid-cols-3 sm:gap-0 sm:divide-x sm:divide-charcoal/12 sm:px-8">
          <div className="flex items-center justify-between gap-4 sm:pr-6">
            <div>
              <p className="flex items-center gap-1.5 text-[13px] text-charcoal/55">
                <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
                Location
              </p>
              <p className="mt-1 text-[15px] font-medium text-charcoal">
                Lahore, Punjab
              </p>
            </div>
          </div>
          <div className="flex items-center justify-between gap-4 sm:px-6">
            <div>
              <p className="flex items-center gap-1.5 text-[13px] text-charcoal/55">
                <Layers className="h-3.5 w-3.5" aria-hidden="true" />
                Property Type
              </p>
              <p className="mt-1 text-[15px] font-medium text-charcoal">
                Residential Plot
              </p>
            </div>
          </div>
          <div className="flex items-center justify-between gap-4 sm:pl-6">
            <div>
              <p className="flex items-center gap-1.5 text-[13px] text-charcoal/55">
                <Wallet className="h-3.5 w-3.5" aria-hidden="true" />
                Price Range
              </p>
              <p className="mt-1 text-[15px] font-medium text-charcoal">
                [Price on Request]
              </p>
            </div>
            <Link
              href="/properties"
              aria-label="Search properties"
              className="inline-flex h-11 w-11 flex-shrink-0 items-center justify-center bg-olive text-ivory transition-colors hover:bg-olive-deep"
            >
              <Search className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>

      <div className="mt-16 h-px w-full bg-charcoal/10 sm:mt-20" />
    </section>
  );
}
