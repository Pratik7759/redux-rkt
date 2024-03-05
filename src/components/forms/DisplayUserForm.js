"use client";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "@/app/redux/slice";
import { nanoid } from "@reduxjs/toolkit";

export default function DisplayUserForm() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const dispatch = useDispatch();

  const userDispatch = (e) => {
    e.preventDefault();
    dispatch(addUser({ id: nanoid(), name, age }));
  };

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-semibold mb-6">Contact Form</h1>
      <form className="bg-white rounded-md shadow-md p-6 flex flex-col gap-3">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            placeholder="Enter your name"
            onChange={(e) => setName(e.target.value)}
            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border border-gray-300 rounded-md py-2 px-3"
          />
        </div>
        <div>
          <label
            htmlFor="age"
            className="block text-sm font-medium text-gray-700"
          >
            Age
          </label>
          <input
            type="text"
            id="age"
            placeholder="Enter your age"
            onChange={(e) => setAge(e.target.value)}
            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border border-gray-300 rounded-md py-2 px-3"
          />
        </div>
        <div className="flex justify-center align-middle mt-2">
          <button
            onClick={userDispatch}
            className="whitespace-nowrap mt-6 w-full lg:w-1/2 flex justify-center mx-auto py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 hover:outline-none hover:ring-2 hover:ring-offset-2 hover:ring-indigo-500"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
