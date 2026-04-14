import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './movieCard.css';
import imdbLogo from '../../resources/imdb-logo.svg';

const MovieCard = ({ movie }) => {
    return (
        <Link className="card" to={`/movie/${movie.imdbID}`}>
            <article className="card-wrapper">
                <div className="card__imdb-container">
                    {/* <img src={imdbLogo} className='card__imdb-icon' alt='IMDB logo' /> */}
                    {/* <p className='card__imdb-rating'>{movie.details.Ratings[0].Value}</p> */}
                    {/* rating måste hämtas från  OMDB api*/}
                </div>
                <i className="fa-regular fa-star"></i>
                <div className="card__image-container"></div>
                <img
                    src={movie.Poster}
                    className="card__image"
                    alt={movie.Title}
                    data-id={movie.imdbID}
                />
                <div className="card__title-container">
                    <h3 className="card__title">{movie.Title}</h3>
                </div>
            </article>
        </Link>
    );
};

export default MovieCard;
