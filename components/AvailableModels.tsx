import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const CarouselComponent = ({ carsData }: any) => {
  const router = useRouter();
  
  // Configuration for the carousel
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
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
      // autoPlay={true}
      // autoPlaySpeed={5000}
      itemClass="carousel-item-padding-40-px"
      transitionDuration={500}
      containerClass="carousel-container"
      customTransition="transform 500ms ease-in-out"
    >
      {carsData.map(
        (item: { image: string; name: string; logo: string; id: string | number }) => (
          <div
          key={item.id}
           onClick={() => router.push(`/cars/${item.id}`)}
           className="relative group text-center overflow-hidden border-none p-2 hover:cursor-pointer hover:opacity-75">
            <div className="relative overflow-hidden cursor-pointer">
              <Image
                src={item.image}
                alt={item.name} 
                width={1000}
                height={500}
                quality={80}
                className="w-full h-64 hover:scale-105 transform transition ease-out duration-500"
              />
              <div className="absolute inset-0 flex items-end justify-start pointer-events-none">
                <p className="absolute font-mono text-white text-2xl font-bold">
                  {item.logo ? <img src={item.logo} alt={item.name} className="w-28 h-10" /> : <span>{item.name}</span>}
                </p>
              </div>
            </div>
          </div>
        )
      )}
    </Carousel>
  );
};

export default CarouselComponent;
