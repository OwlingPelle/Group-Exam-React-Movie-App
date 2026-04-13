import SearchField from '../SearchField/SearchField';
import Favorites from '../Favorites/Favorites.jsx';
import './header.css';
import { Link } from 'react-router-dom';

const Header = () => {
	return (
		<header className='header'>
			<div className='content-wrapper header__flex'>
				<Link to='/' className='header-title'>
					Movies!
				</Link>
				<SearchField />
				<Favorites />
			</div>
		</header>
	);
};

export default Header;
