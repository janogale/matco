import React from "react";
import CarsItem from "./CarsItem";

const CarsList = ({ carsData }: any) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-2 justify-items-center">
      {carsData.map((car: any) => (
        <CarsItem key={car.id} car={car} />
      ))}
    </div>
  );
};

export default CarsList;
