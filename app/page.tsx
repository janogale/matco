"use client";

import Banner from "../components/ui/Banner";
import HomeCarousel from "../components/HomeCarousel";
import Navbar from "../components/Navbar";
import TabsCars from "../components/TabsCars";
import Container from "../components/ui/Container";
import Heading from "../components/ui/Heading";
import HomeCTA from "../components/HomeCTA";

export default function Home() {
  return (
    <main className="mx-auto w-full relative">
      <Navbar />
      <HomeCarousel />
      <Container>
        <Banner text1="Explore the Affordable" text2="New Models" />
        <Heading>Car Models</Heading>
        <TabsCars />
      </Container>
      <HomeCTA />
      <div className="my-16"></div>
    </main>
  );
}
