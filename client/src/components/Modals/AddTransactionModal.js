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
    width: "400px",
    backgroundColor: "#FFFFFF",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    border: "none",
    borderRadius: "8px",
    padding: "24px",
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    zIndex: 1000,
  },
};

const AddTransactionModal = ({
  isOpen,
  closeModal,
  handleTransactionChange,
  handleDescriptionChange,
  handleDateChange,
  transactionToAdd,
  descriptionToAdd,
  dateToAdd,
  handleAddTransactionButtonClick,
}) => {

  

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      style={customStyles}
      ariaHideApp={false}
    >
      <div className="text-center">
        <h2 className="text-xl font-bold mb-6">Add Transaction</h2>
        <div className="mb-4">
          <label htmlFor="transactionInput" className="block text-left mb-2">
            Amount
          </label>
          <input
            id="transactionInput"
            type="number"
            placeholder="Enter amount"
            value={transactionToAdd}
            onChange={handleTransactionChange}
            className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:ring focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="descriptionInput" className="block text-left mb-2">
            Description
          </label>
          <input
            id="descriptionInput"
            type="text"
            placeholder="Enter description"
            value={descriptionToAdd}
            onChange={handleDescriptionChange}
            className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:ring focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="dateInput" className="block text-left mb-2">
            Date
          </label>
          <input
            id="dateInput"
            type="date"
            value={dateToAdd}
            onChange={handleDateChange}
            className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:ring focus:border-blue-500"
          />
        </div>
        <div>
          <button
            onClick={handleAddTransactionButtonClick}
            className="bg-blue-500 text-white py-2 px-4 rounded-md mr-2"
          >
            Add Transaction
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

export default AddTransactionModal;
