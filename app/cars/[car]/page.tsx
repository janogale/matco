"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { PortableText } from "@portabletext/react";

import Sidebar from "../../../components/Sidebar";
import Modal from "../../../components/modal/Modal";
import Container from "../../../components/ui/Container";
import Spinner from "../../../components/ui/Spinner";
import { getCar } from "../../../sanity/schemas/utils";
import { Car } from "../../../sanity/types/car";

type Props = {
  params: { car: string };
};


export default function CarDetailsPage({ params }: Props) {
  const [pathname, setPathname] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [carDetails, setCarDetails] = useState<Car | null>(null); // Initialize with null

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
    return <Spinner />;
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
      <div className="mt-10 mb-20 rounded-lg overflow-hidden w-full">
        <Image
          src={carDetails.coverImage}
          width={1000}
          height={700}
          alt="Modal Image"
          className="w-full h-auto group text-center rounded-md bg-white hover:cursor-pointer hover:opacity-75 hover:scale-105 transform transition ease-out duration-500 cursor-pointer"
        />
      </div>
      <PortableText
       value={carDetails.content}
       />
      <div className="my-20">
        <p>
          {" "}
          *All the informations provided are manufacturer’s data and may vary
          for each market.
        </p>

        <p>*The specifications are subject to change without prior notice.</p>
      </div>
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        imageSrc={carDetails.frontImage} // Pass the image source to the modal
      />
    </Container>
  );
}
