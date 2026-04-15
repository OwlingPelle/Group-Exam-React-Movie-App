import './favBtn.css';

const FavBtnFilled = ({ onClick }) => {
	return <i onClick={onClick} className='fa-solid fa-star'></i>;
};

export default FavBtnFilled;
