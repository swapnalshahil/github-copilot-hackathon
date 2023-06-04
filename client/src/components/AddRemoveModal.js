import React, { useState } from "react";
import Modal from "react-modal";


const AddRemoveModal = ({
  isOpen,
  closeModal,
  handleAmountChange,
  amountToAdd,
  handleAddButtonClick,
}) => {
  console.log("from modal", isOpen)
  return (
    <div>
      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        className="modal"
        overlayClassName="modal-overlay"
      >
        <h2 className="modal-title">Add/Remove Amount</h2>
        <div className="modal-content">
          <input
            type="number"
            placeholder="Enter amount"
            value={amountToAdd}
            onChange={handleAmountChange}
          />
          <div className="modal-buttons">
            <button onClick={handleAddButtonClick} className="modal-button">
              Add Amount
            </button>
            <button onClick={closeModal} className="modal-button">
              Cancel
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default AddRemoveModal;
