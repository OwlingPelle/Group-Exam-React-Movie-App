import { useMemo } from 'react';
import MovieList from '../../components/MovieList/MovieList';
import TrailerCarousel from '../../components/TrailerCarousel/TrailerCarousel';
import { useFetchRecommended } from '../../hooks/useFetchRecommended';
import { shuffleArray } from '../../utils/shuffleArray';
import './landingPage.css';

const LandingPage = ({ favorites, addFavorites, removeFavorites }) => {
    const { recommendedMovies, isLoading, isError } = useFetchRecommended();

    // Genererad med hjälp av AI
    const shuffledMovies = useMemo(() => {
        return shuffleArray(recommendedMovies);
    }, [recommendedMovies]);

    return (
        <section className="page">
            {!isLoading && !isError && (
                <TrailerCarousel movies={shuffledMovies.slice(0, 5)} />
            )}
            <h1 className="page__title">
                {isLoading
                    ? 'Loading...'
                    : isError
                      ? 'It shit itself...'
                      : 'Recommended Movies'}
            </h1>
            {!isLoading && !isError && (
                <MovieList
                    movies={shuffledMovies}
                    favorites={favorites}
                    addFavorites={addFavorites}
                    removeFavorites={removeFavorites}
                />
            )}
        </section>
    );
};

export default LandingPage;
