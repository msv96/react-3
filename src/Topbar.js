import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

function Topbar() {
  return (
    <div className="topbar">
      <h1>Shopping Cart</h1>
      <button type="submit" className="btn1" title="icons">
        <span className="icon1">
          <FontAwesomeIcon icon={faShoppingCart} />
        </span>
      </button>
    </div>
  );
}

export default Topbar;
