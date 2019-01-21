import React from "react";
import styles from "./DrawerToggle.module.css";
const drawertoggle = props => (
  <div className={styles.DrawerToggle} onClick={props.clicked}>
    <div />
    <div />
    <div />
  </div>
);

export default drawertoggle;
