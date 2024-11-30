// src/components/Header.jsx

import React, { useState } from "react";
import writing from "../images/writing.jpg";
import Calculator_Icon from "@mui/icons-material/Calculate";
import { Tooltip } from "react-tooltip";
import CalculatorModal from "./CalculatorModal"; // Importing the modal component

export default function Header({ selectOption, setSelectOption, image }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [input, setInput] = useState("");

  // Toggle Modal
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  // Clear Input
  const clearInput = () => {
    setInput("");
  };

  // Calculate result
  const calculateResult = () => {
    try {
      const sanitizedInput = input.replace(/[^0-9+\-*/().%]/g, "");
      setInput(eval(sanitizedInput).toString());
    } catch {
      setInput("Error");
    }
  };

  // Handle percentage logic
  const handlePercentage = () => {
    try {
      setInput((parseFloat(input) / 100).toString());
    } catch {
      setInput("Error");
    }
  };

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
      <CalculatorModal
        isModalOpen={isModalOpen}
        toggleModal={toggleModal}
        input={input}
        setInput={setInput}
        calculateResult={calculateResult}
        handlePercentage={handlePercentage}
        clearInput={clearInput}
      />

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
