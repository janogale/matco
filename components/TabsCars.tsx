import { Tabs } from "flowbite-react";
import CarList from "./CarList";

// sample data
import { carsData } from "../sampledata";

const celerioCars = carsData.filter((car) =>
  car.name.toLowerCase().includes("celerio")
);
const swiftCars = carsData.filter((car) =>
  car.name.toLowerCase().includes("swift")
);

const jemnyCars = carsData.filter((car) =>
  car.name.toLowerCase().includes("jimny")
);

const jacCars = carsData.filter((car) =>
  car.name.toLowerCase().includes("jac")
);

export default function TabsCars() {
  return (
    <Tabs.Group aria-label="Tabs" style="underline">
      {/* <Tabs.Item title="All">
        <CarList cars={carsData} />
      </Tabs.Item>

      <Tabs.Item title="Swift">
        <CarList cars={swiftCars} />
      </Tabs.Item>
      <Tabs.Item title="Celerio">
        <CarList cars={celerioCars} />
      </Tabs.Item>
      <Tabs.Item title="Jimny">
        <CarList cars={jemnyCars} />
      </Tabs.Item>
      <Tabs.Item title="JAC">
        <CarList cars={jacCars} />
      </Tabs.Item> */}
    </Tabs.Group>
  );
}
