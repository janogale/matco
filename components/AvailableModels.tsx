import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Car } from "../sanity/types/car";
import { Spinner } from "flowbite-react";

type AvailableModelsProps = {
  cars: Car[];
};

const CarouselComponent = ({ cars }: AvailableModelsProps) => {
  const router = useRouter();

  // Configuration for the carousel
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
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

  if (cars.length === 0) {
    return <Spinner />;
  }

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
      {cars.map((item: Car) => (
        <div
          key={item._id}
          onClick={() => router.push(`/cars/${item.slug}`)}
          className={`relative group text-center overflow-hidden border-none p-2 hover:cursor-pointer ${
            !item.inStock ? "opacity-50 cursor-not-allowed" : "hover:opacity-75"
          }`}
        >
          <div className="relative overflow-hidden cursor-pointer">
            <Image
              src={item.frontImage}
              alt={item.name}
              width={500}
              height={500}
              quality={80}
              className="w-full h-64 hover:scale-105 transform transition ease-out duration-500"
            />
            <div className="absolute inset-0 flex items-end justify-start">
              <p className="absolute font-mono text-white text-2xl font-bold">
                {item.logo ? (
                  <Image
                    src={item.logo}
                    alt={item.name}
                    width={200}
                    height={500}
                    quality={80}
                    className="w-28 h-10"
                  />
                ) : (
                  <span>{item.name}</span>
                )}
              </p>
            </div>
          </div>
          {!item.inStock && (
            <div className="absolute inset-0 flex items-center justify-center rounded-md">
              <p className="text-white text-lg font-semibold bg-black px-5 py-1 rounded-full">
                Coming soon
              </p>
            </div>
          )}
        </div>
      ))}
    </Carousel>
  );
};

export default CarouselComponent;
