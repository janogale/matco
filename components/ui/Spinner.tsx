"use client";

import { Button, Spinner } from "flowbite-react";

import Container from "./Container";

export default function Buttons() {
  return (
    <div className="flex justify-center items-center">
      <Spinner aria-label="Alternate spinner button example" />
      <span className="pl-3 text-lg text-gray-400 font-semibold">Something magic is going on</span>
    </div>
  );
}
