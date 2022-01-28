import React, { useState, useEffect, useReducer} from "react";
import "../App.css";
import ShopItem from "./ShopItem";
import Modal from "../modal/Modal";
import black from "../images/black.png";
import reducer, {initialState, TYPES} from "../reducer";
import Popup from "../modal/Popup";

function Shop() {
  const [state, dispatch] = useReducer(reducer, JSON.parse(localStorage.getItem("state") || []))
  // const [state, dispatch] = useReducer(reducer, initialState)
  const [shopName, setShopName] = useState("");
  const [shopPrice, setShopPrice] = useState("");
  const [buttonName, setButtonName] = useState(null);
  const [buttonPrice, setButtonPrice] = useState(null);
  const [modal, setModal] = useState([]);
  const [popup, setPopup] = useState(false);
  const [popupName, setPopupName] = useState("");
  // localStorage.clear()

  useEffect(() => {
    localStorage.setItem("state", JSON.stringify(state));
  }, [state]);
 
  const addShop = (event) => {
    event.preventDefault();
    dispatch({
      type: TYPES.ADD,
      payload: {name: shopName, price: shopPrice}
    })
    setPopup(true)
    setPopupName(shopName)
    cleanValue();
    setTimeout(function(){
      setPopup(false)
    }, 5000);
  };
  const cleanValue = () => {
    setShopName("");
    setShopPrice("");
  };

  function removeItem(arrayItem){
    dispatch({
      type: TYPES.REMOVE_ITEM,
      payload: arrayItem
    })
  }
  function selectedItem(id) {
    dispatch({
      type: TYPES.SELECTED_ITEM,
      payload: id
    })
  }
  function openModalArray(){
    const array = [];
    state.shops.map((shop) => shop.selected === true ? array.push(shop.id) : shop)
    setModal(array)
  }
  function openModal(id){
    setModal([id])
  }
  function closeModal(){
    setPopup(false)
    setModal([])
  }
  function sortByName() {
    setButtonPrice(null);
    return setButtonName((prev) => {
      dispatch({
        type: TYPES.SORT_BY_NAME,
        payload: !prev,
      });
      return !prev;
    });
  }
  function sortByPrice() {
    setButtonName(null);
    return setButtonPrice((prev) => {
      dispatch({
        type: TYPES.SORT_BY_PRICE,
        payload: !prev,
      });
      return !prev;
    });
  }
  return (
    <div>
      <form>
        <input
          value={shopName}
          type="text"
          onChange={(event) => setShopName(event.target.value)}
        />
        <input
          value={shopPrice}
          type="number"
          onChange={(event) => setShopPrice(event.target.value)}
        />
        <button
          disabled={!shopName.length || !shopPrice.length}
          type="submit"
          onClick={addShop}
        >
          Додати товар
        </button>
      </form>
      {state.shops.some((shop) => shop.selected === true) && (
        <button onClick={openModalArray}>Delete array</button>
      )}
      {!!state.shops.length && (
        <div className="wrapper">
          <button onClick={sortByName} className="btn">
            Name
            <img
              className="up"
              src={black}
              alt=" "
              style={
                buttonName === true
                  ? { visibility: "visible" }
                  : { visibility: "hidden" }
              }
            />
            <img
              className="down"
              src={black}
              alt=" "
              style={
                buttonName === false
                  ? { visibility: "visible" }
                  : { visibility: "hidden" }
              }
            />
          </button>
          <button onClick={sortByPrice} className="btn">
            Price
            <img
              className="up"
              src={black}
              alt=" "
              style={
                buttonPrice === true
                  ? { visibility: "visible" }
                  : { visibility: "hidden" }
              }
            />
            <img
              className="down"
              src={black}
              alt=" "
              style={
                buttonPrice === false
                  ? { visibility: "visible" }
                  : { visibility: "hidden" }
              }
            />
          </button>
          {modal.length ? (
            <Modal
              deleteItem={() => removeItem(modal)}
              closeModal={closeModal}
            />
          ) : null}
          <Popup 
            closePopup={closeModal}
            popupName={popupName}
            popup={popup}
          />
          <ul className="table">
            {state.shops.map((shop) => {
              return (
                <ShopItem
                  shop={shop}
                  key={shop.id}
                  selectedItem={selectedItem}
                  openModal={openModal}
                />
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Shop;
