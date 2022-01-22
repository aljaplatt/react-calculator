import React from "react";
import { ACTIONS } from "../App";

function DigitButton({ dispatch, digit }) {
  return (
    <button
      onClick={() => dispatch({ type: ACTIONS.ADD_DIGIT, payload: { digit } })}
    >
      {digit}
    </button>
  );
}

export default DigitButton;

/**
 * We have a button that has the { digit }, it has an onVlick that is calling the ADD.DIGIT fn, then passing along the digit we want to add.
 */
