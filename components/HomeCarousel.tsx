import { Carousel } from "flowbite-react";

function HomeCarousel() {
  return (
    <div className="h-96 md:h-screen rounded-none bg-slate-400">
      <Carousel className="rounded-none">
        <div className="relative h-full w-full bg-no-repeat bg-cover bg-center bg-fixed bg-[url('/images/models/swift/207.jpg')]">
          <img
            src="/images/swiftlogo.png"
            alt="..."
            className="absolute h-6 sm:h-12 z-50 bottom-16 left-4"
          />
        </div>
        <div className="relative h-full w-full bg-no-repeat bg-cover bg-center bg-fixed bg-[url('/images/models/jac/jac.jpg')]">
          <img
            src="/images/jaclogo.png"
            alt="..."
            className="absolute h-6 sm:h-12 z-50 bottom-16 left-4"
          />
        </div>
        <div className="relative h-full w-full bg-no-repeat bg-cover bg-center bg-fixed bg-[url('/images/models/jac/jac.jpg')]">
          <img
            src="/images/jaclogo.png"
            alt="..."
            className="absolute h-6 sm:h-12 z-50 bottom-16 left-4"
          />
        </div>
        <div className="relative h-full w-full bg-no-repeat bg-cover bg-center bg-fixed bg-[url('/images/models/jac/n-series.jpg')]">
        <img
            src="/images/jaclogo.png"
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
