import DisplayUser from "@/components/DisplayUser";
import DisplayUserForm from "@/components/forms/DisplayUserForm";
import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <div className="min-h-screen flex w-full bg-lime-50">
      <div className="shadow-xl rounded-md p-6 min-w-full">
        <DisplayUserForm />

        <div className="flex justify-around mt-5">
          <Link href="/">
            <button className="bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
              previous
            </button>
          </Link>
          <Link href="/forms/career-objective">
            <button className="bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
              next
            </button>
          </Link>
        </div>
      </div>
      <DisplayUser />
    </div>
  );
}
