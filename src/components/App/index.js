import { useReducer } from "react";
import "./index";
import "./style.css";
import DigitButton from "../DigitButton/DigitButton";
import OpButton from "../OpButton/OpButton";

// ALL ACTIONS GLOBAL VARIABLE
export const ACTIONS = {
  ADD_DIGIT: "add-digit",
  CHOOSE_OPERATION: "choose-operation",
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
        //edge cases - return state = make no changes - prevent adding more than one zero, if already 0.
        if (payload.digit === "0" && state.currentOperand === "0") return state;
        // if the digit is a period, does the current Op already include a period, if yes return current state.
        if (payload.digit === "." && state.currentOperand.includes("."))
          return state;
        return {
          // return new state object - spread state, replace current Op with curr op + payload digit
          // digit is passed to reducer
          ...state,
          // if current op is null, default to empty string - take curr Op and add digit to it.
          currentOperand: `${currentOperand || ""}${payload.digit}`,
        };
      case ACTIONS.CHOOSE_OPERATION:
        // do nothing if a operator is clicked but the state is null
        if (state.currentOperand == null && state.preOp == null) {
          return state;
        }
        // if our previousOp is null, but current op is not equal to null, passed the above check - then user has typed but no operand
        if (state.previousOperand == null) {
          return {
            ...state,
            operation: payload.operation,
            previousOperand: state.currentOperand,
            currentOperand: null,
          };
        }

        return {
          //
          ...state,
          previousOperand: evaluate(state),
          operation: payload.operation,
          currentOperand: null,
        };
      case ACTIONS.CLEAR:
        // RETURN EMPTY STATE - remove everything
        return {};
      default:
        console.log(`Default message`);
    }
  };

  const evaluate = ({ currentOperand, previousOperand, operation }) => {
    // convert these strings to numbers
    const prev = parseFloat(previousOperand);
    const current = parseFloat(currentOperand);
    // if not a number , return empty string
    if (isNaN(prev) || isNaN(current)) return "";
    let computation = "";
    switch (operation) {
      case "+":
        computation = prev + current;
        break;
      case "-":
        computation = prev - current;
        break;
      case "*":
        computation = prev * current;
        break;
      case "/":
        computation = prev / current;
        break;
      default:
        console.log(`Default message`);
    }
    return computation.toString();
  };
  /**
   * State has different variables -takes in reducer fn and default state {}
   */
  const [{ currentOperand, previousOperand, operation }, dispatch] = useReducer(
    reducer,
    {}
  );

  return (
    <div className="calculator-grid">
      <div className="output">
        {/* state - use reducer - variables inserted into code */}
        <div className="previuos-operand">
          {previousOperand} {operation}
        </div>
        <div className="current-operand">{currentOperand}</div>
      </div>
      <button
        className="span-two"
        // fn calls dispatch fn, pass in the type, ACTIONS.CLEAR
        onClick={() => dispatch({ type: ACTIONS.CLEAR })}
      >
        AC
      </button>
      <button>DEL</button>
      <OpButton op="/" dispatch={dispatch} />
      <DigitButton digit="1" dispatch={dispatch} />
      <DigitButton digit="2" dispatch={dispatch} />
      <DigitButton digit="3" dispatch={dispatch} />
      <OpButton op="*" dispatch={dispatch} />
      <DigitButton digit="4" dispatch={dispatch} />
      <DigitButton digit="5" dispatch={dispatch} />
      <DigitButton digit="6" dispatch={dispatch} />
      <OpButton op="+" dispatch={dispatch} />
      <DigitButton digit="7" dispatch={dispatch} />
      <DigitButton digit="8" dispatch={dispatch} />
      <DigitButton digit="9" dispatch={dispatch} />
      <OpButton op="-" dispatch={dispatch} />
      <DigitButton digit="." dispatch={dispatch} />
      <DigitButton digit="0" dispatch={dispatch} />
      <button className="span-two"> =</button>
    </div>
  );
}

export default App;
