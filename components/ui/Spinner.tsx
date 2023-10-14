"use client";

import { Spinner } from "flowbite-react";


export default function Buttons() {
  return (
    <div className="flex justify-center items-center">
      <Spinner aria-label="Alternate spinner button example" />
      <span className="pl-3 text-lg text-gray-400 font-semibold">Please wait a little bit</span>
    </div>
  );
}
