import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Card } from "flowbite-react";

const CarouselComponent = ({ carsData }: any) => {
  const router = useRouter();
  
  // Configuration for the carousel
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <Carousel
      responsive={responsive}
      infinite={true}
      autoPlay={true}
      autoPlaySpeed={5000}
      itemClass="carousel-item-padding-40-px"
      transitionDuration={500}
      containerClass="carousel-container"
      customTransition="transform 500ms ease-in-out"
    >
      {carsData.map(
        (item: { image: string; name: string; id: string | number }) => (
          <Card key={item.id} className="bg-gradient-to-t from-black m-2">
          <div
           onClick={() => router.push(`/cars/${item.id}`)}
           className="relative group text-center overflow-hidden border-none p-4 hover:cursor-pointer hover:opacity-75">
            <div className="relative cursor-pointer">
              <Image
                src={item.image}
                alt={item.name}
                width={1000}
                height={500}
                className="h-full w-full object-cover object-center rounded-lg transition-transform duration-300 transform hover:scale-105"
              />
              <div className="absolute inset-0 flex items-end justify-start pointer-events-none">
                <p className="absolute font-mono text-white text-2xl font-bold">{item.name}</p>
              </div>
            </div>
          </div>
      </Card>
        )
      )}
    </Carousel>
  );
};

export default CarouselComponent;
