import React from "react";
import burgerclass from "./Burger.module.css";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";
const burger = props => {
  let transformingredients = Object.keys(props.ingredients)
    .map(igkey => {
      return [...Array(props.ingredients[igkey])].map((_, i) => {
        return <BurgerIngredient key={igkey + i} type={igkey} />;
      });
    })
    .reduce((arr, el) => {
      return arr.concat(el);
    }, []);
  if (transformingredients.length === 0) {
    transformingredients = <p>Please add some ingredients</p>;
  }
  //console.log(transformingredients);
  return (
    <div className={burgerclass.Burger}>
      <BurgerIngredient type="bread-top" />
      {transformingredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default burger;
