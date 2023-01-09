import React from "react";
import { Card } from "flowbite-react";

const CarsItem = ({ car }: any) => {
  return (
    <Card
      imgAlt="Meaningful alt text for an image that is not purely decorative"
      imgSrc={car.image}
      className="w-full max-w-md"
    >
      <p className="text-xl text-gray-700 font-bold dark:text-gray-400">
        {car.name}
      </p>
      <h5 className="text-3xl font-bold tracking-tight text-green-500 dark:text-white">
        CALL FOR PRICE
      </h5>
      <hr />
      <p className="text-gray-400 dark:text-gray-400 flex justify-between items-center">
        <span>2022</span>
        <span>4485 km</span>
        <span>Petrol</span>
      </p>
      <hr />
      <p className="text-black flex justify-center items-center space-x-10">
        <span>998 cc</span>
        <span>Manual</span>
      </p>
    </Card>
  );
};

export default CarsItem;
