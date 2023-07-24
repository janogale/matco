"use client";

import HomeCTA from "../components/HomeCTA";
import Banner from "../components/ui/Banner";
// import TabsCars from "../components/TabsCars";
import { carsData } from "../sampledata";
import Heading from "../components/ui/Heading";
// import TapsCars from "../components/cars/TapsCars";
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
        <AvailableModels carsData={carsData} />
      </div>
      <HomeCTA />
      <Explore />
      <div className="my-16"></div>
    </main>
  );
}
