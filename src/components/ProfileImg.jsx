import React from "react";
import profileImg from "../img/profile-1.jpg";
const ProfileImg = ({ width, height }) => {
  return (
    <img
      src={profileImg}
      alt="profile img"
      width={width}
      height={height}
      style={{ borderRadius: "50%" }}
    />
  );
};

export default ProfileImg;
