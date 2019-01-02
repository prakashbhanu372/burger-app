import React, { Component } from "react";

import Burger from "../../componenets/Burger/Burger";
import BuildControls from "../../componenets/Burger/BuildControls/BuildControls";
import Modal from "../../componenets/UI/Modal/Modal";
import OrderSummary from "../../componenets/Burger/OrderSummary/OrderSummary";
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
    purchasable: false,
    purchasing: false
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
  purchaseHandler = () => {
    this.setState({ purchasing: true });
  };
  closedBackdrop = () => {
    this.setState({ purchasing: false });
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
        <Modal show={this.state.purchasing} closed={this.closedBackdrop}>
          <OrderSummary
            ingredients={this.state.ingredients}
            price={this.state.totalPrice}
          />
        </Modal>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          ingredientAdded={this.addIngredientHandler}
          ingredientRemove={this.removeIngredientHandler}
          disable={disableInfo}
          price={this.state.totalPrice}
          purchase={this.state.purchasable}
          orderd={this.purchaseHandler}
        />
      </React.Fragment>
    );
  }
}

export default BurgerBuilder;
