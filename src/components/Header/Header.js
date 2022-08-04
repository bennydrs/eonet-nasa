import React from "react"
import "./Header.css"
import Dropdown from "react-dropdown"
import "react-dropdown/style.css"

const Header = ({ category, setCategory, dataCategory, loading }) => {
  const handleChange = (e) => {
    console.log(e.value)
    setCategory(e.value)
  }
  return (
    <header className="header">
      <h1 className="header__title">
        EONET
        <span>The Earth Observatory Natural Event Tracker (powered by NASA)</span>
      </h1>
      <Dropdown
        disabled={loading}
        className="dropdown"
        options={dataCategory}
        onChange={handleChange}
        value={category}
      />
    </header>
  )
}

export default Header
