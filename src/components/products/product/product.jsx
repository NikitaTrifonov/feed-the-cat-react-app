import React, { useState } from "react";
import classes from "./product.module.css";

const Product = (props) => {
  const [isSelected, setIsSelected] = useState(false);
  const [isHover, setIsHover] = useState(false);

  const changeIsSelected = () => {
    isSelected ? setIsSelected(false) : setIsSelected(true);
  };

  // Change render Product Background

  const checkIsOverProductBack = () => {
    if (props.isOver) return classes.isOverProductBack;
    return checkIsSelectedProductBack();
  };

  const checkIsSelectedProductBack = () => {
    if (isSelected) return checkIsHoverSelectedProductBack();
    return checkIsHoverDefaultProductBack();
  };

  const checkIsHoverSelectedProductBack = () => {
    if (isHover) return classes.selectedProductBackHover;
    return classes.selectedProductBack;
  };

  const checkIsHoverDefaultProductBack = () => {
    if (isHover) return classes.defaultProductBackHover;
    return classes.defaultProductBack;
  };

  // Change render Product WeightCircle

  const checkIsOverWeightCircle = () => {
    if (props.isOver) return classes.isOverProductWeightCircle;
    return checkIsSelectedWeightCircle();
  };

  const checkIsSelectedWeightCircle = () => {
    if (isSelected) return checkIsHoverSelectedWeightCircle();
    return checkIsHoverDefaultWeightCircle();
  };

  const checkIsHoverSelectedWeightCircle = () => {
    if (isHover) return classes.selectedProductWeightCircleHover;
    return classes.selectedProductWeightCircle;
  };

  const checkIsHoverDefaultWeightCircle = () => {
    if (isHover) return classes.defaultProductWeightCircleHover;
    return classes.defaultProductWeightCircle;
  };

  // Change render Product Info

  const renderProductInfo = () => {
    if (isSelected && !isHover) {
      return (
        <span className={classes.selectedProductTypeHover}>
          Котэ не одобряет?
        </span>
      );
    }
    return (
      <div className={`${classes.productType} ${checkIsOverProductType()}`}>
        {props.type}
      </div>
    );
  };

  const checkIsOverProductDescription = () => {
    if (props.isOver) return classes.isOverProductDescription;
  };

  const checkIsOverProductType = () => {
    if (props.isOver) return classes.isOverProductType;
    return checkIsHoverSelectedProductType();
  };

  const checkIsHoverSelectedProductType = () => {
    if (isSelected && isHover) return;
  };

  const checkIsOverProductAddInfo = () => {
    if (props.isOver) return classes.isOverProductAdditionalInformation;
  };

  // Change render Product Footer

  const checkIsOverProductFooter = () => {
    if (props.isOver) {
      return (
        <span className={`${classes.footerInfoIsOver}`}>
          Печалька, {props.taste} закончился.
        </span>
      );
    }
    return changeFooterInfo();
  };

  const changeFooterInfo = () => {
    if (isSelected)
      return <span className={`${classes.footerInfo}`}>{props.info}</span>;
    return (
      <span>
        Чего сидишь? Порадуй котэ,{" "}
        <span className={checkIsHoverFooter()} onClick={changeIsSelected}>
          {" "}
          купи
        </span>
        <span className={classes.point}>.</span>
      </span>
    );
  };

  const checkIsHoverFooter = () => {
    if (isHover) return classes.buyHover;
    return classes.buy;
  };

  // JSX

  return (
    <div className={classes.productWrapper}>
      <div
        className={`${classes.productBody} ${checkIsOverProductBack()}`}
        onClick={changeIsSelected}
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      >
        <div
          className={`${
            classes.productDescription
          } ${checkIsOverProductDescription()}`}
        >
          {renderProductInfo()}
          <div className={classes.productName}>{props.name}</div>
          <div className={classes.productTaste}>{props.taste}</div>
          <div
            className={`${
              classes.additionalInformation
            } ${checkIsOverProductAddInfo()}`}
          >
            <div className={classes.portionCount}>
              {`${props.portionCount} порций`}
            </div>
            <div className={classes.surprise}>{props.surprise}</div>
            <div className={classes.customerState}>{props.customerState}</div>
          </div>
        </div>
        <div className={`${classes.weightCircle} ${checkIsOverWeightCircle()}`}>
          <div className={classes.weightInfo}>
            <div className={classes.weightValue}>{props.weight}</div>
            <div className={classes.measure}>{props.measure}</div>
          </div>
        </div>
      </div>
      <div className={classes.productFooter}>
        <div className={classes.info}>{checkIsOverProductFooter()}</div>
      </div>
    </div>
  );
};

export default Product;
