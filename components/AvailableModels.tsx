import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Car } from "../sanity/types/car";
import Spinner from "./ui/Spinner";

type AvailableModelsProps = {
  cars: Car[];
};

const CarouselComponent = ({ cars }: AvailableModelsProps) => {
  const router = useRouter()

  // State to track whether the images are loaded
  const [imagesLoaded, setImagesLoaded] = useState(false);

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
      // Use 'afterChange' event to trigger the imagesLoaded state
      afterChange={() => setImagesLoaded(true)}
    >
      {cars.map((car: Car) => (
        <div
          key={car._id}
          onClick={() => router.push(`/cars/${car.slug}`)}
          className={`relative group text-center overflow-hidden border-none p-2 hover:cursor-pointer ${
            !car.inStock ? "opacity-50 cursor-not-allowed" : "hover:opacity-75"
          }`}
        >
          <div className="relative overflow-hidden cursor-pointer">
            {/* Display a skeleton loading effect while images are loading */}
            {!imagesLoaded && (
              <div className="animate-pulse w-full h-64 bg-gray-200"></div>
            )}
            <Image
              src={car.frontImage}
              alt={car.name}
              width={500}
              height={500}
              quality={80}
              className={`w-full h-64 hover:scale-105 transform transition ease-out duration-500 ${
                imagesLoaded ? "opacity-100" : "opacity-0"
              }`}
              // Set the onLoad event to trigger the imagesLoaded state
              onLoad={() => setImagesLoaded(true)}
            />
            <div className="absolute inset-0 flex items-end justify-start">
              <p className="absolute font-mono text-white text-2xl font-bold">
                {car.logo ? (
                  <Image
                    src={car.logo}
                    alt={car.name}
                    width={200}
                    height={70}
                    quality={80}
                    className="w-28 h-10 p-2"
                  />
                ) : (
                  <span>{car.name}</span>
                )}
              </p>
            </div>
          </div>
          {!car.inStock && (
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
