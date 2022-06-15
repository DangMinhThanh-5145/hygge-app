import CategoryItems from "../CategoryItems";
import React from "react";
import CommonTile from "../Commons/CommonTile";
import "./Category.css";

const Category = () => {
  return (
    <div className="categories-container">
      <CommonTile title="- The Categories" subTitle="Browse by Category" />
      <div className="categories-content">
        <CategoryItems
          imageSrc="assets/sale.svg"
          alt="menu-logo"
          categoryTitle="On Sale"
        />
        <CategoryItems
          imageSrc="assets/arrow.svg"
          alt="featured"
          categoryTitle="Featured"
        />
        <CategoryItems
          imageSrc="assets/box.svg"
          alt="marks"
          categoryTitle="Marks"
        />
        <CategoryItems
          imageSrc="assets/eye.svg"
          alt="eye"
          categoryTitle="Eye Care"
        />
        <CategoryItems
          imageSrc="assets/water.svg"
          alt="moisturizers"
          categoryTitle="Moisturizers"
        />
        <CategoryItems
          imageSrc="assets/shield.svg"
          alt="treatment"
          categoryTitle="Treatment"
        />
        <CategoryItems
          imageSrc="assets/moon.svg"
          alt="moon"
          categoryTitle="Night Care"
        />
        <CategoryItems
          imageSrc="assets/sun.svg"
          alt="sun"
          categoryTitle="Sun Care"
        />
      </div>
    </div>
  );
};

export default Category;
