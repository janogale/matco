import { PortableTextBlock } from "sanity";

export type Car = {
  _id: string;
  name: string;
  slug: string;
  frontImage: string;
  coverImage: string;
  featureImage: string;
  content: PortableTextBlock[];
  features: PortableTextBlock[];
  featureImages: string[];
  logo: string;
  brochure: string;
  specificationSheet: string;
  inStock: boolean;
};
