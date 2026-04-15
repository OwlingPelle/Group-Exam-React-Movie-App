import './moviePageHero.css';

const MoviePageHero = ({ movie, backdrop }) => {
    return (
        <section
            className="hero"
            style={{
                backgroundImage: `url('https://image.tmdb.org/t/p/w1280${backdrop}')`,
            }}
        >
            <article className="hero__content">
                <h2 className="hero__title">{movie.Title}</h2>
                <section className="hero__info">
                    <p className="hero__rating">
                        <i className="fa-solid fa-star"></i>{' '}
                        {movie.Ratings[0].Value.slice(0, 3)}
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
