import React from "react";
import { portfolioLinks } from "./DropdownData/DropDownData";
import "../../styles/Buttons/DropDown/DropDown.css";
import { Link } from "react-router-dom";

export const Dropdown = ({ enable }) => {
  return (
    <div className={!enable ? "dropDown__box" : "dropDown__box-active"}>
      {portfolioLinks.map((item) => (
        <Link key={item.key} className={item.className} to={item.url}>
          {item.title}
        </Link>
      ))}
    </div>
  );
};
