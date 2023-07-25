import React from "react";
import Image from "next/image";
import cover from "../../public/images/explore/genuine-parts.webp";
import Container from "../../components/ui/Container";
import GetQouteForm from "../../components/getqoutform/GetQoutForm";

const GenuinePartsPage = () => {
  return (
    <Container>
      <div className="cover relative">
        <div className="w-full overflow-hidden flex items-center justify-end">
          <Image
            className="w-full h-auto group text-center bg-white hover:cursor-pointer hover:opacity-75 hover:scale-105 transform transition ease-out duration-500 cursor-pointer"
            src={cover}
            alt="banner image"
            width={1500}
            height={500}
          />
          <div className="absolute inset-0 bg-black bg-opacity-25">
            <div className="md:max-w-screen-xl mx-auto px-5 xxl:px-0 text-gray-800 flex items-center h-full xxl:pb-48">
              <h1 className="font-semibold leading-none md:leading-12 ml-16">
                <span className="text-4xl md:text-6xl lg:text-6xl uppercase block text-white opacity-50 md:opacity-25 -ml-16">
                  Genuine
                </span>
                <span className="text-3xl md:text-5xl lg:text-8xl uppercase block text-white">
                  Parts
                </span>
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="md:max-w-screen-xl mx-auto mt-10 px-5 xxl:px-0 text-gray-800">
        <div className="w-full space-y-10">
          <div className="content text-lg">
            <h2 className="text-3xl font-semibold uppercase text-sky-600 mb-5">
              SUZUKI GENUINE PARTS
            </h2>
            <p>
              Suzuki Genuine Parts are engineered to precise and exacting
              product quality standards. Using Suzuki Genuine Parts will also
              ensure your safety is not compromised when you need it the most.
              Suzuki qualified aftersales personnel have the latest tools and
              equipment at their disposal to ensure they obtain the right part
              for the job, and that it will be fitted correctly.
            </p>
          </div>
        </div>
      </div>
      <div className="md:max-w-screen-xl mx-auto mt-10 px-5 xxl:px-0">
        <div className="text-xl font-semibold uppercase text-gray-600 my-5">
          <div>Request a Quote – Genuine Parts</div>
        </div>
        <div className="shadow rounded-md p-5 mt-5 bg-gray-50">
        <GetQouteForm />
        </div>
      </div>
    </Container>
  );
};

export default GenuinePartsPage;
