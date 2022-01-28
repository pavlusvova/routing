import React  from "react";
import "../App.css";

function ShopItem({ shop, selectedItem, openModal}) {

  function selectedLi() {
    selectedItem(shop.id)
  }
  function handleClick(event){
    event.stopPropagation();
    openModal(shop.id);
  }
  return (
    <li
      className="list"
      style={
        shop.selected
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
