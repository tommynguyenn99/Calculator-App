import { calculatorButtons } from "../calculator-base-button-data";
import Button from "./Button";
import Display from "./Display";

export const Calculator = ({ state, dispatch }) => {
  return (
    <div className="calculator">
      <div className="display-row">
        <Display
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
            // handleBtnClick={handleBtnClick}
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
