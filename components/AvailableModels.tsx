import React from "react";
import Banner from "./ui/Banner";

interface CarType {
  id: number;
  name: string;
  type: string;
  colors?: string[];
}

const carTypes: CarType[] = [
  {
    id: 1,
    name: "Vitra",
    type: "Suzuki",
    colors: ["White", "Gold", "Grey", "Silver", "Blue", "Ice-blue"],
  },
  {
    id: 2,
    name: "Swift",
    type: "Suzuki",
    colors: [],
  },
  {
    id: 3,
    name: "Jimny",
    type: "Suzuki",
    colors: [],
  },
  {
    id: 4,
    name: "Ertiga",
    type: "Suzuki",
    colors: [],
  },
  {
    id: 5,
    name: "Grand Vitra (coming soon)",
    type: "Suzuki",
    colors: [],
  },
  {
    id: 6,
    name: "T8 Pickup",
    type: "JAC Models",
    colors: [],
  },
  {
    id: 7,
    name: "N Series Single Cabin 3ton",
    type: "JAC Models",
    colors: [],
  },
  {
    id: 8,
    name: "N Series Double Cabin 3ton",
    type: "JAC Models",
    colors: [],
  },
  {
    id: 9,
    name: "Van 3 ton",
    type: "JAC Models",
    colors: [],
  },
  {
    id: 10,
    name: "Van 4 ton",
    type: "JAC Models",
    colors: [],
  },
  {
    id: 11,
    name: "Van 5 ton",
    type: "JAC Models",
    colors: [],
  },
  {
    id: 12,
    name: "Sunray Amblunce",
    type: "JAC Models",
    colors: [],
  },
  {
    id: 13,
    name: "Sunray Bus 17 Seats",
    type: "JAC Models",
    colors: [],
  },
  {
    id: 14,
    name: "Sunray Cargo Van",
    type: "JAC Models",
    colors: [],
  },
];

const CarTypes: React.FC = () => {
  const suzukiCars = carTypes.filter((carType) => carType.type === "Suzuki");
  const jacCars = carTypes.filter((carType) => carType.type === "JAC Models");

  return (
    <div className="container mx-auto p-4">
      <Banner text1="Available Models" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-3">
        <div className="border border-gray-200 rounded p-10">
          <h2 className="text-2xl font-bold mb-2">Suzuki</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {suzukiCars.map((carType) => (
              <div
                key={carType.id}
              >
                <h3 className="font-semibold mb-2"> <span>{carType.id}.</span> {carType.name}</h3>
                <ul className="text-gray-600">
                  {carType.colors?.map((color) => (
                    <li key={color} className="flex items-center">
                      <div
                        className="w-4 h-4 rounded-full mr-2"
                        style={{ backgroundColor: color }}
                      ></div>
                      {color}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="border border-gray-200 rounded p-10">
          <h2 className="text-2xl font-bold mb-2">JAC Models</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {jacCars.map((carType) => (
              <div
                key={carType.id}
              >
                <h3 className="font-semibold mb-2"> <span>{carType.id}.</span> {carType.name}</h3>
                <ul className="text-gray-600">
                  {carType.colors?.map((color) => (
                    <li key={color} className="flex items-center">
                      <div
                        className="w-4 h-4 rounded-full mr-2"
                        style={{ backgroundColor: color }}
                      ></div>
                      {color}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarTypes;
