import React from "react";
import './Modal.css'

function Popup({popupName, closePopup, popup}) {
  return (
    <div>
      <div className={`popupWindow ${popup ? "openPopup" : "" }`}>
        <div className="popupHeader">
            <button onClick={closePopup}>×</button>
        </div>
        <div className="popupBody">
            Product {popupName} added
        </div>
      </div>
    </div>
  );
}
export default Popup;