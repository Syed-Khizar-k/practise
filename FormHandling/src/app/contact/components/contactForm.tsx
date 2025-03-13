"use client";
import { EventType } from "@/app/utils/types";
import { useState } from "react";
import DisplayData from "@/components/displayData";
import { StateType } from "@/app/utils/types";
import * as yup from "yup";

const ContactForm = () => {
  const [ContactData, SetContactData] = useState<StateType>({
    name: "",
    email: "",
    text: "",
  });

  const getUserData = (event: EventType) => {
    let details = {
      ...ContactData,
      [event.target.name]: event.target.value,
    };

    SetContactData(details);
  };
  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-lg text-gray-700">
      <h2 className="text-2xl font-semibold text-center mb-4">Contact Us</h2>
      <form className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Name
          </label>
          <input
            onChange={getUserData}
            type="text"
            name="name"
            className="w-full mt-1 p-2 border rounded-lg focus:ring focus:ring-blue-300"
            placeholder="Enter Your Name"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            onChange={getUserData}
            type="email"
            name="email"
            className="w-full mt-1 p-2 border rounded-lg focus:ring focus:ring-blue-300"
            placeholder="Enter Your Email"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Message
          </label>
          <textarea
            onChange={getUserData}
            name="text"
            rows={4}
            className="w-full mt-1 p-2 border rounded-lg focus:ring focus:ring-blue-300"></textarea>
        </div>
        <button className="w-full bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 transition">
          Send Message
        </button>
        <DisplayData info={ContactData} />
      </form>
    </div>
  );
};

export default ContactForm;
