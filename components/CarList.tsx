import ImageCard from "./ui/ImageCard";

const cars = [
  {
    id: 1,
    href: "#",
    imageSrc: "/images/models/swift/1.png",
    alt: "New Swift",
    logo: "/images/swiftlogo.png",
  },
  {
    id: 2,
    href: "#",
    imageSrc: "/images/models/celerio/1.png",
    alt: "Beleno",
    logo: "/images/celeriologo.png",
  },
  {
    id: 3,
    href: "#",
    imageSrc: "/images/models/ciaz/1.png",
    alt: "CIAZ",
    logo: undefined,
  },
  {
    id: 4,
    href: "#",
    imageSrc: "/images/models/baleno/1.jpeg",
    alt: "Celerio",
    logo: "/images/celeriologo.png",
  },
];

export default function CarList() {
  return (
    <div className="bg-white">
      <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 ">
        {cars.map((car) => (
          <div key={car.id}>
            <ImageCard img={car.imageSrc} logo={car.logo} alt={car.alt} />
          </div>
        ))}
      </div>
    </div>
  );
}
