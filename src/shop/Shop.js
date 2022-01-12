import React, { useState, useEffect, useReducer} from "react";
import "../App.css";
import ShopItem from "./ShopItem";
import Modal from "../modal/Modal";
import black from "../images/black.png";
import Context from "../context";
import reducer, {TYPES} from "../reducer";

function Shop() {
  const [state, dispatch] = useReducer(reducer, JSON.parse(localStorage.getItem("state") || []))
  const [shopName, setShopName] = useState("");
  const [shopPrice, setShopPrice] = useState("");
  const [buttonName, setButtonName] = useState(null);
  const [buttonPrice, setButtonPrice] = useState(null);
  const [select, setSelect] = useState([]);
  const [modal, setModal] = useState([]);

  useEffect(() => {
    localStorage.setItem("state", JSON.stringify(state));
  }, [state]);

  useEffect(() => {
    setSelect((prev) => prev.filter((item) => state.some(el => el.id === item)))
  }, [state]);
 
  const addShop = (event) => {
    event.preventDefault();
    dispatch({
      type: TYPES.ADD,
      payload: {name: shopName, price: shopPrice}
    })
    cleanValue();
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
  function selectedArray(id) {
    if(select.includes(id)){
      setSelect((prev) => prev.filter(el => el !== id))
    }else{
      setSelect((prev) => [...prev, id])
    }
  }
  function openModalArray(){
    setModal(select)
  }
  function openModal(id){
    setModal([id])
  }
  function closeModal(){
    setModal([])
  }
  function sortByName() {
    if (buttonName) {
      dispatch({
        type: TYPES.SORT_BY_NAME,
        payload: buttonName
      })
      setButtonPrice(null);
    }else{
      dispatch({
        type: TYPES.SORT_BY_NAME,
        payload: buttonName
      })
      setButtonPrice(null);
    }
    return setButtonName((prev) => !prev);
  }
  function sortByPrice() {
    if (buttonPrice){
      dispatch({
        type: TYPES.SORT_BY_PRICE,
        payload: buttonPrice
      })
      console.log(buttonPrice)
      setButtonName(null);
    }else{
      dispatch({
        type: TYPES.SORT_BY_PRICE,
        payload: buttonPrice
      })
      console.log(buttonPrice)
      setButtonName(null);
    }
    return setButtonPrice((prev) => !prev);
  }

  return (
    <Context.Provider>
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
      {!!select.length && (
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
          <ul className="table">
            {state.shops.map((shop) => {
              return (
                <ShopItem
                  shop={shop}
                  key={shop.id}
                  selectedArray={selectedArray}
                  openModal={openModal}
                />
              );
            })}
          </ul>
        </div>
      )}
    </div>
    </Context.Provider>
  );
}

export default Shop;
