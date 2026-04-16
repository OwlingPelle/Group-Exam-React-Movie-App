import { Link } from 'react-router-dom';
import './movieCard.css';
import FavBtnFilled from '../FavButton/FavBtnFilled';
import FavBtnOutline from '../FavButton/FavBtnOutline';
import { useFetchDetails } from '../../hooks/useFetchDetails';
import missingPoster from '../../assets/missing-poster.svg';

const MovieCard = ({ movie, favorites, removeFavorites, addFavorites }) => {
    const isInFavorites = (imdbID) => {
        if (favorites?.some((movie) => movie.imdbID === imdbID)) return true;
        else return false;
    };

    const { movieDetails } = useFetchDetails(movie.imdbID);

    return (
        <article className="card">
            {isInFavorites(movie.imdbID) ? (
                <FavBtnFilled
                    onClick={() => {
                        removeFavorites(movie.imdbID);
                    }}
                />
            ) : (
                <FavBtnOutline
                    onClick={() => {
                        addFavorites(movie);
                    }}
                />
            )}

            <Link to={`/movie/${movie.imdbID}`}>
                <section className="card-wrapper">
                    {movieDetails && (
                        <div className="card__imdb-container">
                            <i className="fa-regular fa-star"></i>
                            <p className="card__imdb-rating">
                                {movieDetails.imdbRating}
                            </p>
                        </div>
                    )}
                    <img
                        src={
                            movie.Poster !== 'N/A'
                                ? movie.Poster
                                : missingPoster
                        }
                        className="card__image"
                        alt={`Poster for ${movie.Title}`}
                        data-id={movie.imdbID}
                    />
                    <section className="card__title-container">
                        <h2 className="card__title">{movie.Title}</h2>
                        {movieDetails && (
                            <p className="card__year">{movieDetails.Year}</p>
                        )}
                    </section>
                </section>
            </Link>
        </article>
    );
};

export default MovieCard;
