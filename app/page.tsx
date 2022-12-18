"use client";

import HomeCarousel from "../components/HomeCarousel";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <main className="w-full mx-auto relative">
      <Navbar />
      <HomeCarousel />
      <div className="h-64"></div>
    </main>
  );
}
