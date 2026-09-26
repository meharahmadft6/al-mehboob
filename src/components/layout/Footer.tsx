import Link from "next/link";
import type { ReactElement, SVGProps } from "react";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedInIcon,
  YouTubeIcon,
} from "@/components/ui/SocialIcons";
import { companyInfo, footerLinkGroups, socialLinks } from "@/data/navigation";
import type { SocialLink } from "@/types/navigation";
type SocialIcon = "facebook" | "instagram" | "linkedin" | "youtube";

const iconMap: Record<
  SocialIcon,
  (props: SVGProps<SVGSVGElement>) => ReactElement
> = {
  facebook: FacebookIcon,
  instagram: InstagramIcon,
  linkedin: LinkedInIcon,
  youtube: YouTubeIcon,
};

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-charcoal/15 bg-charcoal text-ivory">
      <div className="mx-auto max-w-content px-6 py-16 sm:px-10">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <span className="font-sans text-xl ">{companyInfo.name}</span>
            <p className="mt-4 max-w-sm text-[15px] leading-relaxed text-ivory/70">
              {companyInfo.shortDescription}
            </p>
            <ul className="mt-6 space-y-1.5 text-[15px] text-ivory/70">
              <li>{companyInfo.address}</li>
              <li>{companyInfo.phone}</li>
              <li>{companyInfo.email}</li>
            </ul>
            <div className="mt-6 flex items-center gap-4">
              {socialLinks.map((social) => {
                const Icon = iconMap[social.icon];
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="text-ivory/70 transition-colors hover:text-brass"
                  >
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </a>
                );
              })}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4 lg:col-span-8">
            {footerLinkGroups.map((group) => (
              <div key={group.heading}>
                <h3 className="text-[15px] font-medium text-ivory">
                  {group.heading}
                </h3>
                <ul className="mt-4 space-y-2.5">
                  {group.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-[14px] text-ivory/65 transition-colors hover:text-brass"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-ivory/15 pt-8 text-[13px] text-ivory/55 sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {year} {companyInfo.name}. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy-policy" className="hover:text-brass">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-brass">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
