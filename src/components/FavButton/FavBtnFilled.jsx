import './favBtn.css';

const FavBtnFilled = ({ onClick }) => {
    return <i onClick={onClick} className="fa-solid fa-heart p-absolute"></i>;
};

export default FavBtnFilled;
