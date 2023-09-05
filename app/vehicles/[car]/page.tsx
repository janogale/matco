"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import imageUrlBuilder from "@sanity/image-url";
import { PortableText } from "@portabletext/react";

import config from "../../../sanity.config";
import { Car } from "../../../sanity/types/car";
import Sidebar from "../../../components/Sidebar";
import Modal from "../../../components/modal/Modal";
import Spinner from "../../../components/ui/Spinner";
import { getCar } from "../../../sanity/schemas/utils";
import Container from "../../../components/ui/Container";

type Props = {
  params: { car: string };
};

export default function CarDetailsPage({ params }: Props) {
  const [pathname, setPathname] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [carDetails, setCarDetails] = useState<Car | null>(null); // Initialize with null.

  const slug = params.car;

  useEffect(() => {
    async function fetchCarDetails() {
      const details = await getCar(slug);
      setCarDetails(details);
    }

    fetchCarDetails();
    setPathname(window.location.pathname);
  }, [slug]);

  useEffect(() => {
    setPathname(window.location.pathname);
  }, []);

  if (!carDetails) {
    return (
      <div className="mt-20 h-[50vh] flex justify-center items-center">
        <Spinner />
      </div>
    );
  }

  // Function to open the modal
  const openModal = () => {
    setIsModalOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  const builder = imageUrlBuilder(config);

  function urlFor(source: any) {
    return builder.image(source);
  }


  const ptComponents = {
    types: {
      image: ({ value }: { value: any }) => (
        <Image
          src={urlFor(value).url()}
          alt="Image"
          width={800}
          height={800}
          className="w-full h-full max-h-[30rem] hover:scale-105 transform transition ease-out duration-500 cursor-pointer"
        />
      ),
    },
  };

  return (
    <Container>
      <Sidebar openModal={openModal} />
      <div className="mt-10 mb-20 rounded-lg overflow-hidden w-full">
        <Image
          src={carDetails.coverImage}
          width={1000}
          height={700}
          alt="Modal Image"
          className="w-full h-auto group text-center rounded-md bg-white hover:cursor-pointer hover:opacity-75 hover:scale-105 transform transition ease-out duration-500 cursor-pointer"
        />
      </div>
      <div className="divide-y pb-7 xl:divide-x-0">
        <div className="divide-y xl:col-span-3 xl:row-span-2 lg:pb-0">
          <div className="prose max-w-none pb-8 pt-10 prose-lg">
            <PortableText
              value={carDetails.content}
              components={ptComponents}
            />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 items-center mt-10">
        <div className="order-2 lg:order-1 p-1 w-full h-full">
          <Image
            src={carDetails.frontImage}
            width={1500}
            height={1500}
            alt={carDetails.name}
            className="w-full h-full group text-center rounded-md bg-white hover:cursor-pointer hover:opacity-75 hover:scale-105 transform transition ease-out duration-500 cursor-pointer"
          />
        </div>
        <div className="w-full order-1 lg:order-2">
          <PortableText value={carDetails.features} />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 items-center mt-20">
        {carDetails.featureImages &&
          carDetails.featureImages.map((image, index) => (
            <Image
              key={index}
              src={image}
              width={200}
              height={200}
              alt={carDetails.name}
              className="w-full h-full group text-center rounded-md bg-white hover:cursor-pointer hover:opacity-75 hover:scale-105 transform transition ease-out duration-500 cursor-pointer"
            />
          ))}
      </div>
      <div className="my-20">
        <p>
          {" "}
          *All the information provided are manufacturer’s data and may vary for
          each market.
        </p>

        <p>*The specifications are subject to change without prior notice.</p>
      </div>
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        imageSrc={carDetails.frontImage}
        brochure={carDetails.brochure}
        specificationSheet={carDetails.specificationSheet}
      />
    </Container>
  );
}
