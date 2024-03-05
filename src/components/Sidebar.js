import Link from "next/link";
import React from "react";

const menuItems = [
  { label: "Contacts", href: "/forms/contacts" },
  { label: "Career Objective", href: "/forms/career-objective" },
  { label: "Education", href: "/forms/education" },
  { label: "Work Experience", href: "/forms/work-experience" },
];

const Sidebar = () => {
  return (
    <div className="h-screen min-w-64 bg-gray-800 text-white">
      <div className="p-4">
        <h1 className="text-2xl font-semibold mb-4">Resume Builder</h1>
        <ul>
          {menuItems.map((item, index) => (
            <li key={index} className="mb-3">
              <Link href={item.href}>
                <p className="block py-2 px-4 text-gray-300 hover:text-white hover:bg-gray-700 rounded">
                  {item.label}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
