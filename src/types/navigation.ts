export interface NavLink {
  label: string;
  href: string;
}

export interface FooterLinkGroup {
  heading: string;
  links: NavLink[];
}

export interface SocialLink {
  label: string;
  href: string;
  icon: "facebook" | "instagram" | "linkedin" | "youtube";
}
