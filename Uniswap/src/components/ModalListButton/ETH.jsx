import { useState } from "react";
import ethereum from "../../assets/ethereum.png";
import "../MainSwap.jsx";
import "../MainSwap.css";
import "../Modal.jsx";
import "../Modal.css";

import { IoIosArrowDown } from "react-icons/io";

function ETH({ buttonSave }) {
  const [openModal, setOpenModal] = useState(false);

  const list = ["eth", "wbtc", "usdc"];
  console.log(list[0]);
  return (
    <button
      className="select-token__modal-list"
      onClick={() => {
        setOpenModal(true);
      }}
    >
      <img className="select-token__modal-list-img" src={ethereum} />
      <span className="select-token__modal-list-text">ETH</span>
      <IoIosArrowDown className="select-token__modal-list-icon" />
    </button>
  );
}

export default ETH;