import React from "react";
import Image from "next/image";

import Banner from "../../../components/ui/Banner";
import Container from "../../../components/ui/Container";
import factoryImage from "../../../public/images/jac-discover/factory.jpg";
import ImageBanner from "../../../public/images/jac-discover/about-banner.webp";

const JacDiscover = () => {
  return (
    <Container>
      <div className="rounded-lg overflow-hidden w-full h-96 md:min-h-96">
        <Image
          src={ImageBanner}
          alt="cover"
          width={500}
          height={500}
          className="w-full h-full group text-center rounded-md bg-white hover:cursor-pointer hover:opacity-75 hover:scale-105 transform transition ease-out duration-500 cursor-pointer"
        />
      </div>
      <Banner text1="" text2="Better Drive. Better Life" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 px-5 md:px-1 lg:px-0">
        <div className="text-gray-500">
          <p>
            JAC is a comprehensive auto-maker with full-line independent brand
            vehicles in China. From Light, Medium, Heavy-duty trucks, Van, MPV,
            SRV, Sedan, Bus chassis, Gearboxes, Buses, Pure-electric, Vehicle
            Engineering, Machinery 7 Engines. China,Anhui - Jianghuai Automobile
            Co., Ltd. (hereinafter called JAC) was founded in 1964 and listed on
            the Shanghai Stock Exchange (600418) in 2001. 53 years as Auto
            Maker.
            <br />
            <br />
            Dedicated to the progress of China’s automobile industry and
            committed to developing into a leading Chinese automaker with
            international competitiveness, JAC focuses on commercial vehicle
            manufacturing to consolidate and develop its leading position in
            various commercial vehicle markets.
            <br />
            <br />
            It has successfully expanded into passenger vehicle manufacturing
            through international cooperation and the integration of domestic
            and global resources.
          </p>
        </div>
        <div className="rounded-lg overflow-hidden w-full h-full min-h-96">
          <Image
            src={factoryImage}
            alt="cover"
            width={500}
            height={500}
            className="w-full h-auto group text-center rounded-md bg-white hover:cursor-pointer hover:opacity-75 hover:scale-105 transform transition ease-out duration-500 cursor-pointer"
          />
        </div>
      </div>
      <div className="my-10 rounded-lg overflow-hidden px-5 md:px-1 lg:px-0">
        <div>
        <iframe
          width="100%"
          height="630"
          src="https://www.youtube.com/embed/I-xdBMPN5WM"
          title="JAC Hefei R&amp;D Center"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
        </div>
      </div>
    </Container>
  );
};

export default JacDiscover;