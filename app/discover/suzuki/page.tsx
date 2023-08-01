import React from "react";
import Image from "next/image";

import Banner from "../../../components/ui/Banner";
import Container from "../../../components/ui/Container";
import factoryImage from "../../../public/images/models/vitara/vitara.jpeg";
import ImageBanner from "../../../public/images/suzuki-discover/suzuki.jpg";

const SuzukiDiscover = () => {
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
      <Banner text1="Better Drive. Better Life" text2="" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 px-5 md:px-1 lg:px-0">
        <div className="text-gray-500">
          <p>
            Suzuki is a leading car manufacturer, producing more vehicles than
            popular brands such as Mercedes and BMW. Their cars are renowned for
            their sharp and modest designs, offering a great combination of
            style and practicality. With a wide range of models available, from
            small city cars to larger family vehicles, Suzuki has something to
            suit everyone&apos;s needs.
            <br />
            <br />
            Suzuki offers a wide range of product lines to satisfy the needs of
            most new car buyers in terms of quality, safety and value for money.
            It also efficiently caters to the transportation needs of the
            business sector as if offers a full range of commercial fleet
            vehicles suitable for many practical and economical purposes.
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
            src="https://www.youtube.com/embed/QjKEXsg3OQ4"
            title="JAC Hefei R&amp;D Center"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </Container>
  );
};

export default SuzukiDiscover;