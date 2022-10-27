import React from "react";
import "./card.css";
const Card = ({ title, value, logo, change }) => {
  return (
    <div className=" wrap">
      <div className="card mb-3">
        <div className="card-body">
          <div className="card-logo">{logo}</div>
          <div className="card-content ">
            <span className="card-subtitle text-muted ">{title}</span>
            <span className="h6">$ {value}</span>
          </div>
          <span className={`badge bg-${change >= 0 ? "success" : "danger"}`}>
            {change}%
          </span>
        </div>
      </div>
    </div>
  );
};

export default Card;
