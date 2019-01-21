import React from "react";
import NavigationItem from "./NavigationItem/NavigationItem";
import styles from "./NavigationItems.module.css";
const navigationitems = () => (
  <ul className={styles.Navigationitems}>
    <NavigationItem link="/" active>
      Burger Builder
    </NavigationItem>
    <NavigationItem link="/">CheckOut</NavigationItem>
  </ul>
);
export default navigationitems;
