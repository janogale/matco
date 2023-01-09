"use client";

import { Card } from "flowbite-react";
import Banner from "../../components/ui/Banner";
import Container from "../../components/ui/Container";

export default function CarsPage() {
  return (
    <main>
      <Container>
        <Banner
          text1="Explore Our Range"
          text2="Explore Suzuki’s range of affordable new cars."
        />
      </Container>
    </main>
  );
}
