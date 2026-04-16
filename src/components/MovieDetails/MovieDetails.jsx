import './movieDetails.css';
import DetailsList from '../DetailsList/DetailsList';
import Button from '../Button/Button';
import { strToArray } from '../../utils/strToArray';
import missingPoster from '../../assets/missing-poster.svg';

const MovieDetails = ({ movie, favorites, addFavorites, removeFavorites }) => {
    const isInFavorites = (imdbID) => {
        if (favorites?.some((movie) => movie.imdbID === imdbID)) return true;
        else return false;
    };

    return (
        <section className="details">
            <section className="details__left">
                <img
                    src={movie.Poster !== 'N/A' ? movie.Poster : missingPoster}
                    alt={`Poster for ${movie.Title}`}
                    className="details__img"
                />

                {isInFavorites(movie.imdbID) ? (
                    <Button
                        text="Remove from favorites"
                        onClick={() => removeFavorites(movie.imdbID)}
                        className="details__btn btn--red"
                        icon={true}
                    />
                ) : (
                    <Button
                        text="Add to favorites"
                        onClick={() => addFavorites(movie)}
                        className="details__btn"
                        icon={true}
                    />
                )}
            </section>

            <article className="details__info">
                <section className="details__genres">
                    <h2 className="details__subtitle">GENRE</h2>
                    <DetailsList list={strToArray(movie.Genre)} />
                </section>
                <section className="details__plot">
                    <h2 className="details__subtitle">PLOT</h2>
                    <p className="details__text">{movie.Plot}</p>
                </section>
                <section className="details__director">
                    <h2 className="details__subtitle">DIRECTOR</h2>
                    <p className="details__text">{movie.Director}</p>
                </section>
                <section className="details__cast">
                    <h2 className="details__subtitle">CAST</h2>
                    <DetailsList list={strToArray(movie.Actors)} />
                </section>
            </article>
        </section>
    );
};

export default MovieDetails;
