"use client";

import { useState, useEffect } from "react";

import { carsData } from "../sampledata";
import HomeCTA from "../components/HomeCTA";
import Banner from "../components/ui/Banner";
import HomeCover from '../components/HomeCover';
import { getCars } from "../sanity/schemas/utils";
import Container from "../components/ui/Container";
import Explore from "../components/explore/Explore";
import HomeCarousel from "../components/HomeCarousel";
import AvailableModels from "../components/AvailableModels";
import { Car } from "../sanity/types/car";

export default function Home() {
const [cars, setCars] = useState<Car[]>([]);

useEffect(() =>{
  //Fetch cars data when the component mounts
  async function fetchCars() {
    try {
      const cars = await getCars();
      setCars(cars);

    } catch (error) {
      console.error("Error fetching cars:", error);
    }
  }
  
  fetchCars();  // Call the fetchCars function
}, [])


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
          <AvailableModels cars={cars} /> 
      <HomeCTA />
      <HomeCover />
      <Explore />
      <div className="my-16"></div>
    </main>
  );
}
