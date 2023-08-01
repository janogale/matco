import ImageCard from "./ui/ImageCard";

export type TCar = {
  id: number;
  name: string;
  description: string;
  coverImage: string;
  images: string[];
  features: string[];
  logo?: string;
};

export default function CarList({ cars }: { cars: TCar[] }) {
  return (
    <div className="bg-white">
      <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 ">
        {cars.map((car) => (
          <div key={car.id}>
            <ImageCard img={car.coverImage} logo={car.logo} alt={car.name} />
          </div>
        ))}
      </div>
    </div>
  );
}
