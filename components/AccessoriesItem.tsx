import Image from "next/image";
import { IAccessoriesType } from "../app/accessories/page";

export const AccessoriesItem = ({ acc }: { acc: IAccessoriesType }) => {
  return (
    <div className="bg-white w-full max-w-md rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 hover:shadow-2xl">
      <div className="flex justify-center relative rounded-lg overflow-hidden h-52">
        <div className="transition-transform duration-500 transform ease-in-out hover:scale-110 w-full">
          <div className="absolute inset-0">
            <Image className="rounded-t-lg" src={acc.image} alt="" width={500} height={500} />
          </div>
        </div>
      </div>
      <div className="px-5 pb-5">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {acc.name.toUpperCase()}
        </h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{`${acc.model.toUpperCase()} ${
          acc.id
        }`}</p>
      </div>
    </div>
  );
};
