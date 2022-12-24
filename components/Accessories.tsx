import React from "react";
import { IAccessoriesType } from "../app/accessories/page";
import { AccessoriesItem } from "./AccessoriesItem";

export const Accessories = ({
  accessories,
}: {
  accessories: IAccessoriesType[];
}) => {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 justify-items-center gap-5 my-16 cursor-pointer hover:">
        {accessories.map((acc: IAccessoriesType) => {
          return <AccessoriesItem acc={acc} key={acc.id} />;
        })}
      </div>
    </>
  );
};
