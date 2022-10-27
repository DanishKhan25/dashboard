import React from "react";
import Date from "./Date";
import "./Activity.css";
const Activity = ({ date, text }) => {
  return (
    <div className="activity-wrap">
      <Date date={date} />

      <span className="text-muted fs-small">{text}</span>
    </div>
  );
};

export default Activity;
