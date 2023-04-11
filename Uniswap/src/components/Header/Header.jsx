import React, { useState, useEffect, useRef } from "react";
import "./Header.css";
import logo from "../../assets/logo.png";
import ethereum from "../../assets/ethereum.png";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { FiSearch } from "react-icons/fi";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

function Header(props) {
  const [dropdownVisibility, setDropdownVisibility] = React.useState(false);
  return (
    <>
      <div className="header">
        <div className="left-header">
          <img className="left-header__logo" src={logo} />
          <a className="left-header__list left-header__swap">스왑</a>
          <a className="left-header__list first">토큰</a>
          <a className="left-header__list second">NFTs</a>
          <a className="left-header__list third">Pools</a>
          <BiDotsHorizontalRounded className="left-header__list left-header__menu-icon" />
        </div>
        <div className="searchBox">
          <FiSearch className="searchBox__icon" />
          <input
            className="searchBox__input"
            type="text"
            placeholder="Search tokens and NFT collections"
          />
          <div className="searchBox__slash">/</div>
        </div>
        <div className="right-header">
          <div className="right-header__button-first">
            <img className="right-header__ethereum" src={ethereum} />
            <IoIosArrowDown className="right-header__icon" />
          </div>
          <div className="right-header__button-second">
            <a className="right-header__connect">Connect</a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
