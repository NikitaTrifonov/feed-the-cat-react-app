import React from "react";
import "./App.css";
import Products from "./components/products/products";
import Header from "./components/header/header";

let App = (props) => {
  return (
    <div className="sectionOuter">
      <div className="sectionInner">
        <Header />
        <Products productsData={props.state.products} />
      </div>
    </div>
  );
};

export default App;
