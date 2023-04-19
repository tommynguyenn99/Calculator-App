import React from "react";
import "./index.css";
import Header from "./Header";
import { calculatorButtons } from "./calculator-base-button-data.js";
import Footer from "./Footer";


function Calculator() {
  return (
    <div className="calculator">
      {calculatorButtons.map((button) => (
        <button key= {button.value}>{button.text}</button>
      ))}
    </div>
  );
}




function App() {

// Handle Click 
const variables = { 
    title: 'React Calculator', 
    copyright: 2023, 
    creator: 'Tommy, Brooke, Zybiah'
}

  return (
    <div className="main-container">
      <Header className="calculator-header" title={variables.title}/>
      <Calculator/>
      {/* Footer */}
      <Footer className="footer" copyright={variables.copyright} creator={variables.creator}/>
    </div>
  );
}

export default App;
