import MovieList from '../../components/MovieList/MovieList';
import './favoritesPage.css';

const FavoritesPage = ({ favorites, addFavorites, removeFavorites }) => {
    return (
        <section className="page">
            <h1 className="page__title">
                {favorites.length > 0
                    ? `Favorites (${favorites.length})`
                    : 'Your favorites is empty'}
            </h1>
            <MovieList
                movies={favorites}
                favorites={favorites}
                addFavorites={addFavorites}
                removeFavorites={removeFavorites}
            />
        </section>
    );
};

export default FavoritesPage;
