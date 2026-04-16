import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './movieCard.css';

import { useFavorites } from '../../hooks/useFavorites';
import FavBtnFilled from '../FavButton/FavBtnFilled';
import FavBtnOutline from '../FavButton/FavBtnOutline';
import { useFetchDetails } from '../../hooks/useFetchDetails';
// import imdbLogo from '../../resources/imdb-logo.svg';

const MovieCard = ({ movie, favorites, removeFavorites, addFavorites }) => {
    // kolla om finns i favorites
    const isInFavorites = (imdbID) => {
        if (favorites?.some((movie) => movie.imdbID === imdbID)) return true;
        else return false;
    };

    const { movieDetails } = useFetchDetails(movie.imdbID);

    return (
        <div className="card">
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
                <article className="card-wrapper">
                    {movieDetails && (
                        <div className="card__imdb-container">
                            <i className="fa-regular fa-star"></i>
                            <p className="card__imdb-rating">
                                {movieDetails.imdbRating}
                            </p>
                        </div>
                    )}

                    <div className="card__image-container"></div>
                    <img
                        src={movie.Poster}
                        className="card__image"
                        alt={`Poster for ${movie.Title}`}
                        data-id={movie.imdbID}
                    />
                    <div className="card__title-container">
                        <h3 className="card__title">{movie.Title}</h3>
                    </div>
                </article>
            </Link>
        </div>
    );
};

export default MovieCard;
