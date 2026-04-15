import { useParams } from 'react-router-dom';
import './searchPage.css';
import { useMovieSearch } from '../../hooks/useMovieSearch';
import { useEffect } from 'react';
import MovieList from '../../components/MovieList/MovieList';

const SearchPage = () => {
    const { query } = useParams();
    const { results, isLoading, isError } = useMovieSearch(query);
    useEffect(() => {
        console.log(results);
    }, [results]);
    return (
        <section className="page">
            <h2 className="page__title">
                {isLoading
                    ? 'Loading...'
                    : isError
                      ? 'It shit itself'
                      : `${results.length} results for '${query}'`}
            </h2>
            {!isLoading && !isError && <MovieList movies={results} />}
        </section>
    );
};

export default SearchPage;
