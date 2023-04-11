import { useState } from "react";
import wrappedBTC from "../../assets/wbtc.png";
import { IoIosArrowDown } from "react-icons/io";

function WBTC({ buttonSave }) {
  const [openModal, setOpenModal] = useState(false);

  const list = ["eth", "wbtc", "usdc"];
  console.log(list[1]);
  return (
    <button
      className="select-token__modal-list openModalBtn"
      onClick={() => {
        setOpenModal(true);
      }}
    >
      <img className="select-token__modal-list-img" src={wrappedBTC} />
      <span className="select-token__modal-list-text">WBTC</span>
      <IoIosArrowDown className="select-token__modal-list-icon" />
    </button>
  );
}

export default WBTC;