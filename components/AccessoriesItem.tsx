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
      <div>
        <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white mb-2">
          {accessoriesItem.name.toUpperCase()}
        </h5>
        <p className="my-3 mb-2 text-base text-gray-500 dark:text-gray-400 sm:text-md">
          {accessoriesItem.description}
        </p>
        <hr />
        <p className="text-sm mt-1 my-2">
          <span className="font-bold mr-10">PART NO:</span>
          <span>{accessoriesItem.partNumber}</span>
        </p>
        <hr />
      </div>
    </Card>
  );
};
