import React from "react";
import classes from "./header.module.css";

const Header = (props) => {
  return (
    <div className={`${classes.sectionHeader}`}>
      Ты сегодня покормил кота?
    </div>
  );
};

export default Header;
