import Image from "next/image";
import ImageBanner from "../../public/images/about/picture1.png";

export default function Cover() {
  return (
    <div className="cover relative">
      <Image
        src={ImageBanner}
        alt="cover"
        className="w-full"
        width={500}
        height={500}
      />
      <div className="absolute inset-0 bg-black bg-opacity-25">
        <div className="md:max-w-screen-xl mx-auto px-5 xxl:px-0 text-gray-800 flex items-end h-full pb-8 md:pb-16 xxl:pb-32">
          <h1 className="leading-none md:leading-12">
            {/*  <span className="text-3xl md:text-5xl lg:text-6xl uppercase block text-white opacity-50 ml-64">
              us
            </span> */}
            <span className="text-4xl md:text-6xl lg:text-8xl uppercase block text-white">
              About us
            </span>
          </h1>
        </div>
      </div>
    </div>
  );
}
