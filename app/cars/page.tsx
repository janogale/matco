"use client";


import { carsData } from '../../sampledata';
import Banner from "../../components/ui/Banner";
import CarsList from '../../components/cars/CarsList';
import Container from "../../components/ui/Container";

export default function CarsPage() {

  if(carsData.length === 0){
    return <div> <p className='text-center text-red-500 font-bold'>No accessories data to show</p> </div>
  };

  return (
    <main>
      <Container>
        <Banner
          text1="Explore Our Range"
          text2="Explore Suzuki’s range of affordable new cars."
        />
        <CarsList carsData={carsData} />
      </Container>
    </main>
  );
}
