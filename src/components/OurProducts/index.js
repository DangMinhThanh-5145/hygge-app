import React, { useEffect, useState } from "react";
import CommonTitle from "../Commons/CommonTile";
import CommonButton from "../Commons/CommonButton";
import productAPI from "../services/productAPI";
import ProductItems from "../ProductItems";
import "./OurProducts.css";

const OurProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProduct = async () => {
      const { products } = await productAPI.readProduct();
      setProducts(products);
      console.log(products);
    };
    fetchProduct();
  }, []);

  return (
    <div className="newest-product-container">
      <CommonTitle title="- Our Products" subTitle="Explore our Products" />
      <div className="newest-product-container">
        {products.map((product) => (
          <ProductItems key={product.id} product={product} />
        ))}
      </div>
      <div className="newest-product-button-style">
        <CommonButton
          name="View All"
          variant="contained"
          sx={{
            height: "55",
            width: "150px",
            backgroundColor: "#00CC96",
            fontSize: "15px",
            color: "#FFFFFF",
            padding: "10px",
            marginLeft: "20px",
            borderRadius: "5px",
          }}
        />
      </div>
    </div>
  );
};

export default OurProducts;
