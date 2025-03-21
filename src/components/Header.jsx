import React, { useEffect, useState, useRef } from "react";
import writing from "../images/writing.jpg";
import CalculatorIcon from "@mui/icons-material/Calculate";
import { Tooltip } from "react-tooltip";
import { evaluate } from "mathjs";
import CalculatorModal from "./CalculatorModal";
import { toast } from "react-toastify";
import { FaBars, FaTimes } from "react-icons/fa"; // Import icons
import { motion } from "framer-motion"; // Import framer-motion
import { useNavigate } from "react-router-dom";

export default function Header({ selectOption, setSelectOption, image, resetToast }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [input, setInput] = useState("");
  const [prevselectOption, setPrevSelectOption] = useState("");
  const [isNavOpen, setIsNavOpen] = useState(false); // State for navbar toggle
  const navigate = useNavigate();
  const navRef = useRef(null); // Ref for detecting outside clicks

  useEffect(() => {
    if (prevselectOption && selectOption !== prevselectOption) {
      toast(`Option changed to ${selectOption}`);
    }
    setPrevSelectOption(selectOption);
  }, [selectOption, prevselectOption]);

  // Close Navbar on Outside Click
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setIsNavOpen(false);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

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
      const sanitizedInput = input.replace(/[^-()\d/*+.]/g, ""); // Sanitize input
      setInput(evaluate(sanitizedInput).toString());
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

  // Logout function
  const handleLogout = () => {
    toast("Logged out successfully!");
    navigate("/login"); // Redirect to login page
  };

  return (
    <div
      className="bg-black text-white p-4 flex justify-between items-center head bg-center bg-no-repeat header"
      style={{ backgroundImage: `url(${writing})` }}
    >
      {/* Logo */}
      <img
        src={image}
        alt=""
        className="w-2/4 h-2/4 relative w-20 sm:ml-0 sm:w-20 sm:h-20"
      />

      {/* Title */}
      <h1
        className="font-bold text-4xl text-head"
        style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.9)" }}
      >
        Remital Calculator
      </h1>

      {/* Navbar Toggle Button for Small Screens */}
      <div className="sm:hidden">
        <button
          onClick={() => setIsNavOpen(!isNavOpen)}
          className="text-white text-2xl"
        >
          {isNavOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Navbar Items */}
      <motion.nav
        ref={navRef}
        initial={{ x: "100%" }}
        animate={{ x: isNavOpen ? 0 : "100%" }}
        transition={{ duration: 0.3 }}
        className={`fixed top-0 right-0 h-full bg-black text-white w-64 sm:static sm:flex sm:w-auto sm:h-auto sm:bg-transparent ${
          isNavOpen ? "block" : "hidden"
        }`}
      >
        <ul className="flex flex-col sm:flex-row sm:items-center sm:space-x-6 p-4 sm:p-0">
          <li className="flex justify-end sm:hidden">
            <button
              onClick={() => setIsNavOpen(false)}
              className="text-white text-2xl mb-4"
            >
              <FaTimes />
            </button>
          </li>
          <li>
            <button
              onClick={toggleModal}
              className="text-white hover:text-green-500 transition"
            >
              Calculator
            </button>
          </li>
          <li>
            <button
              onClick={() => navigate("/history")}
              className="text-white hover:text-green-500 transition"
            >
              History
            </button>
          </li>
          <li>
            <button
              onClick={handleLogout}
              className="text-white hover:text-green-500 transition"
            >
              Logout
            </button>
          </li>
        </ul>
      </motion.nav>

      {/* Tooltip for Calculator Icon */}
      <CalculatorIcon
        data-tooltip-id="Calculator"
        className="calculator_icon cursor-pointer hidden sm:block"
        onClick={toggleModal}
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
    </div>
  );
}