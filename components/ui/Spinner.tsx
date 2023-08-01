"use client";

import { Button, Spinner } from "flowbite-react";

import Container from "./Container";

export default function Buttons() {
  return (
    <Container>
      <Spinner aria-label="Alternate spinner button example" />
      <span className="pl-3">Loading...</span>
    </Container>
  );
}
