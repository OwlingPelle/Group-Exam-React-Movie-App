import './favorites.css';
import { Link } from 'react-router-dom';

const Favorites = () => {
	return (
		<section className='header__favorites'>
			<div className='header__fav-btn' id='favBtn'>
				{/* <i className='fa-solid fa-star header__fav-star'></i> */}
				<Link to='/favorites' className='header__fav-text'>
					Favorites
				</Link>
			</div>
			<div className='header__count-icon d-none' id='favCountContainer'>
				<p className='header__count-number' id='favCount'></p>
			</div>
		</section>
	);
};

export default Favorites;
