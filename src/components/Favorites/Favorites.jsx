import './favorites.css';
import { Link } from 'react-router-dom';

const Favorites = ({ favorites }) => {
    return (
        <section className="header__favorites">
            <div className="header__fav-btn" id="favBtn">
                <Link to="/favorites" className="header__fav-text">
                    Favorites
                </Link>
            </div>
            <div className="header__count-icon" id="favCountContainer">
                <p className="header__count-number" id="favCount">
                    {favorites.length}
                </p>
            </div>
        </section>
    );
};

export default Favorites;
