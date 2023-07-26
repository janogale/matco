"use client";

import React, { useState, ChangeEvent, FormEvent } from "react";
import Image from "next/image";

import Button from "../form/Button";
import TextInput from "../form/Input";
import SelectInput from "../form/Select";
import CheckboxInput from "../form/Checkbox";
import { carsData } from "../../sampledata/index";

interface FormData {
  preferredBranch: string;
  serviceType: string;
  mobile: string;
  time: string;
  date: string;
  age: string;
  carOptions: string;
  modelYear: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
  showroom: string;
  prefix: string;
  PurchaseType: string;
  hearUs: string;
  confirm: boolean;
}

const GetQouteForm = () => {
  const [formData, setFormData] = useState<FormData>({
    preferredBranch: "",
    serviceType: "",
    mobile: "",
    time: "",
    date: "",
    carOptions: "Vitra",
    modelYear: "2022",
    firstName: "",
    lastName: "",
    age: "",
    email: "",
    showroom: "New Hargeisa",
    phoneNumber: "",
    prefix: "Mr",
    PurchaseType: "Individual",
    hearUs: "Email",
    confirm: false,
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

  // Extract unique car names from carsData
  const carNames = Array.from(new Set(carsData.map((car) => car.name)));

  // Extract unique model years from carsData
  const modelYears = Array.from(new Set(carsData.map((car) => car.modalYear)));

  const selectOptions = [
    { value: "", label: "Title" },
    { value: "Mr", label: "Mr" },
    { value: "Mrs", label: "Mrs" },
  ];

  const PurchaseType = [
    { value: "", label: "Select Purchase type" },
    { value: "individual", label: "Individual" },
    { value: "company", label: "Company" },
  ];

  const showroom = [
    { value: "", label: "Select showroom" },
    { value: "new hargeisa", label: "New Hargeisa" },
    { value: "Pepsi", label: "Pepsi" },
  ];

  const preferredBranch = [
    { value: "", label: "Preferred Branch" },
    { value: "new hargeisa", label: "New Hargeisa" },
    { value: "Pepsi", label: "Pepsi" },
  ];

  const serviceTypes = [
    { value: "", label: "Service Type" },
    { value: "service1", label: "First 5,000KM service" },
    { value: "service2", label: "10k/30k/50K/70K/90K KM Interim Service" },
    { value: "service3", label: "20K/60K/100K KM Semi-Major Service" },
    { value: "service4", label: "40K/80K KM Service Major Service" },
    { value: "service5", label: "Inspection & Diagnoses" },
    { value: "service6", label: "End Of Warranty Inspection" },
    { value: "service7", label: "General Repairs" },
    { value: "service8", label: "Accessories Fitment" },
    { value: "service9", label: "Recall Appointment" },
    { value: "service10", label: "Rust Proof/Paint Protection/Window Tinting" },
  ];

  const hearUs = [
    { value: "", label: "Where do you hear us" },
    { value: "email", label: "Email" },
    { value: "friend", label: "Friend" },
    { value: "google", label: "Google" },
    { value: "Internet", label: "Web - Internet" },
    { value: "social media", label: "Social Media" },
    { value: "others", label: "Others" },
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
                  {option.logo ? (
                    <img src={option.logo} alt={option.name} />
                  ) : (
                    <span className="italic font-bold">{option.name}</span>
                  )}
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
          placeholder="First name"
        />

        <TextInput
          label="Last Name"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          placeholder="Last name"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-10">
        <TextInput
          label="Age"
          name="age"
          value={formData.age}
          onChange={handleChange}
          placeholder="Age"
        />
        <TextInput
          label="Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-10">
        <TextInput
          label="Phone Number"
          name="phoneNumber"
          placeholder="Phone Number"
          value={formData.phoneNumber}
          onChange={handleChange}
        />

        <TextInput
          label="Mobile Number"
          name="mobile"
          value={formData.mobile}
          onChange={handleChange}
          placeholder="Mobile Number"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-10">
        <SelectInput
          label="Car Models"
          name="carOptions"
          value={formData.carOptions}
          onChange={handleChange}
          options={carNames.map((name) => ({ value: name, label: name }))}
        />

        <SelectInput
          label="Model Year"
          name="modelYear"
          value={formData.modelYear}
          onChange={handleChange}
          options={modelYears.map((year) => ({ value: year, label: year }))}
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-10">
        <TextInput
          label="Date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          placeholder="Date"
          type="date"
        />
        <TextInput
          label="Time"
          name="time"
          value={formData.time}
          onChange={handleChange}
          placeholder="Time"
          type="time"
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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-10">
        <SelectInput
          label="Preferred Branch"
          name="preferredBranch"
          value={formData.preferredBranch}
          onChange={handleChange}
          options={preferredBranch}
        />

        <SelectInput
          label="Service Type"
          name="serviceType"
          value={formData.serviceType}
          onChange={handleChange}
          options={serviceTypes}
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
