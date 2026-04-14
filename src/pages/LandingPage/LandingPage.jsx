import MovieCard from '../../components/MovieCard/MovieCard';
import MovieList from '../../components/MovieList/MovieList';
import TrailerCarousel from '../../components/TrailerCarousel/TrailerCarousel';
import { useFetchRecommended } from '../../hooks/useFetchRecommended';
import { shuffleArray } from '../../utils/shuffleArray';
import './landingPage.css';

const LandingPage = () => {
    const { recommendedMovies, isLoading, isError } = useFetchRecommended();
    const shuffledMovies = shuffleArray(recommendedMovies);

    return (
        <section className="page">
            {!isLoading && !isError && (
                <TrailerCarousel movies={shuffledMovies.slice(0, 5)} />
            )}
            <h2 className="page__title">
                {isLoading
                    ? 'Loading...'
                    : isError
                      ? 'It shit itself...'
                      : 'Recommended Movies'}
            </h2>
            {!isLoading && !isError && <MovieList movies={shuffledMovies} />}
        </section>
    );
};

export default LandingPage;
