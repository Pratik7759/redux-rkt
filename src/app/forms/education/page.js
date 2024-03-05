"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function Page() {
  const router = useRouter();

  const goToPreviousPage = () => {
    router.push("/forms/career-objective");
  };

  const goToNextPage = () => {
    router.push("/forms/work-experience");
  };
  const [educationData, setEducationData] = useState({
    degree: "",
    institution: "",
    year: "",
  });

  const [educationList, setEducationList] = useState([]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEducationData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setEducationList((prevList) => [...prevList, educationData]);
    setEducationData({ degree: "", institution: "", year: "" });
  };
  console.log("educationData", educationData.degree);
  return (
    <div className="min-h-screen flex justify-center w-full">
      <div className="bg-white shadow-xl rounded-md p-6 w-full">
        <div className="mt-5">
          <h2 className="text-2xl font-semibold mb-4">Education Form</h2>

          <form onSubmit={handleSubmit} className="mt-3">
            <div className="mb-4">
              <label
                htmlFor="degree"
                className="block text-gray-700 font-bold mb-2"
              >
                Degree
              </label>
              <input
                type="text"
                id="degree"
                name="degree"
                value={educationData.degree}
                onChange={handleInputChange}
                className="border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 block w-full rounded-md shadow-sm p-2 border"
                placeholder="Enter degree"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="institution"
                className="block text-gray-700 font-bold mb-2"
              >
                Institution
              </label>
              <input
                type="text"
                id="institution"
                name="institution"
                value={educationData.institution}
                onChange={handleInputChange}
                className="border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 block w-full rounded-md shadow-sm p-2 border"
                placeholder="Enter institution"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="year"
                className="block text-gray-700 font-bold mb-2"
              >
                Year
              </label>
              <input
                type="text"
                id="year"
                name="year"
                value={educationData.year}
                onChange={handleInputChange}
                className="border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 block w-full rounded-md shadow-sm p-2 border"
                placeholder="Enter year"
              />
            </div>
            <div className="flex justify-center items-center">
              <button
                type="submit"
                className="bg-indigo-500 text-white w-1/3 py-2 px-4 rounded-md hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Add Education
              </button>
            </div>
          </form>

          <div className="flex justify-around mt-5">
            <button
              onClick={goToPreviousPage}
              className="bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              previous
            </button>

            <button
              onClick={goToNextPage}
              className="bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              next
            </button>
          </div>
          {/* <ul className="mt-3 flex flex-col gap-2">
            {educationList.map((edu, index) => (
              <li key={index} className="text-base text-[#334155]">
                <strong>{edu.degree}</strong> - {edu.institution} ({edu.year})
              </li>
            ))}
          </ul> */}
        </div>
      </div>
    </div>
  );
}
