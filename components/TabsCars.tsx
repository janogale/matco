import { Tabs, Card } from "flowbite-react";
import CarList from "./CarList";
import ImageCard from "./ui/ImageCard";

export default function TabsCars() {
  return (
    <Tabs.Group aria-label="Tabs" style="underline" className="text-2xl">
      <Tabs.Item title="All">
        <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4">
          <ImageCard
            img="/images/models/celerio/1.png"
            logo="/images/celeriologo.png"
            alt="Celerio"
          />
          <Card
            imgSrc="/images/models/celerio/1.png"
            className="hover:opacity-75"
          ></Card>
          <Card
            imgSrc="/images/models/celerio/1.png"
            className="hover:opacity-75"
          ></Card>
          <Card
            imgSrc="/images/models/celerio/1.png"
            className="hover:opacity-75"
          ></Card>
          <Card
            imgSrc="/images/models/celerio/1.png"
            className="hover:opacity-75"
          ></Card>
          <Card
            imgSrc="/images/models/celerio/1.png"
            className="hover:opacity-75"
          ></Card>
          <Card
            imgSrc="/images/models/celerio/1.png"
            className="hover:opacity-75"
          ></Card>
          <Card
            imgSrc="/images/models/celerio/1.png"
            className="hover:opacity-75"
          ></Card>
        </div>
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
