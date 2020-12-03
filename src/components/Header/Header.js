import React, { useEffect, useState } from "react";
import "./Header.css";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";

const Header = ({ category, setCategory }) => {
  const [dataCategory, setDataCategory] = useState([]);

  useEffect(() => {
    const fetchCategory = async () => {
      const res = await fetch(
        "https://eonet.sci.gsfc.nasa.gov/api/v2.1/categories"
      );
      const { categories } = await res.json();
      const cats = categories.map((c) => ({
        value: c.id.toString(),
        label: c.title,
        description: c.description,
      }));
      const catAll = [
        {
          value: "all",
          label: "All",
          description: "",
        },
      ];
      const newCats = catAll.concat(cats);
      setDataCategory(newCats);
    };

    fetchCategory();
  }, []);

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
