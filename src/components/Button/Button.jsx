import './button.css';

const Button = ({ onClick, text, className = '' }) => {
    return (
        <button className={`btn details__btn ${className}`} onClick={onClick}>
            <i className="fa-solid fa-star"></i> {text}
        </button>
    );
};

export default Button;
