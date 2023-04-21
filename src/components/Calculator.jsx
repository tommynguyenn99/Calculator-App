import { calculatorButtons } from "../calculator-base-button-data";
import Button from "./Button";
import Display from "./Display";

export const Calculator = ({ state, dispatch }) => {
  return (
    <div className="calculator">
      <div className="display-row">
        <Display
          // if there is a result, display it, otherwise display the value1, operatorSymbol, and value2
          digits={
            state.result ??
            `${state.value1 ?? ""} ${state.operatorSymbol ?? ""} ${
              state.value2 ?? ""
            }`
          }
        />
      </div>
      <div className="button-row">
        {calculatorButtons.map((button) => (
          <Button
            className="buttons"
            key={button.value}
            value={button.value}
            text={button.text}
            type={button.type}
            // our click handler will dispatch an action to the reducer with the button's type and value and text to determine what action to take and what to do with the value
            handleBtnClick={() =>
              dispatch({
                type: button.type,
                value: button.value,
                text: button.text,
              })
            }
          />
        ))}
      </div>
    </div>
  );
};

export default Calculator;
