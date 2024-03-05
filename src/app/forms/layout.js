import Sidebar from "@/components/Sidebar";
import React from "react";
import { Providers } from "../redux/providers";

export default function layout({ children }) {
  return (
    <div className="flex">
      <Providers>
        <Sidebar />
        {children}
      </Providers>
    </div>
  );
}
