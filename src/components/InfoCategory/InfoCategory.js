import React from "react";
import "./InfoCategory.css";

const InfoCategory = ({
  eventData,
  category,
  dataCategory,
  setInfoCategoryClose,
}) => {
  const catSelected = dataCategory.filter((f) => {
    return f.value === category;
  });

  const handleClick = () => {
    setInfoCategoryClose(false);
  };

  return (
    <div className="infoCategory">
      <h5>
        <span>Total: {eventData.length}</span>
      </h5>
      <p>{catSelected[0]?.description}</p>
      <span onClick={handleClick} className="infoCategory__close">
        x
      </span>
    </div>
  );
};

export default InfoCategory;
