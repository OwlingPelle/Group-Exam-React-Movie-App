import './favBtn.css';

const FavBtnOutline = ({ onClick }) => {
	return <i onClick={onClick} className='fa-regular fa-star'></i>;
};

export default FavBtnOutline;
