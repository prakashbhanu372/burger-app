import React from "react";

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
      <h3>Your Order</h3>
      <p>A delicious buerger wuth following ingredients:</p>
      <ul>{ordersummaryingredient}</ul>
      <p>Continue to check?</p>
    </React.Fragment>
  );
};

export default ordersummary;
