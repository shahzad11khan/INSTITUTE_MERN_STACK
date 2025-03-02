import React from "react";

import { NavLink, useNavigate } from "react-router-dom";
import navLinks from "../../assets/dummy-data/navLinks";
import "./sidebar.css";

const Sidebar = () => {
  const nav = useNavigate();
  const logouthandel = async () => {
    const token = localStorage.removeItem("token");
    const userid = localStorage.removeItem("userId");
    nav("/");
  };
  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <h2>
          <span>
            <i class="ri-store-line"></i>
          </span>{" "}
          Education
        </h2>
      </div>

      <div className="sidebar__content">
        <div className="menu">
          <ul className="nav__list">
            {navLinks.map((item, index) => (
              <li className="nav__item" key={index}>
                <NavLink
                  to={item.path}
                  className={(navClass) =>
                    navClass.isActive ? "nav__active nav__link" : "nav__link"
                  }
                >
                  <i className={item.icon}></i>

                  {item.display}
                </NavLink>
              </li>
            ))}
            <div className="sidebar__bottom">
              <span>
                <i class="ri-logout-circle-r-line"></i>
                <button onClick={logouthandel}>Logout</button>
              </span>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
