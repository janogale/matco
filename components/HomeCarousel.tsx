import { Carousel } from "flowbite-react";
import Image from "next/image";
import Skeleton from 'react-loading-skeleton';

function HomeCarousel() {
  return (
    <div className="h-96 md:h-screen rounded-none bg-slate-400">
      <Carousel className="rounded-none">
        <div className="relative h-full w-full">
        <Skeleton height={200} width={200} />
          <Image
            src="/images/home/207.webp"
            alt="Swift"
            placeholder="blur"
            blurDataURL="/images/home/207.webp" // Provide a base64-encoded placeholder
            loading="lazy"
            quality={100}
            fill
            sizes="100vw"
            style={{
              objectFit: "cover",
            }} // Apply objectFit directly to the Image component
          />
          <div className="absolute h-6 sm:h-12 z-50 bottom-16 left-4">
            <Image
              src="/images/models/swift/logo.png"
              alt="Swift Logo"
              width={200}
              height={200}
              loading="lazy"
            />
          </div>
        </div>
        <div className="relative h-full w-full">
          <Image
            src="/images/home/jac.webp"
            alt="Jac"
            placeholder="blur"
            blurDataURL="/images/home/jac.webp"
            loading="lazy"
            quality={100}
            fill
            sizes="100vw"
            style={{
              objectFit: "cover",
            }}
          />
          <div className="absolute h-6 sm:h-12 z-50 bottom-16 left-4">
            <Image
              src="/images/jaclogo.png"
              alt="Jac Logo"
              width={200}
              height={200}
              loading="lazy"
            />
          </div>
        </div>
        <div className="relative h-full w-full">
          <Image
            src="/images/home/poster-img.webp"
            alt="Grant Vitara"
            placeholder="blur"
            blurDataURL="/images/home/poster-img.webp"
            loading="lazy"
            quality={100}
            fill
            sizes="100vw"
            style={{
              objectFit: "cover",
            }}
          />
          <div className="absolute h-6 sm:h-12 z-50 bottom-16 left-4">
            <Image
              src="/images/models/grant-vitara/logo.png"
              alt="Grant Vitara Logo"
              width={200}
              height={200}
              loading="lazy"
            />
          </div>
        </div>
        <div className="relative h-full w-full">
          <Image
            src="/images/home/n-series.webp"
            alt="N Series"
            placeholder="blur"
            blurDataURL="/images/home/n-series.webp"
            loading="lazy"
            quality={100}
            fill
            sizes="100vw"
            style={{
              objectFit: "cover",
            }}
          />
          <div className="absolute h-6 sm:h-12 z-50 bottom-16 left-4">
            <Image
              src="/images/jaclogo.png"
              alt="N Series Logo"
              width={200}
              height={200}
              loading="lazy"
            />
          </div>
        </div>
        <div className="relative h-full w-full">
          <Image
            src="/images/home/jimny.webp"
            alt="Jimny"
            placeholder="blur"
            blurDataURL="/images/home/jimny.webp"
            loading="lazy"
            quality={100}
            fill
            sizes="100vw"
            style={{
              objectFit: "cover",
            }}
          />
          <div className="absolute h-6 sm:h-12 z-50 bottom-16 left-4">
            <Image
              src="/images/jemnylogo.png"
              alt="Jimny Logo"
              width={200}
              height={200}
              loading="lazy"
            />
          </div>
        </div>
      </Carousel>
    </div>
  );
}

export default HomeCarousel;
