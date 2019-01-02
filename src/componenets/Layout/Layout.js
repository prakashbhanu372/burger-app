import React from "react";
import Classm from "./Layout.module.css";
const layout = props => (
  <React.Fragment>
    <div>Toolbar, Backdrawer, Sidebar</div>
    <main className={Classm.Container}>{props.children}</main>
  </React.Fragment>
);
export default layout;
