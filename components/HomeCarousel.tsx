import { Carousel } from "flowbite-react";

function HomeCarousel() {
  return (
    <div className="h-96 md:h-screen rounded-none">
      <Carousel className="rounded-none">
        <img src="/images/1.png" alt="..." />
        <img src="/images/celerio.png" alt="..." />
        <img src="/images/jimny.jpg" alt="..." />
        <img src="/images/swift.png" alt="..." />
      </Carousel>
    </div>
  );
}

export default HomeCarousel;
