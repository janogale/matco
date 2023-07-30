"use client";

import { carsData } from "../sampledata";
import HomeCTA from "../components/HomeCTA";
import Banner from "../components/ui/Banner";
import HomeCover from '../components/HomeCover';
import Container from "../components/ui/Container";
import Explore from "../components/explore/Explore";
import HomeCarousel from "../components/HomeCarousel";
import AvailableModels from "../components/AvailableModels";

export default function Home() {
  if (carsData.length === 0) {
    return (
      <div>
        <p className="text-center text-red-500 font-bold">
          No Cars Available at moment!
        </p>
      </div>
    );
  }

  return (
    <main>
      <HomeCarousel />
      <div className="my-16">
        <Container>
          <Banner text1="Explore the Affordable" text2="New Models" />
          {/* <TabsCars /> */}
          {/* <TapsCars />  */}
        </Container>
      </div>
        <AvailableModels carsData={carsData} />
      <HomeCTA />
      <HomeCover />
      <Explore />
      <div className="my-16"></div>
    </main>
  );
}
