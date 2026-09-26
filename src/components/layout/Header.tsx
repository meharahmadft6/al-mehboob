"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { primaryNav } from "@/data/navigation";

export default function Header() {
  const [isCompact, setIsCompact] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsCompact(window.scrollY > 24);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <header className="sticky top-0 z-50 border-b border-charcoal/10 bg-ivory">
      <div
        className={`mx-auto flex max-w-content items-center justify-between px-6 transition-[padding] duration-200 ease-out sm:px-10 ${
          isCompact ? "py-3" : "py-5"
        }`}
      >
        <Link
          href="/"
          className="flex flex-col leading-none"
          onClick={() => setIsMenuOpen(false)}
        >
          <span className="font-sans text-lg font-bold text-charcoal sm:text-xl">
            Al Mehboob
          </span>
          <span className="mt-0.5 text-[11px] tracking-wide text-charcoal/60">
            Lands &amp; Concerns
          </span>
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-8 lg:flex">
          {primaryNav.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[15px] text-charcoal/80 transition-colors hover:text-olive"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Link
            href="/properties"
            className="inline-flex items-center border border-olive bg-olive px-5 py-2.5 text-[15px] text-ivory transition-colors hover:bg-olive-deep hover:border-olive-deep"
          >
            Explore Properties
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center p-2 text-charcoal lg:hidden"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" aria-hidden="true" />
          ) : (
            <Menu className="h-6 w-6" aria-hidden="true" />
          )}
        </button>
      </div>

      {isMenuOpen && (
        <div className="border-t border-charcoal/10 bg-ivory lg:hidden">
          <nav
            aria-label="Mobile"
            className="mx-auto flex max-w-content flex-col px-6 py-4 sm:px-10"
          >
            {primaryNav.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="border-b border-charcoal/10 py-3 text-[15px] text-charcoal/85 last:border-b-0"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/properties"
              className="mt-4 inline-flex items-center justify-center border border-olive bg-olive px-5 py-3 text-[15px] text-ivory"
              onClick={() => setIsMenuOpen(false)}
            >
              Explore Properties
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
