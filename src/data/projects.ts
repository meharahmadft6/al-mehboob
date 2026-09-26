import type { Project } from "@/types/property";

/**
 * Sample projects only. Replace with real, named projects before launch.
 */
export const projects: Project[] = [
  {
    slug: "residential-development-sample-1",
    title: "Residential Development — Sample Project",
    location: "Lahore, Punjab",
    status: "ongoing",
    category: "Residential",
    imageQuery: "residential-development-1",
    imageAlt: "Sample residential development site",
    description:
      "A planned residential community with structured plots and internal infrastructure, currently under development.",
  },
  {
    slug: "commercial-plaza-sample-1",
    title: "Commercial Plaza — Sample Project",
    location: "Lahore, Punjab",
    status: "completed",
    category: "Commercial",
    imageQuery: "commercial-plaza-1",
    imageAlt: "Sample completed commercial plaza",
    description:
      "A completed commercial construction project delivering retail and office space in a central location.",
  },
];
