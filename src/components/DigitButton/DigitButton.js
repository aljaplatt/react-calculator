import React from "react";
import { ACTIONS } from "../App";

/**
 * dispatch allows us to call reducer from here
 */

function DigitButton({ dispatch, digit }) {
  return (
    <button
      // onclick call dispatch
      onClick={() => dispatch({ type: ACTIONS.ADD_DIGIT, payload: { digit } })}
    >
      {digit}
    </button>
  );
}

export default DigitButton;

/**
 * We have a button that has the { digit }, it has an onClick that is calling the dispatch fn ADD.DIGIT fn, then passing along the digit we want to add.
 */
