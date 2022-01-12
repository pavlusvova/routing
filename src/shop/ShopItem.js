import React, { useState } from "react";
import "../App.css";

function ShopItem({ shop, selectedArray, openModal}) {
  const [selected, setSelected] = useState(false);

  function selectedLi() {
    setSelected((prev) => !prev)
    selectedArray(shop.id)
  }
  function handleClick(event){
    event.stopPropagation();
    openModal(shop.id);
  }

  return (
    <li
      className="list"
      style={
        selected
          ? { border: "5px solid red" }
          : { border: "5px solid #ccc" }
      }
      onClick={selectedLi}
    >
      {shop.name}
      <p>{shop.price}</p>
      <button onClick={handleClick}>&times;</button>
    </li>
  );
}

export default ShopItem;
