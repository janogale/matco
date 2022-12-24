"use client";

import Image from "next/image";
import Navbar from "../../components/Navbar";
import Heading from "../../components/ui/Heading";
import { accessoriesData } from "../../sampledata";
import Container from "../../components/ui/Container";
import { Accessories } from "../../components/Accessories";
import  banner  from '../../public/images/accessories/acc-cover.jpg';

export declare interface IAccessoriesType {
  id: number | string;
  image: string;
  name: string;
  model: string;
}

export default function AccessoriesPage() {
  return (
    <div>
     <Navbar />
      <Container>
        <div className="rounded-lg overflow-hidden h-96 mt-28">
          <div className="inset-0 h-48">
            <Image className="rounded-t-lg" src={banner} alt="banner image" width={1500} height={500} />
          </div>
      </div>
        <div className="mt-10">
          <Heading>Accessories</Heading>
          <Accessories accessories={accessoriesData} />
        </div>
      </Container>
    </div>
  );
};
