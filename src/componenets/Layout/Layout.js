import React, { Component } from "react";
import Classm from "./Layout.module.css";
import Toolbar from "../Navigation/Toolbar/Toolbar";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";

class Layout extends Component {
  state = {
    showbackdrop: false
  };

  closebackdrop = () => {
    this.setState({ showbackdrop: false });
  };
  SideDrawertoggler = () => {
    this.setState(prevState => {
      return { showbackdrop: !prevState.showbackdrop };
    });
  };
  render() {
    return (
      <React.Fragment>
        <Toolbar clicking={this.SideDrawertoggler} />
        <SideDrawer
          open={this.state.showbackdrop}
          closed={this.closebackdrop}
        />
        <main className={Classm.Container}>{this.props.children}</main>
      </React.Fragment>
    );
  }
}

export default Layout;
