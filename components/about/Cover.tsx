import Image from "next/image";
import ImageBanner from "../../public/images/about/picture1.png";

export default function Cover() {
  return (
    <div className="rounded-lg overflow-hidden w-full h-96 min-h-96">
      <Image
        src={ImageBanner}
        alt="cover"
        width={500}
        height={500}
        className="w-full h-auto group text-center rounded-md bg-white hover:cursor-pointer hover:opacity-75 hover:scale-105 transform transition ease-out duration-500 cursor-pointer"
      />
    </div>
  );
}
