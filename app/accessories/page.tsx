"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Navbar from "../../components/Navbar";
import Heading from "../../components/ui/Heading";
import { accessoriesData } from "../../sampledata";
import Container from "../../components/ui/Container";
import { Accessories } from "../../components/Accessories";
import banner from "../../public/images/accessories/acc-cover.jpg";
import { Dropdown, Select } from "flowbite-react";

export declare interface IAccessoriesType {
  id: number | string;
  image: string;
  name: string;
  partNumber: string;
  description: string;
  usedFor: string[];
}

export default function AccessoriesPage() {
  const [selectedUse, setSelectedUse] = useState("");
  const [filteredAccessories, setFilteredAccessories] =
    useState(accessoriesData);

  useEffect(() => {
    if (selectedUse === "") {
      setFilteredAccessories(accessoriesData);
    } else {
      setFilteredAccessories(
        accessoriesData.filter((accessory) =>
          accessory.usedFor.includes(selectedUse)
        )
      );
    }
  }, [selectedUse]);

  const handleSelected = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setSelectedUse(e.target.value);
  };

  const filteringOption = Array.from(
    new Set(accessoriesData.flatMap((a) => a.usedFor))
  )
    .sort()
    .map((use) => (
      <option value={use} key={use}>
        {use}
      </option>
    ));

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
              <label htmlFor="use-select">Filter by use:</label>
              <select
                id="use-select"
                value={selectedUse}
                onChange={handleSelected}
              >
                <option value="">All</option>
                {filteringOption}
              </select>
            </div>
          </Heading>
          <Accessories accessories={filteredAccessories} />
        </div>
      </Container>
    </div>
  );
}
