import React from "react";
import { ACTIONS } from "../App";

/**
 * dispatch allows us to call reducer from here
 */

function OpButton({ dispatch, op }) {
  return (
    <button
      // onclick call dispatch
      onClick={() => dispatch({ type: ACTIONS.CHOOSE_OP, payload: { op } })}
    >
      {op}
    </button>
  );
}

export default OpButton;

/**
 * We have a button that has the { digit }, it has an onClick that is calling the dispatch fn ADD.DIGIT fn, then passing along the digit we want to add.
 */
