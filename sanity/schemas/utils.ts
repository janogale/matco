import { createClient, groq } from "next-sanity";
import clientConfig from "../config/client-config";

import { Car } from "../types/car";

export async function getCars(): Promise<Car[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "car"]{
      _id,
      name,
      "slug": slug.current,
      "frontImage": frontImage.asset->url,
      "coverImage": coverImage.asset->url,
      "logoImage": logo.asset->url,
      content,
      features,
      "featureImages": images[].asset->url,
      inStock
    }`
  );
}

export async function getCar(slug: string): Promise<Car> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "car" && slug.current == $slug][0]{
      _id,
      name,
      "slug": slug.current,
      "frontImage": frontImage.asset->url,
      "coverImage": coverImage.asset->url,
      "logoImage": logo.asset->url,
      content,
      features,
      "featureImages": images[].asset->url,
      inStock
    }`,
    { slug }
  );
}
