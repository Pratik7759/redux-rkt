"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function page() {
  const router = useRouter();

  const goToPreviousPage = () => {
    router.push("/forms/education");
  };

  // const goToNextPage = () => {
  //   router.push("/forms/work-experience");
  // };

  const [formData, setFormData] = useState({
    jobTitle: "",
    companyName: "",
    experiencePoints: "",
  });

  const [workExperiences, setWorkExperiences] = useState([]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setWorkExperiences((prevExperiences) => [...prevExperiences, formData]);
    setFormData({ jobTitle: "", companyName: "", experiencePoints: "" });
  };
  return (
    <div className="min-h-screen flex w-full">
      <div className="shadow-xl rounded-md p-6 min-w-full">
        <div className="mt-5">
          <h2 className="text-2xl font-semibold mb-4">Work Experience Form</h2>

          <form onSubmit={handleSubmit} className="mb-5">
            <div className="mb-4">
              <label
                htmlFor="jobTitle"
                className="block text-gray-700 font-bold mb-2"
              >
                Job Title
              </label>
              <input
                type="text"
                id="jobTitle"
                name="jobTitle"
                value={formData.jobTitle}
                onChange={handleInputChange}
                className="border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 block w-full rounded-md shadow-sm p-2 border"
                placeholder="Enter job title"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="companyName"
                className="block text-gray-700 font-bold mb-2"
              >
                Company Name
              </label>
              <input
                type="text"
                id="companyName"
                name="companyName"
                value={formData.companyName}
                onChange={handleInputChange}
                className="border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 block w-full rounded-md shadow-sm p-2 border"
                placeholder="Enter company name"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="experiencePoints"
                className="block text-gray-700 font-bold mb-2"
              >
                Experience Points
              </label>
              <textarea
                id="experiencePoints"
                name="experiencePoints"
                value={formData.experiencePoints}
                onChange={handleInputChange}
                className="border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 block w-full rounded-md shadow-sm p-2 border"
                placeholder="Enter experience points"
                rows="4"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Add Experience
            </button>
          </form>
          <div className="flex justify-around mt-5">
            <button
              onClick={goToPreviousPage}
              className="bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              previous
            </button>

            <button
              // onClick={goToNextPage}
              className="bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
