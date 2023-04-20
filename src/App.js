import React, { useState } from "react";
import "./index.css";
import Header from "./Header";
import Display from  './Display';
import Button from "./Button";
import { calculatorButtons } from "./calculator-base-button-data.js";
import Footer from "./Footer";


function App() {
  // Display
  const [display, setDisplay] = useState('');
  // Calculate 
  const [calcData, setCalcString] = useState('');

  function handleBtnClick(btnValue, btnText, btnType){
  
    // case switch based on btnType value
    switch(btnType){
      case 'number':
        processNumberType(btnValue, btnText); 
        break;
      case 'operator':
        processOperatorType(btnValue, btnText)
        break;
    }
  }

  function processNumberType(dataValue, dataText){
    setDisplay(`${display}${dataText}`);
    setCalcString(`${calcData}${dataValue}`);
  }

  function processOperatorType(dataValue, dataText){
    setDisplay(`${display} ${dataText} `);
    setCalcString(`${calcData} ${dataText} `);
  }



  function Calculator() {
    return (
      <div className="calculator">
      <Display digits={display}/>
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
    );
  }
  

  // Handle Click 
  const variables = { 
    title: 'React Calculator', 
    copyright: 2023, 
    creator: 'Tommy, Brooke, Zybiah'
  }

  return (
    <div className="main-container">
      <Header className="calculator-header" title={variables.title}/>
  
      <Calculator  handleBtnClick={handleBtnClick} />
    

      {/* Footer */}
      <Footer className="footer" 
              copyright={variables.copyrigt} 
              creator={variables.creator}/>
    </div>
  );
}

export default App;
