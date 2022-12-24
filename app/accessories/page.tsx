"use client";

import Image from "next/image";
import Navbar from "../../components/Navbar";
import Heading from "../../components/ui/Heading";
import { accessoriesData } from "../../sampledata";
import { FilterAccessories } from "../../components/ui/FilterAccessories";
import Container from "../../components/ui/Container";
import { Accessories } from "../../components/Accessories";
import banner from "../../public/images/accessories/acc-cover.jpg";

export declare interface IAccessoriesType {
  id: number | string;
  image: string;
  name: string;
  partNumber: string;
  description: string;
  usedFor: string[];
}

export default function AccessoriesPage() {
  return (
    <div className="mx-5">
      <Navbar />
      <Container>
        <div className="rounded-lg overflow-hidden w-full h-96 min-h-96 mt-28">
            <Image
              className="max-w-full h-auto"
              src={banner}
              alt="banner image"
              width={1500}
              height={500}
            />
        </div>
        <div className="sm:mt-10">
          <Heading>
            <div className="flex justify-between items-center">
              <h1>Accessories</h1>
              <FilterAccessories />
            </div>
          </Heading>
          <Accessories accessories={accessoriesData} />
        </div>
      </Container>
    </div>
  );
}
