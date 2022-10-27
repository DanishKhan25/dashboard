import React from "react";
import ProfileImg from "../ProfileImg";
import bg from "./../../img/bg.jpg";
import "./profileCard.css";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import Activity from "./Activity";

const activityData = [
  { id: 1, date: new Date("8-02-2022"), text: "Responded to nedeed" },
  { id: 2, date: new Date("10-09-2022"), text: "dolor sit amet consectetur" },
  {
    id: 3,
    date: new Date("12-10-2022"),
    text: "Enim dolores cupiditate deserunt",
  },
  {
    id: 4,
    date: new Date("6-11-2022"),
    text: "soluta id eum obcaecati aliquid",
  },
];
const ProfileCard = () => {
  return (
    <div className="card bx">
      <div className="img-block">
        <img src={bg} className="card-img-top cover" alt="..." />
      </div>
      <div className="dp">
        <ProfileImg width={70} height={70} className="dp-img" />

        <h6 className="card-title">Jennifer Bennett</h6>
        <small className="text-muted">Product Designer</small>
      </div>
      <div className="card-body">
        <div className="profile-details">
          <div>
            <h6 className="card-title">1,269</h6>
            <small className="text-muted">Products</small>
          </div>
          <div>
            <h6 className="card-title">5.2K</h6>
            <small className="text-muted">Followers</small>
          </div>
        </div>
      </div>

      <div className="ernings-top">
        <h6 className="card-title">Earnings</h6>
        <InfoOutlinedIcon />
      </div>
      <div className="eraning-per">
        <h6 className="card-title">76%</h6>
        <h6 className="card-title">$25,895</h6>
        <small className="text-muted">Earnings this month</small>
      </div>

      {activityData.map((item) => (
        <Activity key={item.id} date={item.date} text={item.text} />
      ))}
    </div>
  );
};

export default ProfileCard;
