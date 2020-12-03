import React, { useEffect, useState } from "react";
import "./Header.css";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";

const Header = ({ category, setCategory, dataCategory }) => {
  const handleChange = (e) => {
    setCategory(e.value);
  };
  return (
    <header className="header">
      <h1>EONET</h1>
      <Dropdown
        className="dropdown"
        options={dataCategory}
        onChange={handleChange}
        value={category}
      />
    </header>
  );
};

export default Header;
