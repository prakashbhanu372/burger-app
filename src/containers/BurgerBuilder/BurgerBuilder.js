import React, { Component } from "react";

import Burger from "../../componenets/Burger/Burger";
import BuildControls from "../../componenets/Burger/BuildControls/BuildControls";
const INGREDIENTS_PRICE = {
  salad: 0.5,
  bacon: 1.7,
  cheese: 0.3,
  meat: 1
};
class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0
    },
    totalPrice: 4,
    purchasable: false
  };

  purchasableState = ingredients => {
    const sum = Object.keys(ingredients).reduce((sum, ingredient) => {
      return sum + ingredients[ingredient];
    }, 0);

    this.setState({ purchasable: sum > 0 });
  };
  addIngredientHandler = type => {
    const oldCount = this.state.ingredients[type];
    const updatedCount = oldCount + 1;
    const updatedIngredients = {
      ...this.state.ingredients
    };
    console.log(updatedIngredients);
    updatedIngredients[type] = updatedCount;
    const priceAdition = INGREDIENTS_PRICE[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice + priceAdition;
    this.setState({ totalPrice: newPrice, ingredients: updatedIngredients });
    this.purchasableState(updatedIngredients);
  };

  removeIngredientHandler = type => {
    const oldCount = this.state.ingredients[type];
    if (oldCount <= 0) {
      return;
    }
    const updatedCount = oldCount - 1;
    const updatedIngredients = {
      ...this.state.ingredients
    };

    updatedIngredients[type] = updatedCount;
    const priceAdition = INGREDIENTS_PRICE[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice - priceAdition;
    this.setState({ totalPrice: newPrice, ingredients: updatedIngredients });
    this.purchasableState(updatedIngredients);
  };
  render() {
    const disableInfo = {
      ...this.state.ingredients
    };
    for (let key in disableInfo) {
      disableInfo[key] = disableInfo[key] <= 0;
    }
    return (
      <React.Fragment>
        <Burger ingredients={this.state.ingredients} />
        {/*<BuildControls label={this.state.ingredients} />*/}
        <BuildControls
          ingredientAdded={this.addIngredientHandler}
          ingredientRemove={this.removeIngredientHandler}
          disable={disableInfo}
          price={this.state.totalPrice}
          purchase={this.state.purchasable}
        />
      </React.Fragment>
    );
  }
}

export default BurgerBuilder;
