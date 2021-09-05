import React, { useState } from "react";
import "./App.css";
import Data from "./data.json";
import { NavLink } from "react-router-dom";

function NavigaionList() {
  const [items] = useState(Data.menu);

  return (
    <>
      <nav className="nav">
        {items &&
          items.map(({ name, url }) => (
            <li className="nav-item" key={name}>
              <NavLink
                to={`/${url}`}
                className="nav-link"
                activeClassName="selected"
              >
                {name}
              </NavLink>
            </li>
          ))}
      </nav>
    </>
  );
}
export default NavigaionList;
