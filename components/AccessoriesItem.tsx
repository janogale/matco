import Image from "next/image";
import { Card } from "flowbite-react";
import { IAccessoriesType } from "../app/accessories/page";

export const AccessoriesItem = ({
  accessoriesItem,
}: {
  accessoriesItem: IAccessoriesType;
}) => {
  return (
    <div className="max-w-sm">
      <Card
        className="transition-transform duration-500 transform ease-in-out hover:scale-110"
        imgAlt="Meaningful alt text for an image that is not purely decorative"
        imgSrc={accessoriesItem.image}
      >
        <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
          {accessoriesItem.name}
        </h5>
        <p className="text-sm"><span className="font-bold">Part No:</span> {accessoriesItem.partNumber}</p>
        <p className="mb-5 text-base text-gray-500 dark:text-gray-400 sm:text-md">
          {accessoriesItem.description}
        </p>
      </Card>
    </div>
  );
};
