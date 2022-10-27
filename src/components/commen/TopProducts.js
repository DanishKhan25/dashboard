import React from "react";
import "./TopProducts.css";

const TopProducts = ({ id, title, value, total }) => {
  return (
    <div key={id} className="top-rows mb-2">
      <div className="top-btn-ttl">
        <div className="btn btn-primary btn-sm">#{id}</div>
        <div className="top-contents">
          <div className="text-muted">{title}</div>
          <h6>{value}</h6>
        </div>
      </div>
      <div className="btn btn-success btn-sm">{total}</div>
    </div>
  );
};

export default TopProducts;
