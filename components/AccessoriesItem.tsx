import React from "react";
import { IAccessoriesType } from "../app/accessories/page";

export const AccessoriesItem = ({ acc }: { acc: IAccessoriesType }) => {
  return (
    <div className="w-full max-w-sm bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 hover:shadow-2xl">
      <div className="flex justify-center relative rounded-lg overflow-hidden h-52">
        <div className="transition-transform duration-500 transform ease-in-out hover:scale-110 w-full">
          <div className="absolute inset-0">
            <img className="rounded-t-lg" src={acc.image} alt="" />
          </div>
        </div>
      </div>
      <div className="px-5 pb-5">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {acc.name.toUpperCase()}
        </h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{`${acc.serial.toUpperCase()} ${
          acc.id
        }`}</p>
        <div className="flex items-center justify-between">
          <a
            href="#"
            className="text-black ring-2 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-2 py-2 text-center flex"
          >
            Read More
            <svg
              className="w-6 h-6 ml-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </a>
          <span className="text-3xl font-bold text-gray-900 dark:text-white">
            $599
          </span>
        </div>
      </div>
    </div>
  );
};
