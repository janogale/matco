"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Heading from "../../components/ui/Heading";
import { accessoriesData } from "../../sampledata";
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

    if(accessoriesData.length === 0){
      return <div> <p  className='text-center text-red-500 font-bold'>No accessories data to show</p> </div>
    };

  return (
    <div className="mx-5">
      <Container>
        <div className="rounded-lg overflow-hidden w-full h-96 min-h-96 mt-10">
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
              {/* <div>
                <select
                  id="accessories"
                  value={selectedUse}
                  onChange={handleSelected}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                  <option selected>Filter</option>
                  <option value="All">All</option>
                  <option value="CA">Canada</option>
                  <option value="FR">France</option>
                  <option value="DE">Germany</option>
                </select>
              </div> */}
             <div className="flex justify-center items-center">
             <label htmlFor="use-select" className="mx-3">Filter by use:</label>
              <select
                id="use-select"
                value={selectedUse}
                onChange={handleSelected}
                className="rounded"
              >
                <option value="">All</option>
                {filteringOption}
              </select>
             </div>
            </div>
          </Heading>
          <Accessories accessories={filteredAccessories} />
        </div>
      </Container>
    </div>
  );
}
