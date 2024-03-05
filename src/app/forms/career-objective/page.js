"use client";
import { addCareerObjective } from "@/app/redux/careerObjectiveSlice";
import CareerObjectiveUi from "@/components/CareerObjectiveUi";
import Link from "next/link";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function page() {
  const [careerObjectivetitle, setCareerObjective] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!careerObjectivetitle) {
      alert("Description is required");
      return;
    }
    dispatch(addCareerObjective(careerObjectivetitle));
  };
  return (
    <div className="min-h-screen flex w-full">
      <div className="shadow-xl rounded-md min-w-full">
        <div className="min-w-full mx-auto bg-white shadow-md rounded-md overflow-hidden">
          <div className="p-6">
            <h2 className="text-2xl font-semibold mb-4">
              Career Objective Form
            </h2>

            <form>
              <div className="mb-4">
                <label
                  htmlFor="careerObjective"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Career Objective
                </label>
                <textarea
                  type="text"
                  id="careerObjective"
                  className="h-[200px] border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 block w-full rounded-md shadow-sm p-3 border "
                  placeholder="Enter your career objective"
                  onChange={(e) => setCareerObjective(e.target.value)}
                />
              </div>

              <div className="flex justify-center">
                <button
                  onClick={handleSubmit}
                  className="whitespace-nowrap mt-6 w-full lg:w-1/3 flex justify-center mx-auto py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 hover:outline-none hover:ring-2 hover:ring-offset-2 hover:ring-indigo-500"
                >
                  Submit
                </button>
              </div>
            </form>
            <div className="flex justify-around mt-5">
              <Link href="/forms/contacts">
                <button className="bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                  previous
                </button>
              </Link>
              <Link href="/forms/education">
                <button className="bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                  next
                </button>
              </Link>
            </div>
          </div>
          <CareerObjectiveUi />
        </div>
      </div>
    </div>
  );
}
