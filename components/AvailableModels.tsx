import React from "react";
import { Card } from "flowbite-react";
import { Button } from "flowbite-react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

// sample data
import { carsData } from "../sampledata";
import Heading from "./ui/Heading";

const AvailableModels = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">React Swiper Carousel</h1>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={5}
        slidesPerView={3} // Show 3 slides per view by default
        navigation
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
        className="mySwiper"
      >
        {carsData.map((item) => (
          <Card className="w-full max-w-sm cursor-pointer" key={item.id}>
            <SwiperSlide>
              <img src={item.image} alt={`Slide ${item.id}`} className="w-96" />
              <h2 className="text-2xl text-white font-bold absolute left-10 bottom-6 bg-black py-1 px-2">{item.name}</h2>
            </SwiperSlide>
          </Card>
        ))}
      </Swiper>
    </div>
  );
};

export default AvailableModels;
