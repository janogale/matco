"use client";

import React, { useState, ChangeEvent, FormEvent } from "react";

interface FormData {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  address: string;
  email: string;
  message: string;
}

const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    address: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log(formData); // Replace with your form submission logic
  };

  return (
    <div className="container mx-auto p-4 bg-sky-600">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 shadow rounded focus:outline-none"
      >
        <h2 className="text-2xl font-bold text-gray-900 text-center mb-4 sm:text-3xl sm:tracking-tight">
          Get in Tech
        </h2>
        <div className="flex justify-between rounded my-2">
          <div className="mb-4 w-full mr-2">
            <label
              htmlFor="firstName"
              className="block text-gray-500 font-semibold mb-2"
            >
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              placeholder="Enter your first name"
              value={formData.firstName}
              onChange={handleChange}
              className="w-full px-3 py-3 border border-gray-200 rounded outline-none focus:border-none"
            />
          </div>
          <div className="mb-4 w-full">
            <label
              htmlFor="lastName"
              className="block text-gray-500 font-semibold mb-2"
            >
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              placeholder="Enter your last name"
              value={formData.lastName}
              onChange={handleChange}
              className="w-full px-3 py-3 border border-gray-200 rounded outline-none focus:border-none"
            />
          </div>
        </div>
        <div className="flex justify-between rounded my-2">
          <div className="mb-4 w-full mr-2">
            <label
              htmlFor="phoneNumber"
              className="block text-gray-500 font-semibold mb-2"
            >
              Phone Number
            </label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              placeholder="Enter your number"
              value={formData.phoneNumber}
              onChange={handleChange}
              className="w-full px-3 py-3 border border-gray-200 rounded outline-none focus:border-none"
            />
          </div>
          <div className="mb-4mb-4 w-full">
            <label
              htmlFor="address"
              className="block text-gray-500 font-semibold mb-2"
            >
              Address
            </label>
            <input
              type="text"
              id="address"
              name="address"
              placeholder="Enter your address"
              value={formData.address}
              onChange={handleChange}
              className="w-full px-3 py-3 border border-gray-200 rounded outline-none focus:border-none"
            />
          </div>
        </div>
        <div className="mb-4 rounded my-2">
          <label
            htmlFor="email"
            className="block text-gray-500 font-semibold mb-2 outline-none focus:border-none"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-3 py-3 border border-gray-200 rounded outline-none focus:border-none"
          />
        </div>
        <div className="mb-4 rounded my-2">
          <label
            htmlFor="message"
            className="block text-gray-500 font-semibold mb-2 outline-none focus:border-none"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            placeholder="Enter your message"
            value={formData.message}
            onChange={handleChange}
            className="w-full px-3 py-3 border border-gray-200 rounded focus:border-none"
          />
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-sky-600 text-white w-full px-4 py-2 rounded focus:border-none font-semibold hover:bg-sky-500"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
