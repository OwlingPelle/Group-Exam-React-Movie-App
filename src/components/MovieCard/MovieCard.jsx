import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './movieCard.css';

import { useFavorites } from '../../hooks/useFavorites';
import FavBtnFilled from '../FavButton/FavBtnFilled';
import FavBtnOutline from '../FavButton/FavBtnOutline';
// import imdbLogo from '../../resources/imdb-logo.svg';

const MovieCard = ({ movie, favorites, removeFavorites, addFavorites }) => {
    // kolla om finns i favorites
    const isInFavorites = (imdbID) => {
        if (favorites?.some((movie) => movie.imdbID === imdbID)) return true;
        else return false;
    };

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
                    <div className="card__imdb-container">
                        {/* <img src={imdbLogo} className='card__imdb-icon' alt='IMDB logo' /> */}
                        {/* <p className='card__imdb-rating'>{movie.details.Ratings[0].Value}</p> */}
                        {/* rating måste hämtas från  OMDB api*/}
                    </div>
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
        </div>
    );
};
// const MovieCard = ({ movie }) => {
//     return (
//         <Link className="card" to={`/movie/${movie.imdbID}`}>
//             <article className="card-wrapper">
//                 <div className="card__imdb-container">
//                     {/* <img src={imdbLogo} className='card__imdb-icon' alt='IMDB logo' /> */}
//                     {/* <p className='card__imdb-rating'>{movie.details.Ratings[0].Value}</p> */}
//                     {/* rating måste hämtas från  OMDB api*/}
//                 </div>
//                 <i className="fa-regular fa-star"></i>
//                 <div className="card__image-container"></div>
//                 <img
//                     src={movie.Poster}
//                     className="card__image"
//                     alt={movie.Title}
//                     data-id={movie.imdbID}
//                 />
//                 <div className="card__title-container">
//                     <h3 className="card__title">{movie.Title}</h3>
//                 </div>
//             </article>
//         </Link>
//     );
// };

export default MovieCard;
