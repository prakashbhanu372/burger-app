import React from "react";
import styles from "./BuildControls.module.css";
import BuildControl from "./BuildControl/BuildControl";
const controls = [
  { label: "Salad", type: "salad" },
  { label: "Bacon", type: "bacon" },
  { label: "Cheese", type: "cheese" },
  { label: "Meat", type: "meat" }
];

const buildcontrols = props => {
  return (
    <div className={styles.BuildControls}>
      <p style={{ textAlign: "center" }}>
        Current Price : {props.price.toFixed(2)}
      </p>
      {controls.map(ctrl => {
        return (
          <BuildControl
            key={ctrl.label}
            label={ctrl.label}
            added={() => props.ingredientAdded(ctrl.type)}
            remove={() => props.ingredientRemove(ctrl.type)}
            disable={props.disable[ctrl.type]}
          />
        );
      })}
      <button
        className={styles.OrderButton}
        disabled={!props.purchase}
        onClick={props.orderd}
      >
        Order Now
      </button>
    </div>
  );
};

export default buildcontrols;
