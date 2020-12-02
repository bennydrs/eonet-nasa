import React from "react";
import "./Header.css";

const Header = ({ category, setCategory }) => {
  const handleChange = (e) => {
    setCategory(e.target.value);
  };
  return (
    <header className="header">
      <h1>Eonet</h1>
      <select value={category} onChange={handleChange}>
        <option value="all">All</option>
        <option value="12">Volcanoes</option>
        <option value="8">Widlfire</option>
      </select>
    </header>
  );
};

export default Header;
