import React, { useState } from "react";
import "./index.css";
import Header from "./Header";
import Display from "./Display";
import Button from "./button";
import { calculatorButtons } from "./calculator-base-button-data.js";

import Footer from "./Footer";

function App() {
  // Display
  const [display, setDisplay] = useState("");
  // Calculate
  const [calcData, setCalcString] = useState("");

  function handleBtnClick(btnValue, btnText, btnType) {
    // case switch based on btnType value
    switch (btnType) {
      case "number":
        processNumberType(btnValue, btnText);
        break;
      case "operator":
        processOperatorType(btnValue, btnText);
        break;
      case "clear":
        processClearType();
        break;
      case "delete":
        processDeleteType();
        break;
      case "enter":
        processEqualType();
        break;
    }
  }

  function processNumberType(dataValue, dataText) {
    setDisplay(`${display}${dataText}`);
    setCalcString(`${calcData}${dataValue}`);
  }

  function processOperatorType(dataValue, dataText) {
    setDisplay(`${display} ${dataText} `);
    setCalcString(`${calcData} ${dataText} `);
  }

  // Clear all
  function processClearType() {
    setDisplay("");
    setCalcString("");
  }

  // Delete single
  function processDeleteType() {
    setDisplay(display.slice(0, -1));
    setCalcString(calcData.slice(0, -1));
  }

  // Equal
  function processEqualType() {
    const result = eval(calcData);
    setDisplay(result.toString());
    setCalcString(result.toString());
  }

  function Calculator() {
    return (
      <div className="calculator">
        <div className="display-row">
          <Display digits={display} />
        </div>
        <div className="button-row">
          {calculatorButtons.map((button) => (
            <Button
              className="buttons"
              key={button.value}
              value={button.value}
              text={button.text}
              type={button.type}
              handleBtnClick={handleBtnClick}
            />
          ))}
        </div>
      </div>
    );
  }

  // Handle Click
  const variables = {
    title: "React Calculator",
    copyright: 2023,
    creator: "Tommy, Brooke, Zybiah",
  };

  return (
    <div className="main-container">
      <Header className="calculator-header" title={variables.title} />

      <Calculator handleBtnClick={handleBtnClick} />

      {/* Footer */}
      <Footer
        className="footer"
        copyright={variables.copyrigt}
        creator={variables.creator}
      />
    </div>
  );
}

export default App;
