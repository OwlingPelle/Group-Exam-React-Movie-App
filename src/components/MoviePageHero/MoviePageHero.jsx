import './moviePageHero.css';
import { useFetchTmdb } from '../../hooks/useFetchTmdb';

const MoviePageHero = ({ movie }) => {
    const { tmdbDetails } = useFetchTmdb(movie.imdbID);

    return (
        <section
            className="hero"
            style={{
                backgroundImage: `url('https://image.tmdb.org/t/p/w1280${tmdbDetails?.backdrop_path}')`,
            }}
        >
            <article className="hero__content">
                <h1 className="hero__title">{movie.Title}</h1>
                <section className="hero__info">
                    <p className="hero__rating">
                        <i className="fa-solid fa-star"></i>{' '}
                        {movie.Ratings[0]?.Value.slice(0, 3) || 'N/A'}
                    </p>
                    <p className="hero__year">
                        <i className="fa-regular fa-calendar"></i> {movie.Year}
                    </p>
                    <p className="hero__runtime">
                        <i className="fa-regular fa-clock"></i> {movie.Runtime}
                    </p>
                </section>
            </article>
        </section>
    );
};

export default MoviePageHero;
