"use client";

import React, { useState, ChangeEvent, FormEvent } from "react";
import Image from "next/image";

import Button from "../form/Button";
import TextInput from "../form/Input";
import SelectInput from "../form/Select";
import CheckboxInput from "../form/Checkbox";
import { carsData } from '../../sampledata/index'

interface FormData {
  carOptions: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
  showroom: string;
  prefix: string;
  PurchaseType: string;
  hearUs: string;
  confirm: boolean;
  latestUpdates: boolean;
}

const GetQouteForm = () => {
  const [formData, setFormData] = useState<FormData>({
    carOptions: "Vitra",
    firstName: "",
    lastName: "",
    email: "",
    showroom: "New Hargeisa",
    phoneNumber: "",
    prefix: "Mr",
    PurchaseType: "Individual",
    hearUs: "Email",
    confirm: false,
    latestUpdates: false,
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;

    let newValue: string | boolean;
    if (type === "checkbox") {
      newValue = (e.target as HTMLInputElement).checked;
    } else {
      newValue = value;
    }

    setFormData((prevData) => ({
      ...prevData,
      [name]: newValue,
    }));
  };

  const handleCarOptionClick = (optionValue: string) => {
    setFormData((prevData) => ({
      ...prevData,
      carOptions: optionValue,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
  };

  const selectOptions = [
    { value: "select option", label: "Select Option" },
    { value: "Mr", label: "Mr" },
    { value: "Mrs", label: "Mrs" },
  ];

  const PurchaseType = [
    { value: "purchase type", label: "Select Purchase type" },
    { value: "individual", label: "Individual" },
    { value: "company", label: "Company" },
  ];

  const showroom = [
    { value: "showroom", label: "Select showroom" },
    { value: "new hargeisa", label: "New Hargeisa" },
    { value: "Pepsi", label: "Pepsi" },
  ];

  const hearUs = [
    { value: "hear us", label: "Where do you hear us" },
    { value: "email", label: "Email" },
    { value: "friend", label: "Friend" },
    { value: "google", label: "Google" },
    { value: "Internet", label: "Web - Internet" },
    { value: "social media", label: "Social Media" },
    { value: "others", label: "Others" },
  ];

  const carOptions = [
    { value: "Coupe", label: "Coupe" },
    { value: "SUV", label: "SUV" },
    { value: "Sedan", label: "Sedan" },
    { value: "Hatchback", label: "Hatchback" },
  ];

  return (
    <form onSubmit={handleSubmit} className="">
      <div className="col-span-2">
        <p className="block text-lg font-medium text-gray-800 mb-2">
          Select a model
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-x-5 gap-y-2 items-center lg:justify-between">
          {carsData.map((option) => (
            <label
              key={option.id}
              className={`rounded-md lg:text-center w-full ${
                formData.carOptions === option.name
                  ? "border bg-gray-200"
                  : "border-none bg-transparent"
              }`}
            >
              <p
                onClick={() => handleCarOptionClick(option.name)}
                className={`font-normal cursor-pointer text-xl uppercase bg-black text-white rounded p-1 lg:text-center border w-full ${
                  formData.carOptions === option.name
                    ? "border-blue-600 bg-[rgb(2,132,199)]"
                    : "border-transparent bg-white"
                }`}
              >
                <span className="flex items-center justify-center h-12">
                  {option.logo ? <img src={option.logo} alt={option.name} /> : <span className="italic font-bold">{option.name}</span>}
                </span>
              </p>
            </label>
          ))}
        </div>
      </div>
      <hr className="my-5 text-red-500" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-10">
        <SelectInput
          label="Select option"
          name="prefix"
          value={formData.prefix}
          onChange={handleChange}
          options={selectOptions}
        />

        <SelectInput
          label="Purchase Type"
          name="PurchaseType"
          value={formData.PurchaseType}
          onChange={handleChange}
          options={PurchaseType}
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-10">
        <TextInput
          label="First Name"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          placeholder="Enter your first name"
        />

        <TextInput
          label="Last Name"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          placeholder="Enter your last name"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-10">
        <TextInput
          label="Phone Number"
          name="phoneNumber"
          placeholder="Enter your number"
          value={formData.phoneNumber}
          onChange={handleChange}
        />

        <TextInput
          label="Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter your email"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-10">
        <SelectInput
          label="Nearest showroom you can visit"
          name="showroom"
          value={formData.showroom}
          onChange={handleChange}
          options={showroom}
        />

        <SelectInput
          label="How did you hear about us"
          name="hearUs"
          value={formData.hearUs}
          onChange={handleChange}
          options={hearUs}
        />
      </div>
      <hr className="my-5 text-red-500" />
      <div>
        <CheckboxInput
          label="Please confirm you have read and agree to our Terms and Conditions *"
          name="confirm"
          checked={formData.confirm}
          onChange={handleChange}
          className="mt-1 text-red-600"
        />
        <CheckboxInput
          label="Check this for latest offers, deals and updates."
          name="latestUpdates"
          checked={formData.latestUpdates}
          onChange={handleChange}
          className="mt-1"
        />
      </div>
      <hr className="my-5 text-red-500" />
      <div className="col-span-2 flex justify-center">
        <Button
          label="Submit"
          className="bg-sky-600 text-white px-4 py-2 w-full rounded-md font-semibold hover:bg-sky-500"
        />
      </div>
    </form>
  );
};

export default GetQouteForm;
