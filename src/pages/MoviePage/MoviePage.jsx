import { useParams } from 'react-router-dom';
import './moviePage.css';
import { useFetchDetails } from '../../hooks/useFetchDetails';
import { useEffect } from 'react';
import MoviePageHero from '../../components/MoviePageHero/MoviePageHero';
import MovieDetails from '../../components/MovieDetails/MovieDetails';
import { useFetchTmdb } from '../../hooks/useFetchTmdb';

const MoviePage = ({ favorites, addFavorites, removeFavorites }) => {
    const { id } = useParams();
    const { movie, isLoading, isError } = useFetchDetails(id);
    const { tmdbDetails } = useFetchTmdb(id);

    useEffect(() => {
        console.log(tmdbDetails);
    }, [tmdbDetails]);

    if (movie) {
        return (
            <section className="movie-page">
                <MoviePageHero
                    movie={movie}
                    backdrop={tmdbDetails.backdrop_path}
                />
                <section className="page">
                    <MovieDetails
                        movie={movie}
                        favorites={favorites}
                        addFavorites={addFavorites}
                        removeFavorites={removeFavorites}
                    />
                </section>
            </section>
        );
    }
};

export default MoviePage;
