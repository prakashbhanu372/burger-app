import React, { Component } from "react";
import PropsTypes from "prop-types";
import burgerstyle from "./BurgerIngredient.module.css";

class BurgerIngredient extends Component {
  render() {
    let ingredient = null;

    switch (this.props.type) {
      case "bread-bottom":
        ingredient = <div className={burgerstyle.BreadBottom} />;
        break;
      case "bread-top":
        ingredient = (
          <div className={burgerstyle.BreadTop}>
            <div className={burgerstyle.Seeds1} />
            <div className={burgerstyle.Seeds2} />
          </div>
        );
        break;
      case "meat":
        ingredient = <div className={burgerstyle.Meat} />;
        break;
      case "cheese":
        ingredient = <div className={burgerstyle.Cheese} />;
        break;
      case "bacon":
        ingredient = <div className={burgerstyle.Bacon} />;
        break;
      case "salad":
        ingredient = <div className={burgerstyle.Salad} />;
        break;
      default:
        ingredient = null;
    }
    return ingredient;
  }
}
BurgerIngredient.PropsTypes = {
  type: PropsTypes.string.isRequired
};
export default BurgerIngredient;
