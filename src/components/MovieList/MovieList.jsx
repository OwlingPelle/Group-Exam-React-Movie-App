import './movieList.css';
import MovieCard from '../MovieCard/MovieCard';

const MovieList = ({ movies }) => {
    return (
        <section className="movie-list">
            {movies.map((movie) => (
                <MovieCard key={movie.imdbID} movie={movie} />
            ))}
        </section>
    );
};

export default MovieList;
