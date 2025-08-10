
import React from "react";
import { ThemeContext, useDarkMode } from "../Context/Theme/ThemeContext";
import { FaMoon, FaSun } from "react-icons/fa";

const DarkModeToggler = () => {
  const { darkMode, toggleDarkMode } = useDarkMode()

  return (
    <button
      onClick={toggleDarkMode}
      className="p-2 rounded-full transition-colors duration-300 
                 bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-yellow-400"
    >
      {darkMode ? <FaSun size={18} /> : <FaMoon size={18} />}
    </button>
  );
};

export default DarkModeToggler;
