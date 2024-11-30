import React, { useState, useEffect } from "react";
import writing from "../images/writing.jpg";
import Calculator_Icon from "@mui/icons-material/Calculate";
import { Tooltip } from "react-tooltip";

export default function Header({ selectOption, setSelectOption, image }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [input, setInput] = useState("");

  // Toggle Modal
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  // Handle button input
  const handleInput = (value) => {
    setInput((prev) => prev + value);
  };

  // Clear Input
  const clearInput = () => {
    setInput("");
  };

  // Calculate result
  const calculateResult = () => {
    try {
      // Sanitize the input to remove unwanted characters
      const sanitizedInput = input.replace(/[^0-9+\-*/().%]/g, "");
      setInput(eval(sanitizedInput).toString());
    } catch (error) {
      setInput("Error");
    }
  };

  // Handle percentage logic
  const handlePercentage = () => {
    try {
      // Calculate the percentage of the current input
      setInput((parseFloat(input) / 100).toString());
    } catch (error) {
      setInput("Error");
    }
  };

  // Handle keyboard input
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
  }, [input]);

  return (
    <div
      className="bg-black text-white p-4 flex justify-between head bg-center bg-no-repeat header"
      style={{ backgroundImage: `url(${writing})` }}
    >
      <img
        src={image}
        alt=""
        className="w-2/4 h-2/4 relative w-20 sm:ml-0 sm:w-20 sm:h-20"
      />
      <h1
        className="font-bold text-4xl text-head"
        style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.9)" }}
      >
        Remital Calculator
      </h1>
      <Calculator_Icon
        data-tooltip-id="Calculator"
        className="calculator_icon cursor-pointer"
        onClick={toggleModal} // Open modal on icon click
      />
      <Tooltip id="Calculator" place="bottom" content="Open Calculator" />

      {/* Calculator Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
          onClick={toggleModal} // Close modal when clicking outside
        >
          <div
            className="bg-white rounded-lg p-6 w-full max-w-lg sm:w-96 relative" // Added 'relative' for positioning the close button
            onClick={(e) => e.stopPropagation()} // Prevent click inside modal from closing it
          >
            {/* Close Button at the top right */}
            <button
              onClick={toggleModal}
              className="cancle-btn absolute top-0 bg-white right-2 text-xl text-gray-600 hover:text-gray-900"
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
                  onClick={
                    item === "C" ? clearInput : () => handleInput(item)
                  }
                >
                  {item}
                </button>
              ))}
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
      )}

      <form action="#">
        <select
          name="location"
          value={selectOption}
          onChange={(e) => setSelectOption(e.target.value)}
          id="header-select"
          className="header-select rounded bg-green-600 text-white mb-1 p-4 pt-2 w-20 h-12 sm:w-24 focus:outline-none"
        >
          <option value="">-Select-</option>
          <option value="Unit">Unit</option>
          <option value="Chapter">Chapter</option>
          <option value="Zone">Zone</option>
          <option value="State">State</option>
        </select>
      </form>
    </div>
  );
}
