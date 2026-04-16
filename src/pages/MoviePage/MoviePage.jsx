import { useParams } from 'react-router-dom';
import './moviePage.css';
import { useFetchDetails } from '../../hooks/useFetchDetails';
import MoviePageHero from '../../components/MoviePageHero/MoviePageHero';
import MovieDetails from '../../components/MovieDetails/MovieDetails';

const MoviePage = ({ favorites, addFavorites, removeFavorites }) => {
    const { id } = useParams();
    const { movieDetails, isLoading, isError } = useFetchDetails(id);

    if (isLoading) return <p className="page-msg">Loading...</p>;
    if (isError) return <p className="page-msg">It shit itself...</p>;

    if (movieDetails) {
        return (
            <section className="movie-page">
                <MoviePageHero movie={movieDetails} />
                <section className="page">
                    <MovieDetails
                        movie={movieDetails}
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
