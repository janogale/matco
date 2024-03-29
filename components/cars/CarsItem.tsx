import React from "react";
import { useRouter } from "next/navigation";
import { Card } from "flowbite-react";
import { FaRoad } from "react-icons/fa";
import { AiFillCar } from "react-icons/ai";
import { GiFuelTank } from "react-icons/gi";

const CarsItem = ({ car }: any) => {
  const router = useRouter();

  return (
    <Card
      imgAlt={car.name}
      imgSrc={car.image}
      onClick={() => router.push(`/cars/${car.id}`)}
      className="cursor-pointer"
    >
      <div className="flex justify-between items-center">
      <p className="text-xl text-gray-700 font-bold dark:text-gray-400">
        {car.name}
      </p>
      <h5 className="text-xl font-bold tracking-tight text-green-500 dark:text-white">
        {!car.price ? "CALL FOR PRICE" : `$ ${car.price}`}
      </h5>
      </div>
      <p className="text-gray-500">{car.description}</p>
      <hr />
      <p className="text-gray-400 dark:text-gray-400 flex justify-between items-center">
        <span className="flex justify-center items-center">
          <AiFillCar /> <span className="ml-1">{car.modalYear}</span>
        </span>
        <span className="flex justify-center items-center">
          <FaRoad /> <span className="ml-1">{car.km}</span>
        </span>
        <span className="flex justify-center items-center">
          <GiFuelTank /> <span className="ml-1">{car.fuelType}</span>
        </span>
      </p>
      <hr />
      <p className="text-black flex justify-center items-center space-x-10">
        <span>{car.engineCapacity}</span>
        <span>{car.carType.toUpperCase()}</span>
      </p>
    </Card>
  );
};

export default CarsItem;
