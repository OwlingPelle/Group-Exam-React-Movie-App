import SearchForm from '../SearchForm/SearchForm';
import Favorites from '../Favorites/Favorites.jsx';
import './header.css';
import { Link } from 'react-router-dom';

const Header = ({ favorites }) => {
    return (
        <header className="header">
            <div className="header__flex">
                <Link to="/" className="header-title">
                    Movies!
                </Link>
                <SearchForm />
                <Favorites favorites={favorites} />
            </div>
        </header>
    );
};

export default Header;
