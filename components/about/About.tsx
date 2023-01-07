import Image from "next/image";
import Heading from "../ui/Heading";
import Box1 from "../../public/images/about/picture2.jpg";
import Box2 from "../../public/images/about/picture3.jpg";
import Box3 from "../../public/images/about/picture4.jpg";
import Box4 from "../../public/images/about/picture5.jpg";

export default function About() {
  return (
    <>
      <div className="content text-lg">
        <p className="mb-5">
          Modern Automotive Technology (MATCO) is a modern workshop, and car
          sales center based in Somaliland. MATCO has been established in 2014
          and will start its operations in 2018. MATCO shall be engaged in
          operating sales and dealership services.
        </p>
        <div className="my-5">
        <Heading className="text-2xl">
          Objectives
        </Heading>
        </div>
        <p>
          The main purpose of the company is to provide
          <strong> modern services through modern automotive technology, </strong>
          which includes the following:
        </p>
        <ul className="list-disc list-outside leading-10 ml-5">
          <li>Building modern Automotive Technology Company in Somaliland.</li>
          <li>
            Enabling customers to access modern services at a reasonable price.
          </li>
          <li>Selling Modern cars to our customers.</li>
          <li>Creating employment opportunities.</li>
        </ul>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-5">
        <div className="relative overflow-hidden cursor-pointer">
          <Image
            src={Box1}
            alt="box"
            width={500}
            height={500}
            className="w-full h-64 hover:scale-105 transform transition ease-out duration-500"
          />
          <div className="absolute top-0 left-0 p-3">
            <div className="text-white text-3xl text-shadow-overlay">
              PARTNERSHIP
            </div>
          </div>
        </div>
        <div className="relative overflow-hidden cursor-pointer">
          <Image
            src={Box2}
            alt="box"
            width={500}
            height={500}
            className="w-full h-64 hover:scale-105 transform transition ease-out duration-500"
          />
          <div className="absolute bottom-0 left-0 p-3">
            <div className="text-white text-3xl text-shadow-overlay">
              COLLABORATION
            </div>
          </div>
        </div>
        <div className="relative overflow-hidden cursor-pointer">
          <Image
            src={Box3}
            alt="box"
            width={500}
            height={500}
            className="w-full h-64 hover:scale-105 transform transition ease-out duration-500"
          />
          <div className="absolute bottom-0 left-0 p-3">
            <div className="text-white text-3xl text-shadow-overlay">
              PERFORMANCE
            </div>
          </div>
        </div>
        <div className="relative overflow-hidden cursor-pointer">
          <Image
            src={Box4}
            alt="box"
            width={500}
            height={500}
            className="w-full h-64 hover:scale-105 transform transition ease-out duration-500"
          />
          <div className="absolute bottom-0 left-0 p-3">
            <div className="text-white text-3xl text-shadow-overlay">
              SUPPORT
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
