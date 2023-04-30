import React from "react";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <h1> header started bhai</h1>
      <div className="header__left">
        <img src="" alt=""></img>
      </div>
        <div className="header__search">
            {/* SearchIcon */}
            <img src=" " alt=""></img>
        </div>
      <div className="header__right">
        <img src=" " alt=""></img>
      </div>
    </div>
  );
}

export default Header;
