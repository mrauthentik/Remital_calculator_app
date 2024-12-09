
// src/components/CalculatorModal.jsx

import React, { useState, useEffect } from "react";

const CalculatorModal = ({ isModalOpen, toggleModal, input, setInput, calculateResult, handlePercentage, clearInput }) => {
  
  // Handle button input
  const handleInput = (value) => {
    setInput((prev) => prev + value);
  };
  

  // Handle keyboard input for backspace and other keys
  useEffect(() => {
    const handleKeyPress = (e) => {
      const validKeys = "0123456789+-*/.=cC%";
      if (validKeys.includes(e.key)) {
        if (e.key.toLowerCase() === "c") {
          clearInput();
        } else if (e.key === "=" || e.key === "Enter") {
          calculateResult();
        } else if (e.key === "%") {
          handlePercentage();
        } else {
          handleInput(e.key);
        }
      } else if (e.key === "Backspace") {
        setInput((prev) => prev.slice(0, -1)); // Backspace functionality
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [input, setInput, clearInput, calculateResult, handlePercentage]);

  return (
    isModalOpen && (
      <div
        className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
        onClick={toggleModal} // Close modal when clicking outside
      >
        <div
          className="bg-white rounded-lg p-6 w-full max-w-lg sm:w-96 relative"
          onClick={(e) => e.stopPropagation()} // Prevent click inside modal from closing it
        >
          {/* Close Button */}
          <button
            onClick={toggleModal}
            className="absolute top-0 bg-white right-2 text-xl text-gray-600 hover:text-gray-900"
          >
            X
          </button>

          <h2 className="text-xl text-green font-bold mb-4">Calculator</h2>
          <div className="bg-black text-white rounded p-4 mb-4 text-right text-xl font-mono">
            {input || "0"}
          </div>
          <div className="grid grid-cols-4 gap-2">
            {/* Buttons */}
            {["7", "8", "9", "/"].map((item) => (
              <button
                key={item}
                className="bg-black text-white p-4 rounded font-bold hover:bg-gray-800"
                onClick={() => handleInput(item)}
              >
                {item}
              </button>
            ))}
            {["4", "5", "6", "*"].map((item) => (
              <button
                key={item}
                className="bg-black text-white p-4 rounded font-bold hover:bg-gray-800"
                onClick={() => handleInput(item)}
              >
                {item}
              </button>
            ))}
            {["1", "2", "3", "-"].map((item) => (
              <button
                key={item}
                className="bg-black text-white p-4 rounded font-bold hover:bg-gray-800"
                onClick={() => handleInput(item)}
              >
                {item}
              </button>
            ))}
            {["0", ".", "C", "+"].map((item) => (
              <button
                key={item}
                className="bg-black text-white p-4 rounded font-bold hover:bg-gray-800"
                onClick={item === "C" ? clearInput : () => handleInput(item)}
              >
                {item}
              </button>
            ))}
            {/* Backspace Button */}
            <button
              className="bg-black text-white p-4 rounded font-bold hover:bg-gray-800"
              onClick={() => setInput((prev) => prev.slice(0, -1))} // Remove last digit
            >
              ←
            </button>
            {/* Percentage Button */}
            <button
              className="bg-black text-white p-4 rounded font-bold hover:bg-gray-800"
              onClick={handlePercentage}
            >
              %
            </button>
            {/* Equal Button */}
            <button
              className="col-span-4 bg-green-500 text-white p-4 rounded font-bold hover:bg-green-600"
              onClick={calculateResult}
            >
              =
            </button>
          </div>
        </div>
      </div>
    )
  );
};

export default CalculatorModal;
