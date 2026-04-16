import { useEffect } from 'react';
import './movieDetails.css';
import DetailsList from '../DetailsList/DetailsList';
import Button from '../Button/Button';

const MovieDetails = ({ movie, favorites, addFavorites, removeFavorites }) => {
    const strToArray = (str) => {
        return str.split(', ').map((item) => item.trim());
    };

    const isInFavorites = (imdbID) => {
        if (favorites?.some((movie) => movie.imdbID === imdbID)) return true;
        else return false;
    };

    // useEffect(() => {
    //     console.log(genres);
    // }, [genres]);
    return (
        <section className="details">
            <section className="details__left">
                <img
                    src={movie.Poster}
                    alt={`Poster for ${movie.Title}`}
                    className="details__img"
                />

                {isInFavorites(movie.imdbID) ? (
                    <Button
                        text="Remove from favorites"
                        onClick={() => removeFavorites(movie.imdbID)}
                        className="btn--red"
                    />
                ) : (
                    <Button
                        text="Add to favorites"
                        onClick={() => addFavorites(movie)}
                    />
                )}
            </section>

            <article className="details__info">
                <section className="details__genres">
                    <h3 className="details__subtitle">GENRE</h3>
                    <DetailsList list={strToArray(movie.Genre)} />
                </section>
                <section className="details__plot">
                    <h3 className="details__subtitle">PLOT</h3>
                    <p className="details__text">{movie.Plot}</p>
                </section>
                <section className="details__director">
                    <h3 className="details__subtitle">DIRECTOR</h3>
                    <p className="details__text">{movie.Director}</p>
                </section>
                <section className="details__cast">
                    <h3 className="details__subtitle">CAST</h3>
                    <DetailsList list={strToArray(movie.Actors)} />
                </section>
            </article>
        </section>
    );
};

export default MovieDetails;
