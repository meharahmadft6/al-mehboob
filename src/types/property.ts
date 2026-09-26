export type PropertyType = "residential" | "commercial" | "land";

export interface Property {
  slug: string;
  title: string;
  location: string;
  type: PropertyType;
  size: string;
  price: string;
  imageQuery: string;
  imageAlt: string;
}

export type ProjectStatus = "ongoing" | "completed";

export interface Project {
  slug: string;
  title: string;
  location: string;
  status: ProjectStatus;
  category: string;
  imageQuery: string;
  imageAlt: string;
  description: string;
}

export interface Service {
  title: string;
  description: string;
  href: string;
}
