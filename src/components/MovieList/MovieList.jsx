import './movieList.css';
import MovieCard from '../MovieCard/MovieCard';

const MovieList = ({ movies, favorites, addFavorites, removeFavorites }) => {
    return (
        <section className="movie-list">
            {movies.map((movie) => (
                <MovieCard
                    key={movie.imdbID}
                    movie={movie}
                    favorites={favorites}
                    addFavorites={addFavorites}
                    removeFavorites={removeFavorites}
                />
            ))}
        </section>
    );
};

export default MovieList;
