function Display({ digits }) {
  return (
    <div className="display">
      {typeof digits === "string" && digits.trim() === "" ? "0" : digits}
    </div>
  );
}

export default Display;
