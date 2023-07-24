import React from "react";
import Image from "next/image";

import Banner from "../ui/Banner";
import Container from "../ui/Container";
import Image1 from "../../public/images/explore/1.png";
import swift from "../../public/images/explore/swift.webp";
import engine from "../../public/images/explore/engine.webp";
import swiftRed from "../../public/images/explore/swift-red.png";

const Explore = () => {
  return (
    <section className="explore-the-exciting pt-8">
      <Container>
        <div className="md:max-w-screen-xl mx-auto px-5 xxl:px-0 heading mb-6">
          <Banner
            text1="Explore the Exciting"
            text2="New SUZUKI and JAC Models"
          />
        </div>
      </Container>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4">
        <div className="relative bg-blue-900 h-screen-60 sm:h-screen lg:h-20rem xxl:h-30rem lg:col-span-2 lg:row-span-2 overflow-hidden">
          <div className="p-12 absolute left-0 top-0 w-full z-10">
            <div className="uppercase text-xl md:text-4xl xxl:text-5xl leading-none text-gray-100 font-light">
              <span className="block font-medium">
                suzuki {" "}
                <span className="font-bold">virtual</span>
              </span>
              <span className="block font-medium">showroom</span>
            </div>
            <div className="mt-3">
              <a
                href="#"
                className="bg-red-600 text-white hover:text-black xxl:text-2xl px-3 py-1 hover:bg-white hover:border-white"
              >
                Explore Now
              </a>
            </div>
          </div>
          <div className="w-full h-screen-60 sm:h-screen lg:h-20rem xxl:h-30rem image-scale-effect-small flex items-center justify-end">
            <Image
              className="mt-24 sm:mt-0 w-full object-cover object-right-bottom transition-transform duration-300 transform hover:scale-105"
              src={Image1}
              alt="banner image"
              width={1500}
              height={500}
            />
          </div>
        </div>
        <div className="cursor-pointer bg-gray-50 h-screen-50 lg:h-20rem xxl:h-20rem flex flex-col items-center justify-around image-scale-effect-small">
          <div>
            <span className="text-center w-full text-3xl capitalize font-medium">
              let&apos;s drive
            </span>
            <div className="transition-transform duration-300 transform hover:scale-105">
              <Image
                className="-ml-1 w-3/4"
                src={swift}
                alt="banner image"
                width={500}
                height={500}
              />
            </div>
          </div>
        </div>
        <div className="cursor-pointer bg-red-500 h-screen-50 lg:h-20rem xxl:h-20rem relative overflow-hidden image-scale-effect-small">
          <div className="flex flex-col items-center justify-around lg:justify-end absolute left-0 top-0 w-full h-full">
            <div className="absolute left-0 top-0 w-full pt-10">
              <span className="z-10 relative block text-center text-gray-200 lg:mb-5 w-full text-3xl capitalize font-medium">
                <span className="block text-sm">Reach Out</span>
                <span className="block">To Us</span>
              </span>
            </div>
          </div>
          <div className="transition-transform duration-300 transform hover:scale-105">
            <Image
              className="mb-10 sm:mb-0 w-full"
              src={swiftRed}
              alt="banner image"
              width={500}
              height={500}
            />
          </div>
        </div>
        <div className="cursor-pointer bg-sky-600 h-screen-50 lg:h-20rem xxl:h-20rem flex items-center justify-center">
          <div className="capitalize text-center text-gray-100 font-light">
            <div className="text-4xl leading-tight">
              <span className="block">Suzuki</span>
              <span className="block">Genuine Parts</span>
            </div>
            <div>
              <a
                href="#"
                className="trasn-button border-gray-100 border-2 mt-5 inline-block px-8 rounded py-1 text-base hover:text-sky-600 hover:bg-white hover:border-white transition ease-linear duration-200 hover:font-medium"
              >
                Explore Parts
              </a>
            </div>
          </div>
        </div>
        <div className="cursor-pointer bg-white h-screen-50 lg:h-20rem xxl:h-20rem relative">
          <div className="flex flex-col items-center justify-end absolute left-0 top-0 w-full h-full">
            <div>
              <span className="text-center text-gray-900 mb-5 w-full text-3xl capitalize font-medium">
                <span className="block text-sm">Book A</span>
                <span className="block">Car Service</span>
              </span>
            </div>
            <div className="relative transition-transform duration-300 transform hover:scale-105">
              <Image
                className="w-48 xxl:w-64 mx-auto"
                src={engine}
                alt="banner image"
                width={500}
                height={500}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Explore;