import React from "react";
import CarsItem from "./CarsItem";
import { TCar } from "../CarList";
const CarsList = ({ cars }: { cars: TCar[] }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-y-12 gap-x-6 justify-items-center">
      {cars.map((car: any) => (
        <CarsItem key={car.id} car={car} />
      ))}
    </div>
  );
};

export default CarsList;
