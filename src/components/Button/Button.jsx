import './button.css';

const Button = ({ onClick, text, className = '', icon = false }) => {
    return (
        <button className={`btn ${className}`} onClick={onClick}>
            {icon && <i className="fa-solid fa-heart"></i>} {text}
        </button>
    );
};

export default Button;
