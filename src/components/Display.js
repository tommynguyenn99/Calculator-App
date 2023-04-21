function Display({ digits }) {
  // check if digits is a string and if it is empty, then display 0, otherwise display digits
  return (
    <div className="display">
      {typeof digits === "string" && digits.trim() === "" ? "0" : digits}
    </div>
  );
}

export default Display;
