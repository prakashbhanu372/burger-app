import React from "react";
import styles from "./Modal.module.css";
import Backdrop from "../Backdrop/Backdrop";
const modal = props => (
  <React.Fragment>
    <Backdrop show={props.show} close={props.closed} />
    <div
      className={styles.Modal}
      style={{
        transform: props.show ? "translateY(0)" : "translateY(-100vh)",
        opacity: props.show ? "1" : "0.5"
      }}
    >
      {props.children}
    </div>
  </React.Fragment>
);

export default modal;
