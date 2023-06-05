import React from "react";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "300px",
    backgroundColor: "#FFFFFF",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    border: "none",
    borderRadius: "8px",
    padding: "16px",
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    zIndex: 1000,
  },
};

const RemoveTransactionModal = ({
  isOpen,
  closeModal,
  handleTransactionChange,
  transactionToRemove,
  handleRemoveTransactionButtonClick,
}) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      style={customStyles}
      ariaHideApp={false}
    >
      <div className="text-center">
        <h2 className="text-xl font-bold mb-4">Remove Transaction</h2>
        <div className="mb-4">
          <input
            type="number"
            placeholder="Enter amount"
            value={transactionToRemove}
            onChange={handleTransactionChange}
            className="border border-gray-300 rounded-md px-3 py-2 w-full"
          />
        </div>
        <div>
          <button
            onClick={handleRemoveTransactionButtonClick}
            className="bg-red-500 text-white py-2 px-4 rounded-md mr-2"
          >
            Remove Transaction
          </button>
          <button
            onClick={closeModal}
            className="bg-gray-300 text-gray-700 py-2 px-4 rounded-md"
          >
            Cancel
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default RemoveTransactionModal;
