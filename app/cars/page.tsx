"use client";

import { carsData } from "../../sampledata";
import HomeCTA from "../../components/HomeCTA";
import Banner from "../../components/ui/Banner";
import TapsCars from "../../components/cars/TabsCars";
import Container from "../../components/ui/Container";

export default function CarsPage() {
  if (carsData.length === 0) {
    return (
      <div>
        <p className="text-center text-red-500 font-bold">
          No accessories data to show
        </p>
      </div>
    );
  }

  return (
    <main>
      <Container>
        <Banner
          text1="Explore Our Range"
          text2="Explore Suzuki’s range of affordable new cars."
        />
        <TapsCars />
        {/* <CarsList carsData={carsData} /> */}
      </Container>
      <HomeCTA />
    </main>
  );
}
