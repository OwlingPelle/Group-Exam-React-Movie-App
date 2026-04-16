import axios from 'axios';
import { useEffect, useState } from 'react';

export const useMovieSearch = (query) => {
    const [results, setResults] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        if (!query || query.length < 3) {
            setResults([]);
            setIsLoading(false);
            return;
        }

        setIsLoading(true);
        setIsError(false);

        axios
            .get(`http://www.omdbapi.com/?apikey=e477c237&s=${query}`)
            .then((res) => setResults(res.data.Search || []))
            .catch(() => setIsError(true))
            .finally(() => setIsLoading(false));
    }, [query]);

    return { results, isLoading, isError };
};
