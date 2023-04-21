// button types
export const BUTTON_TYPE = {
  CLEAR: "clear",
  DELETE: "delete",
  OPERATOR: "operator",
  NUMBER: "number",
  ENTER: "enter",
};

// add operations here as needed
export const OPERATIONS = {
  ADD: "add",
  SUBTRACT: "subtract",
  MULTIPLY: "multiply",
  DIVIDE: "divide",
};

export const calculatorButtons = [
  {
    type: BUTTON_TYPE.CLEAR,
    className: "ac",
    text: "AC",
    value: "All Clear",
  },
  {
    type: BUTTON_TYPE.DELETE,
    className: "c",
    text: "C",
    value: "Clear",
  },

  {
    type: BUTTON_TYPE.OPERATOR,
    className: "divide",
    text: "\u00f7",
    value: OPERATIONS.DIVIDE,
  },
  {
    type: BUTTON_TYPE.OPERATOR,
    className: "multiply",
    text: "\u00d7",
    value: OPERATIONS.MULTIPLY,
  },
  {
    type: BUTTON_TYPE.NUMBER,
    className: "one",
    text: 1,
    value: 1,
  },
  {
    type: BUTTON_TYPE.NUMBER,
    className: "two",
    text: 2,
    value: 2,
  },
  {
    type: BUTTON_TYPE.NUMBER,
    className: "three",
    text: 3,
    value: 3,
  },

  {
    type: BUTTON_TYPE.OPERATOR,
    className: "add",
    text: "+",
    value: OPERATIONS.ADD,
  },
  {
    type: BUTTON_TYPE.NUMBER,
    className: "four",
    text: 4,
    value: 4,
  },
  {
    type: BUTTON_TYPE.NUMBER,
    className: "five",
    text: 5,
    value: 5,
  },
  {
    type: BUTTON_TYPE.NUMBER,
    className: "six",
    text: 6,
    value: 6,
  },
  {
    type: BUTTON_TYPE.OPERATOR,
    className: "subtract",
    text: "-",
    value: OPERATIONS.SUBTRACT,
  },
  {
    type: BUTTON_TYPE.NUMBER,
    className: "seven",
    text: 7,
    value: 7,
  },
  {
    type: BUTTON_TYPE.NUMBER,
    className: "eight",
    text: 8,
    value: 8,
  },
  {
    type: BUTTON_TYPE.NUMBER,
    className: "nine",
    text: 9,
    value: 9,
  },
  {
    type: BUTTON_TYPE.ENTER,
    className: "equal",
    text: "=",
    value: "Equal",
  },
  {
    type: BUTTON_TYPE.NUMBER,
    className: "zero",
    text: 0,
    value: 0,
  },
  {
    type: 'memory',
    className: 'ms',
    text: 'MS',
    value: 'Memory Save',
},
{
  type: 'memory',
  className: 'mc',
  text: 'MC',
  value: 'Memory Clear',
},
];
