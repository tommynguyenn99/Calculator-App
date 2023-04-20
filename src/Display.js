function Display({ digits }) {
    return (
        <div className="display">
            {digits === '' ? '0' : digits}
        </div>
    )
}

export default Display
