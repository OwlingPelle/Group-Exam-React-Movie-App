import './favBtn.css';

const FavBtnOutline = ({ onClick }) => {
    return <i onClick={onClick} className="fa-regular fa-heart p-absolute"></i>;
};

export default FavBtnOutline;
