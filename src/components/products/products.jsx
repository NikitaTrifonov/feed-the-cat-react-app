import React from "react";
import classes from "./products.module.css";
import Product from "./product/product";

const Products = (props) => {
  let productsElements = props.productsData.map((product) => (
    <Product
      type={product.type}
      name={product.name}
      taste={product.taste}
      portionCount={product.portionCount}
      surprise={product.surprise}
      customerState={product.customerState}
      weight={product.weight}
      measure={product.measure}
      info={product.info}
      isOver={product.isOver}
    />
  ));

  return (
    <div className={`${classes.sectionProducts}`}>
      {productsElements}
    </div>
  );
};

export default Products;
