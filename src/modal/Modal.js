import React from "react";
import './Modal.css'

function Modal({deleteItem, closeModal}) {
  function deleteHandler(){
    deleteItem();
    closeModal()
  }
  return (
    <div className="modal">
      <div className="modalWindow">
        <div className="modalBody">
          Title
        </div>
        <div className="modalFooter">
          <button onClick={deleteHandler}>Так</button>
          <button onClick={closeModal}>Ні</button>
        </div>
      </div>
    </div>
  );
}
export default Modal;