import React from "react";
import { useSelector } from "react-redux";

export default function CareerObjectiveUi() {
  const careerObjectiveData = useSelector(
    (data) => data.careerObjectiveData.careerObjective
  );
  return (
    <div>
      {careerObjectiveData.map((items) => (
        <p key={items.id} className="text-base text-[#334155] mt-4">
          {items.careerObjective}
        </p>
      ))}
    </div>
  );
}
