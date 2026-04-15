import './favBtn.css';

const FavBtnFilled = ({ onClick }) => {
    return <i onClick={onClick} className="fa-solid fa-star p-absolute"></i>;
};

export default FavBtnFilled;
