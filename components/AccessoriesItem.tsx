import Image from "next/image";
import { Card } from "flowbite-react";
import { IAccessoriesType } from "../app/accessories/page";

export const AccessoriesItem = ({
  accessoriesItem,
}: {
  accessoriesItem: IAccessoriesType;
}) => {
  return (
    <Card
        className="max-w-sm transition-transform duration-500 transform ease-in-out hover:scale-105 shadow-none border-none hover:shadow-md"
        imgAlt="Meaningful alt text for an image that is not purely decorative"
        imgSrc={accessoriesItem.image}
      >
    <div className="">
        <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
          {accessoriesItem.name}
        </h5>
        <p className="text-sm mt-1"><span className="font-bold">Part No:</span> {accessoriesItem.partNumber}</p>
        <p className="mt-5 mb-2 text-base text-gray-500 dark:text-gray-400 sm:text-md">
          {accessoriesItem.description}
        </p>
    </div>
      </Card>
  );
};
