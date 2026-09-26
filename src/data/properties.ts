import type { Property } from "@/types/property";

/**
 * Sample listings only. Replace with real inventory before launch.
 */
export const properties: Property[] = [
  {
    slug: "residential-plot-sample-1",
    title: "Residential Plot — 5 Marla",
    location: "Lahore, Punjab",
    type: "residential",
    size: "5 Marla",
    price: "[Price on Request]",
    imageQuery: "residential-plot-1",
    imageAlt: "Sample residential plot for illustration",
  },
  {
    slug: "commercial-plot-sample-1",
    title: "Commercial Plot — Main Boulevard",
    location: "Lahore, Punjab",
    type: "commercial",
    size: "8 Marla",
    price: "[Price on Request]",
    imageQuery: "commercial-plot-1",
    imageAlt: "Sample commercial plot for illustration",
  },
  {
    slug: "farmhouse-land-sample-1",
    title: "Farmhouse Land Parcel",
    location: "Outskirts, Lahore",
    type: "land",
    size: "4 Kanal",
    price: "[Price on Request]",
    imageQuery: "farmhouse-land-1",
    imageAlt: "Sample farmhouse land for illustration",
  },
];
