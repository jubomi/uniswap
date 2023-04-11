import React, { useState, useEffect } from "react";
import "./Header.css";
import logo from "../../assets/logo.png";
import { BiDotsHorizontalRounded } from "react-icons/bi";

function Header() {
  const [search, setSearch] = useState("");
  const onChange = (e) => {
    setSearch(e.target.value);
  };
  return (
    <>
      <div class="background">
        <div className="header">
          <div className="left-header">
            <img className="left-header__logo" src={logo} />
          </div>
          <div className="center-header">
            <input className="center-header__search-box" type="text" value={search} onChange={onChange} />
          </div>
        </div>
      </div>
    </>
  );
}
export default Header;
