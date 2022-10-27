import React, { useState } from "react";
import {
  FaTh,
  FaCalendarAlt,
  FaFolder,
  FaShoppingBag,
  FaFileInvoice,
  FaSuitcase,
  FaBars,
} from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsChatDots, BsFillPeopleFill } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import "./sidebar.css";

const Sidebar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggel = () => setIsOpen(!isOpen);
  const menuItems = [
    {
      path: "/",
      name: "Dashboard",
      icon: <FaTh />,
    },
    {
      path: "/calender",
      name: "Calender",
      icon: <FaCalendarAlt />,
    },
    {
      path: "/chat",
      name: "Chat",
      icon: <BsChatDots />,
    },
    {
      path: "/filemanager",
      name: "Filemanager",
      icon: <FaFolder />,
    },
    {
      path: "/ecommerce",
      name: "Ecommerce",
      icon: <FaShoppingBag />,
    },
    {
      path: "/email",
      name: "Email",
      icon: <HiOutlineMail />,
    },
    {
      path: "/invoice",
      name: "Invoice",
      icon: <FaFileInvoice />,
    },
    {
      path: "/projects",
      name: "Projects",
      icon: <FaSuitcase />,
    },
    {
      path: "/contacts",
      name: "Contacts",
      icon: <BsFillPeopleFill />,
    },
  ];
  return (
    <div className="wrapper">
      <div style={{ width: isOpen ? "215px" : "50px" }} className="sidebar">
        <div className="top_section">
          <h1 style={{ display: isOpen ? "block" : "none" }} className="logo">
            Logo
          </h1>
          <div className="bars">
            <FaBars onClick={toggel} />
          </div>
        </div>

        {menuItems.map((item, index) => (
          <NavLink to={item.path} key={index} className="link">
            <div className="icon">{item.icon}</div>
            <div
              style={{ display: isOpen ? "block" : "none" }}
              className="link-text"
            >
              {item.name}
            </div>
          </NavLink>
        ))}
      </div>
      <main>{children}</main>
    </div>
  );
};

export default Sidebar;
