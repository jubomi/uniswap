import React, { useState, useEffect, useRef } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { FiSettings } from "react-icons/fi";
import { AiOutlineArrowDown } from "react-icons/ai";
import Modal from "./Modal.jsx";
import { WBTC, USDC, ETH } from "../assets";
import "./MainSwap.css";

function MainSwap() {
  const [openModal, setOpenModal] = useState(false);
  const [value, setValue] = useState("ETH");
  const [beforeToken, setBeforeToken] = useState("ETH");
  const [afterToken, setAfterToken] = useState("");
  const [icClickBeforeToken, setIsClickBeforeToken] = useState(false);
  const [icClickAfterToken, setIsClickAfterToken] = useState(false);

  const ImgObj = {
    ETH: ETH,
    WBTC: WBTC,
    USDC: USDC,
  };

  return (
    <>
      <div className="flex">
        <div className="swap">
          <div className="swap__box-top">
            <span>스왑</span>
            <FiSettings className="swap__setting-icon" />
          </div>

          <div className="swap__box-middle">
            <div className="swap__box-input">
              <input
                className="select-token__first-input"
                type="number"
                placeholder="0"
              />
              <button
                className="select-token__modal-list"
                onClick={() => {
                  setOpenModal(true);
                  setIsClickBeforeToken(true);
                }}
              >
                <img
                  className="select-token__modal-list-img"
                  src={ImgObj[beforeToken]}
                />
                <span className="select-token__modal-list-text">
                  {beforeToken}
                </span>
                <IoIosArrowDown className="select-token__modal-list-icon" />
              </button>
            </div>

            <div className="swap__box-arrow">
              <AiOutlineArrowDown className="swap__box-arrow-btn" />
            </div>

            <div className="swap__box-input">
              <input
                className="select-token__first-input"
                type="number"
                placeholder="0"
              />
              {afterToken == "" ? (
                <SelectButton
                  setOpenModal={setOpenModal}
                  setIsClickBeforeToken={setIsClickBeforeToken}
                />
              ) : (
                <button
                  className="select-token__modal-list"
                  onClick={() => {
                    setOpenModal(true);
                    setIsClickAfterToken(true);
                  }}
                >
                  <img
                    className="select-token__modal-list-img"
                    src={ImgObj[afterToken]}
                  />
                  <span className="select-token__modal-list-text">
                    {afterToken}
                  </span>
                  <IoIosArrowDown className="select-token__modal-list-icon" />
                </button>
              )}
            </div>
          </div>
          <div className="swap__box-bottom">
            <button className="connect__wallet-btn">
              <a className="connect__wallet-txt">지갑 연결</a>
            </button>
          </div>
          <div className="absolute">
            {openModal && (
              <Modal
                closeModal={setOpenModal}
                setValue={icClickBeforeToken ? setBeforeToken : setAfterToken}
              />
            )}
          </div>
        </div>
      </div>
      <div className="bottom__txt">
        <a>Uniswap 사용 가능 :</a>
        <a className="hyperLink_txt">English</a>
      </div>
    </>
  );
}

export default MainSwap;

const SelectButton = ({ setOpenModal, setIsClickBeforeToken }) => {
  return (
    <button
      className="select-token-btn"
      onClick={() => {
        setOpenModal(true);
        setIsClickBeforeToken(false);
      }}
    >
      <span className="select-token-text">Select Token</span>
      <IoIosArrowDown className="select-token-icon" />
    </button>
  );
};
