"use client";

import React, { useState, ChangeEvent, FormEvent } from "react";
import emailjs from "@emailjs/browser";

import Input from "../form/Input";
import Button from "../form/Button";
import TextAreaInput from "../form/TextArea";

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

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccessMessageVisible, setIsSuccessMessageVisible] = useState(false);
  const [isErrorMessageVisible, setIsErrorMessageVisible] = useState(false);
  const [isIncompleteFieldsVisible, setIsIncompleteFieldsVisible] =
    useState(false);

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

    // Check if any input field is empty
    const isAnyFieldEmpty = Object.values(formData).some(
      (value) => value === ""
    );
    if (isAnyFieldEmpty) {
      setIsIncompleteFieldsVisible(true);
      return;
    }

    setIsSubmitting(true);

    emailjs
      .sendForm(
        "service_nwii4qc",
        "template_0erjgij",
        e.target as HTMLFormElement,
        "user_wnA788cKxFTdURQEXJHCA"
      )
      .then(
        (result) => {
          console.log(result.text);
          setIsSuccessMessageVisible(true);
          setIsIncompleteFieldsVisible(false);

          setFormData({
            firstName: "",
            lastName: "",
            phoneNumber: "",
            address: "",
            email: "",
            message: "",
          });
          
        },
        (error) => {
          console.log(error.text);
          setIsErrorMessageVisible(true);
        }
      )
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <div className="container mx-auto p-4 bg-sky-600 rounded">
      <form
        onSubmit={handleSubmit}
        className="bg-gray-50 p-8 shadow-sm rounded focus:outline-none"
      >
        <h2 className="text-2xl font-bold text-gray-900 text-center mb-4 sm:text-3xl sm:tracking-tight">
          Get in Tech
        </h2>
        <div className="flex justify-between rounded my-2">
          <div className="mb-4 w-full mr-2">
            <Input
              label="First Name*"
              name="firstName"
              placeholder="Enter your first name"
              value={formData.firstName}
              onChange={handleChange}
              className="w-full px-3 py-3 border border-gray-200 rounded outline-none focus:border-none"
            />
          </div>
          <div className="mb-4 w-full">
            <Input
              label="Last Name*"
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
            <Input
              label="Phone Number*"
              name="phoneNumber"
              placeholder="Enter your number"
              value={formData.phoneNumber}
              onChange={handleChange}
              className="w-full px-3 py-3 border border-gray-200 rounded outline-none focus:border-none"
            />
          </div>
          <div className="mb-4mb-4 w-full">
            <Input
              label="Address*"
              name="address"
              placeholder="Enter your address"
              value={formData.address}
              onChange={handleChange}
              className="w-full px-3 py-3 border border-gray-200 rounded outline-none focus:border-none"
            />
          </div>
        </div>
        <div className="mb-4 rounded my-2">
          <Input
            label="Email*"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-3 py-3 border border-gray-200 rounded outline-none focus:border-none"
          />
        </div>
        <div className="mb-4 rounded my-2">
          <TextAreaInput
            label="Message"
            name="message"
            placeholder="Enter your message"
            value={formData.message}
            onChange={handleChange}
            className="w-full px-3 py-3 border border-gray-200 rounded focus:border-none"
          />
        </div>
        {isSubmitting ? (
          <div className="flex items-center justify-center mt-4">
            <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-gray-900"></div>
          </div>
        ) : (
          <div className="flex justify-center">
            <Button
              label="Submit"
              className="bg-sky-600 text-white w-full px-4 py-2 rounded focus:border-none font-semibold hover:bg-sky-500"
            />
          </div>
        )}
        {isSuccessMessageVisible && (
          <div className="bg-green-500 text-white w-full px-4 p-2 rounded mt-4">
            Message sent successfully!
          </div>
        )}
        {isErrorMessageVisible && (
          <div className="bg-red-500 text-white p-2 w-full px-4 rounded mt-4">
            Error sending message. Please try again later.
          </div>
        )}
        {isIncompleteFieldsVisible && (
          <div className="bg-yellow-500 text-white p-2 w-full px-4 rounded mt-4">
            Please fill in all the required fields.
          </div>
        )}
      </form>
    </div>
  );
};

export default ContactForm;
