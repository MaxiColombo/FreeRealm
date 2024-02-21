import React from "react";
import categories from "../assets/category.json";
import "./nav-buttons.css";
import { NavLink } from 'react-router-dom';


export function NavBar() {
  return (
    <>
      <h1 className='titlePage'> <a href="/">FreeRealm</a></h1>

      <ul className="navbar-ul">
        {categories.map((item, index) => (
          <li key={index} className={`navbar-li`} style={{ backgroundColor: item.color }}>
            <NavLink to={`/${item.nameID}`} className="navbar-a">
              <img src={item.svg} alt={item.name} className="navbar-icon" />
              {item.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </>
  );
}