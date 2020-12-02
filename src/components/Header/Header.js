import React from "react";
import "./Header.css";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";

const options = [
  { value: "all", label: "All" },
  { value: "8", label: "Wildfires" },
  { value: "12", label: "Volcanoes" },
  { value: "15", label: "Sea and Lake Ice" },
];

const Header = ({ category, setCategory }) => {
  const handleChange = (e) => {
    setCategory(e.value);
  };
  return (
    <header className="header">
      <h1>Eonet</h1>
      <Dropdown
        className="dropdown"
        options={options}
        onChange={handleChange}
        value={category}
      />
    </header>
  );
};

export default Header;
