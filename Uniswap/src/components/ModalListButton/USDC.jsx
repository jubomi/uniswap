import { useState } from "react";
import usdCoin from "../../assets/usdc.png";
import { IoIosArrowDown } from "react-icons/io";

function USDC({ buttonSave }) {
  const [openModal, setOpenModal] = useState(false);

  const list = ["eth", "wbtc", "usdc"];
  console.log(list[2]);
  return (
    <button
      className="select-token__modal-list openModalBtn"
      onClick={() => {
        setOpenModal(true);
      }}
    >
      <img className="select-token__modal-list-img" src={usdCoin} />
      <span className="select-token__modal-list-text">USDC</span>
      <IoIosArrowDown className="select-token__modal-list-icon" />
    </button>
  );
}

export default USDC;