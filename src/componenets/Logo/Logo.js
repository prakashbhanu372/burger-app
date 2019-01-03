import React from "react";
import styles from "./Logo.module.css";
import logoimg from "../../assets/images/burger-logo.png";

const logo = props => (
  <div className={styles.Logo}>
    <img src={logoimg} alt="Burger logo" />
  </div>
);

export default logo;
