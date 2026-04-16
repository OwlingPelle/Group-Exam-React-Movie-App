import { useParams } from 'react-router-dom';
import './searchPage.css';
import { useMovieSearch } from '../../hooks/useMovieSearch';
import MovieList from '../../components/MovieList/MovieList';

const SearchPage = ({ favorites, addFavorites, removeFavorites }) => {
    const { query } = useParams();
    const { results, isLoading, isError } = useMovieSearch(query);

    return (
        <section className="page">
            <h1 className="page__title">
                {isLoading
                    ? 'Loading...'
                    : isError
                      ? 'It shit itself'
                      : `${results.length} results for '${query}'`}
            </h1>
            {!isLoading && !isError && (
                <MovieList
                    movies={results}
                    favorites={favorites}
                    addFavorites={addFavorites}
                    removeFavorites={removeFavorites}
                />
            )}
        </section>
    );
};

export default SearchPage;
