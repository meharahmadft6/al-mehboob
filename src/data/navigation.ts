import type { FooterLinkGroup, NavLink, SocialLink } from "@/types/navigation";

export const primaryNav: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Properties", href: "/properties" },
  { label: "Projects", href: "/projects" },
  { label: "Construction", href: "/construction" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
];

export const footerLinkGroups: FooterLinkGroup[] = [
  {
    heading: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Construction", href: "/construction" },
      { label: "Services", href: "/services" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    heading: "Properties",
    links: [
      { label: "Residential Plots", href: "/properties?type=residential" },
      { label: "Commercial Plots", href: "/properties?type=commercial" },
      { label: "Farmhouses & Land", href: "/properties?type=land" },
      { label: "All Listings", href: "/properties" },
    ],
  },
  {
    heading: "Projects",
    links: [{ label: "Ongoing & Completed Projects", href: "/projects" }],
  },
  {
    heading: "Services",
    links: [
      { label: "Property Development", href: "/services#development" },
      { label: "Construction", href: "/services#construction" },
      { label: "Property Investment", href: "/services#investment" },
      { label: "Land Development", href: "/services#land-development" },
    ],
  },
];

export const socialLinks: SocialLink[] = [
  { label: "Facebook", href: "#", icon: "facebook" },
  { label: "Instagram", href: "#", icon: "instagram" },
  { label: "LinkedIn", href: "#", icon: "linkedin" },
  { label: "YouTube", href: "#", icon: "youtube" },
];

export const companyInfo = {
  name: "Al Mehboob Lands & Concerns",
  shortDescription:
    "A Pakistan-based property development, construction and land investment concern, working across residential and commercial land, custom construction and long-term property investment.",
  phone: "[Phone Number]",
  email: "[Email Address]",
  address: "[Office Address, City]",
};
