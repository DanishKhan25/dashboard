import React from "react";
import "./date.css";

const Date = ({ date }) => {
  const d = date;
  let month = d.toLocaleString("default", { month: "short" });
  let day = d.getDay();

  return (
    <div className="date-container">
      <span> {day} </span>
      <span> {month} </span>
    </div>
  );
};

export default Date;
