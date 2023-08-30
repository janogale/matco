import { createClient, groq } from "next-sanity";

export async function getCars() {
  const client = createClient({
    projectId: "a8x3s50m",
    dataset: "production",
    apiVersion: "2023-08-30",
  });

  return client .fetch(
    groq`*[_type == "car"]{
        _id,
        name,
        "slug": slug.current,
        "image": image.asset->url,
        "coverImage": image.asset->url,
        content,
        features,
        'featureImages': images[].asset->url,
        "logo": image.asset->url,
        inStock
    }`
  )
}
