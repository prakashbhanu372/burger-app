import React from "react";
import Classm from "./Layout.module.css";
import Toolbar from "../Navigation/Toolbar/Toolbar";
const layout = props => (
  <React.Fragment>
    <Toolbar />
    <main className={Classm.Container}>{props.children}</main>
  </React.Fragment>
);
export default layout;
