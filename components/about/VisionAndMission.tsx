import Image from "next/image";
import Heading from "../ui/Heading";
import visionImage from "../../public/images/about/vision.jpg";
import missionImage from "../../public/images/about/mission.jpg";

export default function VisionAndMission() {
  return (
    <div
      className="grid grid-cols-1 sm:grid-cols-2 gap-10 bg-gray-100"
      id="vision-and-mission"
    >
      <div className="content text-lg  flex justify-center items-center p-10 rounded-md">
        <div>
          <Heading className="mt-6 text-3xl">Vision</Heading>
          <p className="mt-3">
            To be leader in modern automotive industry and sales center in Horn
            of Africa.
          </p>
        </div>
      </div>
      <div className="group text-center rounded-md bg-white hover:cursor-pointer hover:opacity-75">
        <div className="relative overflow-hidden cursor-pointer">
          <Image
            src={visionImage}
            alt="vision"
            width={500}
            height={500}
            className="h-full hover:scale-105 transform transition ease-out duration-500 w-full"
          />
        </div>
      </div>
      <div className="group text-center rounded-md bg-white hover:cursor-pointer hover:opacity-75">
        <div className="relative overflow-hidden cursor-pointer">
          <Image
            src={missionImage}
            alt="mission"
            width={500}
            height={500}
            className="h-full hover:scale-105 transform transition ease-out duration-500 w-full"
          />
        </div>
      </div>
      <div className="content text-lg flex justify-center items-center p-10 rounded-md">
        <div>
          <Heading className="mt-6 text-3xl">Mission</Heading>
          <p className="mt-3">
            To provide high quality products and services with a reasonable
            price to meet stakeholders expectations.
          </p>
        </div>
      </div>
    </div>
  );
}
