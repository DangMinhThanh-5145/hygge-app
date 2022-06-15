import React from "react";

const CategoryItems = (props) => {
  return (
    <div className="content-container">
      <img src={props.imageSrc} alt={props.alt} height="30px" />
      <h5>{props.categoryTitle}</h5>
    </div>
  );
};

export default CategoryItems;
