"use client";
import React from "react";
import { useSelector } from "react-redux";

export default function DisplayUser() {
  const userData = useSelector((data) => data.userData.users);
  console.log(userData);

  return (
    <div>
      <h1>DisplayUser</h1>
      {userData.map((item) => (
        <div key={item.id} className="text-black">
          <p>id:{item.id}</p>
          <p>name:{item.name}</p>
          <p>age:{item.age}</p>
        </div>
      ))}
    </div>
  );
}
