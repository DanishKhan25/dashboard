import React from "react";
import "./table.css";

const Table = ({ value, title }) => {
  return (
    <div key={value} className="over-flex item">
      <span className="card-subtitle text-muted ">{title}</span>
      <span className="h6"> {value} </span>
    </div>
  );
};

export default Table;
