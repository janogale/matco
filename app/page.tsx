"use client";

import Banner from "../components/ui/Banner";
import HomeCarousel from "../components/HomeCarousel";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <main className="mx-auto w-full relative">
      <Navbar />
      <HomeCarousel />
      <Banner text1="Explore the Affordable" text2="New Models" />
    </main>
  );
}
