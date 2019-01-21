import React from "react";
import Styles from "./SideDrawer.module.css";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import BackDrop from "../../UI/Backdrop/Backdrop";
const sidedrawer = props => {
  let attactchedClass = [Styles.SideDrawer, Styles.Close];
  if (props.open) {
    attactchedClass = [Styles.SideDrawer, Styles.Open];
  }
  return (
    <React.Fragment>
      <BackDrop show={props.open} close={props.closed} />
      <div className={attactchedClass.join(" ")}>
        <div className={Styles.Logo}>
          <Logo />
        </div>
        <nav>
          <NavigationItems />
        </nav>
      </div>
    </React.Fragment>
  );
};

export default sidedrawer;
