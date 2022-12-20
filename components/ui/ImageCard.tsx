type CardProps = {
  img: string;
  alt: string;
  logo?: string;
};

export default function ImageCard({ img, alt, logo }: CardProps) {
  return (
    <div className="relative group text-center rounded-md bg-white overflow-hidden  shadow-md p-4 hover:cursor-pointer hover:opacity-75">
      <div className="w-full overflow-hidden ">
        <img
          src={img}
          alt={alt}
          className="h-full w-full object-cover object-center"
        />
      </div>
      {/* <h3 className=" text-gray-900">Celerio</h3> */}
      <div className="absolute flex justify-center inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black opacity-25">
        {!logo && (
          <h1 className="absolute bottom-3 font-mono font-bold  text-white">
            {alt}
          </h1>
        )}
        <img
          src={logo}
          alt={alt}
          className="absolute bottom-2 object-cover object-center h-8 "
        />
      </div>
    </div>
  );
}
