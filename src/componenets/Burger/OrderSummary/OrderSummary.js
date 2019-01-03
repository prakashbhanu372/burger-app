import React from "react";
import Button from "../../UI/Button/Button";
const ordersummary = props => {
  const ordersummaryingredient = Object.keys(props.ingredients).map(igkey => {
    return (
      <li key={igkey}>
        <span style={{ textTransform: "capitalize" }}>{igkey}</span> :
        {props.ingredients[igkey]}
      </li>
    );
  });
  return (
    <React.Fragment>
      <p style={{ textAlign: "center" }}>
        <strong>Current Price : {props.price.toFixed(2)}</strong>
      </p>
      <h3>Your Order</h3>
      <p>A delicious buerger wuth following ingredients:</p>
      <ul>{ordersummaryingredient}</ul>
      <p>Continue to check?</p>
      <Button btnType="Danger" clicked={props.purchasecancel}>
        Cancell
      </Button>
      <Button btnType="Success" clicked={props.purchasecontinue}>
        Continue
      </Button>
    </React.Fragment>
  );
};

export default ordersummary;
