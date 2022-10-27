import React from "react";
import SettingsIcon from "@mui/icons-material/Settings";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import ProfileImg from "../ProfileImg";
import flag from "../../img/flag.png";
import "./navbar.css";
const Navbar = () => {
  return (
    <nav className="navbar mb-3">
      <div className="nav-wrapper">
        <div className="navbar-left ">
          <h6>Dashboard</h6>
        </div>
        <div className="navbar-right">
          <SearchOutlinedIcon />
          <img src={flag} alt="flag" className="nav-flag" />
          <GridViewOutlinedIcon />
          <NotificationsNoneIcon />
          <SettingsIcon />
          <ProfileImg width={30} height={30} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
