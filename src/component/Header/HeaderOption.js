import React from "react";
import "./HeaderOption.css";

function HeaderOption({ Icon, title, active }) {
  return (
    <div className="headerOption ">
      {Icon && <Icon className="headerOption_icon" fontSize="large" />}
      <div className="headerOption_title">{title}</div>
    </div>
  );
}

export default HeaderOption;
