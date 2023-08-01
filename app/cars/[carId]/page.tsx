"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

import { carsData } from "../../../sampledata";
import Sidebar from "../../../components/Sidebar";
import Modal from "../../../components/modal/Modal";
import Container from "../../../components/ui/Container";
import Spinner from '../../../components/ui/Spinner'

interface CarData {
  id: number;
  name: string;
  description: string;
  coverImage: string;
  images: string[];
  features: string[];
}

export default function CarDetailsPage() {
  const [pathname, setPathname] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);


  useEffect(() => {
    setPathname(window.location.pathname);
  }, []);

  const id = pathname.split("/").pop();

  if (!id || isNaN(Number(id))) {
    return <Spinner />
  }

  const carId = parseInt(id);
  const car: CarData | undefined = carsData.find((c) => c.id === carId);

  if (!car) {
    console.log("Item not found.");
    return <div>Car not found.</div>;
  }

    // Function to open the modal
    const openModal = () => {
      setIsModalOpen(true);
    };
  
    // Function to close the modal
    const closeModal = () => {
      setIsModalOpen(false);
    };

  return (
    <Container>
      <Sidebar openModal={openModal} />
      <section className="vehicle-info section space-y-16 xxl:space-y-24 mt-3">
        <div>
          <Image
            src={car.coverImage}
            alt="cover"
            width={500}
            height={100}
            className="w-full hover:cursor-pointer hover:opacity-75 hover:scale-105 transform transition ease-out duration-500 cursor-pointer"
          />
        </div>
        <div className="md:max-w-screen-xl mx-auto px-5 xxl:px-0 text-gray-900">
          <div className="text-3xl text-gray-800 font-semibold capitalize">
            POWERED BY PURPOSE
          </div>
          <div className="px-5 text-left lg:px-0">
            {car.features.map((feature, index) => (
              <p key={index} className="text-lg text-gray-800">
                {feature}
              </p>
            ))}
          </div>
        </div>
        <div className="md:max-w-screen-xl mx-auto px-5 xxl:px-0 text-gray-900">
          <div className="text-3xl text-gray-800 font-semibold capitalize">
            OFF-ROAD PERFORMANCE
          </div>
          {/* Add more car data properties as needed */}
          <div className="mt-3">
            <div className="text-2xl font-semibold text-gray-800 capitalize">
              RIGID LADDER FRAME CHASSIS
            </div>
            <p className="text-lg text-gray-800">
              From the very first generation, the Jimny has always featured a
              ladder frame that offers a solid foundation for serious off-road
              performance.
            </p>
          </div>
          <div className="mt-3">
            <div className="text-2xl font-semibold text-gray-800 capitalize">
              3-LINK RIGID AXLE SUSPENSION WITH COIL SPRINGS
            </div>
            <p className="text-lg text-gray-800">
              The new Jimny has full-width rigid axles in both the front and
              rear to ensure superior grip on diverse surfaces. When an obstacle
              pushes one wheel up, the axle presses the other wheel down.
            </p>
          </div>
          {/* Add more car data properties as needed */}
        </div>
        <div className="md:max-w-screen-xl mx-auto px-5 xxl:px-0 text-gray-900 content">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div className="flex items-center w-full">
              <div>
                <div className="text-3xl text-gray-800 font-semibold capitalize">
                  READY FOR ANYTHING
                </div>
                <p className="text-lg text-gray-800">
                  Expand your rear storage area by folding the back seats. Flat
                  across, the expanded space allows crosswise storage of wide
                  items. Screw holes provide support for optional accessories
                  like luggage bars and utility hooks. Convenient pockets and
                  trays keep your smartphone and gadgets within reach. USB and
                  accessory sockets are close by to connect and power your
                  devices.
                </p>
              </div>
            </div>
            <div className="image-scale-effect-small">
              <Image
                className="max-w-full h-auto"
                src={car.coverImage}
                alt="banner image"
                width={1500}
                height={500}
              />
            </div>
          </div>
        </div>
        {/* Previous code (cover image 2) */}
        <div className="md:max-w-screen-xl mx-auto px-5 xxl:px-0 text-gray-900">
          <div className="text-3xl md:text-5xl text-gray-800 font-semibold capitalize">
            Features
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-1">
            <div>
              <div className="mt-4">
                <p className="text-lg text-gray-800 font-semibold">STEADY ON</p>
                <p className="text-lg text-gray-800">
                  The new Jimny comes with a range of protective advances to
                  keep you safe out in the wild or in the city.
                </p>
              </div>
              <div className="mt-4">
                <p className="text-lg text-gray-800 font-semibold">
                  BRAKE LSD TRACTION CONTROL
                </p>
                <p className="text-lg text-gray-800">
                  If two wheels diagonal from each other lose grip while you’re
                  travelling over slippery surfaces, this feature is designed to
                  automatically brake the slipping wheels and redistribute
                  torque to the other two wheels.
                </p>
              </div>
              {/* Add more car data properties as needed */}
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          <div className="image-scale-effect-small">
            <Image
              className="w-full h-full object-cover"
              src={car.images[2]}
              alt="banner image"
              width={1500}
              height={500}
            />
          </div>
          <div className="order-2 lg:order-1 image-scale-effect-small">
            <Image
              className="w-full"
              src={car.images[1]}
              alt="banner image"
              width={1500}
              height={500}
            />
          </div>
          <div className="order-3">
            <Image
              className="w-full"
              src={car.images[0]}
              alt="banner image"
              width={1500}
              height={500}
            />
          </div>
          {/* Add more car feature images as needed */}
        </div>
        <div className="md:max-w-screen-xl mx-auto px-5 xxl:px-0 text-gray-900 space-y-1">
          <p>
            *All the information provided is manufacturer’s data and may vary
            for each market.
          </p>
          <p>*The specifications are subject to change without prior notice.</p>
        </div>
      </section>
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        imageSrc={car.coverImage} // Pass the image source to the modal
      />
    </Container>
  );
}
