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
      <div className="my-20">
        <Image
          src={carDetails.coverImage}
          width={800}
          height={500}
          alt="Modal Image"
          className="rounded-lg w-full h-full max-h-96"
        />
        <PortableText value={carDetails.content} />
      </div>
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        imageSrc={carDetails.frontImage} // Pass the image source to the modal
      />
    </Container>
  );
}
