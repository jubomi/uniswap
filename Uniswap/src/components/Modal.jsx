import React, { useState } from "react";
import "./Modal.css";
import ETH from "./ModalListButton/ETH.jsx";
import WBTC from "./ModalListButton/WBTC.jsx";
import USDC from "./ModalListButton/USDC.jsx";
import { IoIosArrowDown } from "react-icons/io";
import { CgClose } from "react-icons/cg";
import { FiSearch } from "react-icons/fi";
import ethereum from "../assets/ethereum.png";
import wrappedBTC from "../assets/wbtc.png";
import usdCoin from "../assets/usdc.png";

function Modal({ closeModal, setValue }) {
  const [openModal, setOpenModal] = useState(false);
  const btnArr = [
    { value: "ETH", src: ethereum },
    { value: "WBTC", src: wrappedBTC },
    { value: "USDC", src: usdCoin },
  ];

  const tokenListArr = [
    {
      className: "row eth",
      src: ethereum,
      name: "Ether",
      subName: "ETH",
    },
    {
      className: "row wbtc",
      src: wrappedBTC,
      name: "Wrapped BTC",
      subName: "WBTC",
    },
    {
      className: "row usdc",
      src: usdCoin,
      name: "USD Coin",
      subName: "USDC",
    },
  ];

  return (
    <div className="flex">
      <div className="modalBackground">
        <div className="modalContainer">
          <div className="modalContainer__top">
            <a className="modalConatiner__top-text">토큰 선택</a>
            <CgClose
              className="modalContainer__top-button"
              onClick={() => closeModal(false)}
            />
          </div>
          <div className="modalContainer__top-searchBox">
            <FiSearch className="searchBox__icon" />
            <input
              className="searchBox__input-box"
              type="text"
              placeholder="이름 검색 또는 주소 붙여 넣기"
            />
          </div>
          <div
            className="modalContainer__middle-button"
            onClick={() => closeModal(false)}
          >
            {btnArr.map((value, idx) => (
              <button
                key={idx}
                className="button"
                onClick={() => {
                  setValue(value.value);
                }}
              >
                <img className="img" src={value.src} />
                <a className="txt">{value.value}</a>
              </button>
            ))}
          </div>
          <div className="modalContainer__bottom">
            <hr className="hr" />
          </div>
          <div className="ether__list" onClick={() => closeModal(false)}>
            {tokenListArr.map((value, idx) => (
              <div
                key={idx}
                className={value.className}
                onClick={() => setValue(value.subName)}
              >
                <div className="ether__list-first">
                  <img className="ether__img" src={value.src} />
                </div>
                <div className="ehter__list-second">
                  <a className="ether__name">{value.name}</a>
                  <a className="ether__subName">{value.subName}</a>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div class="modal_layer"></div>
      </div>
    </div>
  );
}

export default Modal;
