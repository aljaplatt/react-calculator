import { useReducer } from "react";
import "./index";
import "./style.css";

// ALL ACTIONS GLOBAL VARIABLE
export const ACTIONS = {
  ADD_DIGIT: "add-digit",
  CHOOSE_OP: "choose-op",
  CLEAR: "clear",
  DELETE_DIGIT: "delete-digit",
  EVALUATE: "evaluate",
};

function App() {
  /**
      managing all state - preOp, currOp & op - action broken down to = type, payload
      we're going to have many actions and different types of those actions, which will pass along params  
   */
  const reducer = (state, { type, payload }) => {
    // switch on our type - for each case do this...
    switch (type) {
      case ACTIONS.ADD_DIGIT:
        return {
          // return new state object - spread state, replace current Op with curr op + payload digit
          // digit is passed to reducer
          ...state,
          // if current op is null, default to empty string
          currentOperand: `${currOp || ""}${payload.digit}`,
        };
    }
  };
  /**
   * State has different variables -takes in reducer fn and default state {}
   */
  const [{ currOp, preOp, op }, dispatch] = useReducer(reducer, {});

  dispatch({ type: ACTIONS.ADD_DIGIT, payload: { digit: 1 } });
  return (
    <div className="calculator-grid">
      <div className="output">
        {/* state - use reducer - variables inserted into code */}
        <div className="pre-op">
          {preOp} {op}
        </div>
        <div className="curr-op">{currOp}</div>
      </div>
      <button className="span-two">AC</button>
      <button>DEL</button>
      <button>/</button>
      <button>1</button>
      <button>2</button>
      <button>3</button>
      <button>*</button>
      <button>4</button>
      <button>5</button>
      <button>6</button>
      <button>+</button>
      <button>7</button>
      <button>8</button>
      <button>9</button>
      <button>-</button>
      <button>.</button>
      <button>0</button>
      <button className="span-two"> =</button>
    </div>
  );
}

export default App;
