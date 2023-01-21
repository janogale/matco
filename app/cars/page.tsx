"use client";

import { carsData } from "../../sampledata";
import HomeCTA from "../../components/HomeCTA";
import Banner from "../../components/ui/Banner";
import TapsCars from "../../components/cars/TapsCars";
import Container from "../../components/ui/Container";

export default function CarsPage() {
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
      <Container className="bg-gray-50">
        <Banner
          text1="Explore Our Range"
          text2="Explore Suzuki’s range of affordable new cars."
        />
        <TapsCars />
      </Container>
      <HomeCTA />
    </main>
  );
}
