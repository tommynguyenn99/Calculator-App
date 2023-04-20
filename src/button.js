function Button({ type, className, text, value, handleBtnClick }) {
    return (
        <button type="button" 
                className={`${className} ${type}`}
                onClick={() => handleBtnClick(value, text, type)}>
            <span>{text}</span>
        </button>
    ); 
}

export default Button
