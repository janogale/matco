import { Car } from "../types/car";
import { createClient, groq } from "next-sanity";

export async function getCars(): Promise<Car[]> {
  const client = createClient({
    projectId: "a8x3s50m",
    dataset: "production",
    apiVersion: "2023-08-30",
  });

  return client.fetch(
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
  const client = createClient({
    projectId: "a8x3s50m",
    dataset: "production",
    apiVersion: "2023-08-30",
  });

  return client.fetch(
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