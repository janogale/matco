import { Tabs } from "flowbite-react";
import CarList from "./CarList";

export default function TabsCars() {
  return (
    <Tabs.Group aria-label="Tabs" style="underline" className="text-2xl">
      <Tabs.Item title="All">
        <CarList />
      </Tabs.Item>
      <Tabs.Item active={true} title="Dashboard">
        All
      </Tabs.Item>
      <Tabs.Item title="Swift">Swift</Tabs.Item>
      <Tabs.Item title="Celerio">Celerio</Tabs.Item>
      <Tabs.Item title="Jimny">Jimny</Tabs.Item>
    </Tabs.Group>
  );
}
