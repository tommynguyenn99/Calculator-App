import React, { useState, useReducer } from "react";
import Header from "./components/Header";
import Display from "./components/Display";
import Button from "./components/Button";
import Footer from "./components/Footer";
import {
  BUTTON_TYPE,
  OPERATIONS,
  calculatorButtons,
} from "./calculator-base-button-data.js";
import "./index.css";
import Calculator from "./components/Calculator";

const variables = {
  title: "React Calculator",
  copyright: new Date().getFullYear(),
  creator: "Tommy, Brooke, Zybiah",
};

const initialState = {
  display: "",
  calcData: "",
  // operatorSymbol is the operator that is displayed
  operatorSymbol: null,
  // operator is the operator that is used in the calculation
  operator: null,
  // value1 is the left side of the equation
  value1: null,
  // value2 is the right side of the equation
  value2: null,
  // result is the result of the calculation
  result: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case BUTTON_TYPE.NUMBER: {
      // if there is no operator, set value1 (left side of equation)
      // if there is an operator, set value2 (right side of equation)
      const newState = {
        ...state,
        value1: state.operator
          ? state.value1
          : +`${state.value1 ?? 0}${action.value}`,
        value2: state.operator
          ? +`${state.value2 ?? 0}${action.value}`
          : state.value2,
      };
      return newState;
    }
    case BUTTON_TYPE.OPERATOR: {
      // if there is no operator, set operator
      return {
        ...state,
        operatorSymbol: action.text,
        operator: action.value,
      };
    }
    case BUTTON_TYPE.CLEAR: {
      return {
        ...state,
        value1: null,
        value2: null,
        operatorSymbol: null,
        operator: null,
        result: null,
      };
    }
    case BUTTON_TYPE.DELETE: {
      if (
        !state.value1 &&
        !state.value2 &&
        !state.operatorSymbol &&
        !state.operator
      ) {
        return state;
      }
      return {
        ...state,
        value1: state.operator
          ? state.value1
          : +state.value1.toString().slice(0, -1),
        value2: state.operator
          ? +state.value2.toString().slice(0, -1)
          : state.value2,
      };
    }
    case BUTTON_TYPE.ENTER: {
      // if there is no operator, or any values are null, return state aka do nothing
      if (
        state.value1 === null ||
        state.value2 === null ||
        state.operatorSymbol === null ||
        state.operator === null
      ) {
        return state;
      }
      switch (state.operator) {
        case OPERATIONS.ADD: {
          return {
            ...state,
            result: state.value1 + state.value2,
          };
        }
        case OPERATIONS.SUBTRACT: {
          return { ...state, result: state.value1 - state.value2 };
        }
        case OPERATIONS.MULTIPLY: {
          return { ...state, result: state.value1 * state.value2 };
        }
        case OPERATIONS.DIVIDE: {
          return {
            ...state,
            result: state.value1 / state.value2,
          };
        }
      }
    }
  }
};

function App() {
  // // Display
  // const [display, setDisplay] = useState("");
  // // Calculate
  // const [calcData, setCalcString] = useState("");
  // https://react.dev/reference/react/useReducer
  // https://react.dev/learn/extracting-state-logic-into-a-reducer
  // Step 1: Move from setting state to dispatching actions
  // Step 2: Write a reducer function
  const [state, dispatch] = useReducer(reducer, initialState);

  // function handleBtnClick(btnValue, btnText, btnType) {
  //   // case switch based on btnType value
  //   switch (btnType) {
  //     case buttonType.NUMBER:
  //       processNumberType(btnValue, btnText);
  //       break;
  //     case buttonType.OPERATOR:
  //       processOperatorType(btnValue, btnText);
  //       break;
  //     case buttonType.CLEAR:
  //       processClearType();
  //       break;
  //     case buttonType.DELETE:
  //       processDeleteType();
  //       break;
  //     case buttonType.ENTER:
  //       processEqualType();
  //       break;
  //   }
  // }

  // function processNumberType(dataValue, dataText) {
  //   setDisplay(`${display}${dataText}`);
  //   setCalcString(`${calcData}${dataValue}`);
  // }

  // function processOperatorType(dataValue, dataText) {
  //   setDisplay(`${display} ${dataText} `);
  //   setCalcString(`${calcData} ${dataText} `);
  // }

  // // Clear all
  // function processClearType() {
  //   setDisplay("");
  //   setCalcString("");
  // }

  // // Delete single
  // function processDeleteType() {
  //   setDisplay(display.slice(0, -1));
  //   setCalcString(calcData.slice(0, -1));
  // }

  // // Equal
  // function processEqualType() {
  //   const result = eval(calcData);
  //   setDisplay(result.toString());
  //   setCalcString(result.toString());
  // }

  return (
    <div className="main-container">
      <Header className="calculator-header" title={variables.title} />
      <Calculator state={state} dispatch={dispatch} />
      {/* Footer */}
      <Footer
        className="footer"
        copyright={variables.copyright}
        creator={variables.creator}
      />
    </div>
  );
}

export default App;
