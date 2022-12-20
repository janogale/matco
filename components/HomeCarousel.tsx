import { Carousel } from "flowbite-react";

function HomeCarousel() {
  return (
    <div className="h-96 md:h-screen rounded-none bg-slate-400">
      <Carousel className="rounded-none">
        <div className="relative h-full w-full bg-no-repeat bg-cover bg-center bg-fixed bg-[url('/images/swift.png')]">
          <img
            src="/images/swiftlogo.png"
            alt="..."
            className="absolute h-6 sm:h-12 z-50 bottom-16 left-4"
          />
        </div>
        <div className="relative h-full w-full bg-no-repeat bg-cover bg-center bg-fixed bg-[url('/images/jac1.webp')]">
          <img
            src="/images/jaclogo.png"
            alt="..."
            className="absolute h-6 sm:h-12 z-50 bottom-16 left-4"
          />
        </div>
        <div className="relative h-full w-full bg-no-repeat bg-cover bg-center bg-fixed bg-[url('/images/celerio.png')]">
          <img
            src="/images/celeriologo.png"
            alt="..."
            className="absolute h-6 sm:h-12 z-50 bottom-16 left-4"
          />
        </div>
        <div className="relative h-full w-full bg-no-repeat bg-cover bg-center bg-fixed bg-[url('/images/jimny.jpg')]">
          <img
            src="/images/jemnylogo.png"
            alt="..."
            className="absolute h-6 sm:h-12 z-50 bottom-16 left-4"
          />
        </div>
      </Carousel>
    </div>
  );
}

export default HomeCarousel;
