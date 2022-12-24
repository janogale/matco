import { IAccessoriesType } from "../app/accessories/page";
import { AccessoriesItem } from "./AccessoriesItem";

export const Accessories = ({
  accessories,
}: {
  accessories: IAccessoriesType[];
}) => {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 justify-items-center gap-5 my-16 cursor-pointer">
        {accessories.map((accessoriesItem: IAccessoriesType) => {
          return (
            <AccessoriesItem
              accessoriesItem={accessoriesItem}
              key={accessoriesItem.id}
            />
          );
        })}
      </div>
    </>
  );
};
