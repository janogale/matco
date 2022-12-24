"use client";

import Heading from "../../components/ui/Heading";
import { Accessories } from "../../components/Accessories";
import { accessoriesData } from "../../sampledata";
import Navbar from "../../components/Navbar";
import Container from "../../components/ui/Container";
import ImageCard from "../../components/ui/ImageCard";

export declare interface IAccessoriesType {
  id: number | string;
  image: string;
  name: string;
  serial: string;
}

export default function AccessoriesPage() {
  return (
    <div>
     <Navbar />
      <Container>
      {/* <div className="my-16"></div>
        <div className="w-full">
          <ImageCard img="/images/accessories/acc-cover.jpg" alt="" />
        </div> */}
        <div className="rounded-lg overflow-hidden h-96 mt-28">
          <div className="inset-0 h-48">
            <img className="rounded-t-lg" src="/images/accessories/acc-cover.jpg" alt=""  />
          </div>
      </div>
        <div className="mt-10" >
          <Heading>Accessories</Heading>
          <Accessories accessories={accessoriesData} />
        </div>
      </Container>
    </div>
  );
}
