import axios from 'axios';
import { useEffect, useState } from 'react';

// Används på LandingPage för att få filmer till trailer-karusell och MovieList
export const useFetchRecommended = () => {
    const [recommendedMovies, setRecommendedMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        setIsLoading(true);

        axios
            .get('https://santosnr6.github.io/Data/favoritemovies.json')
            .then((res) => setRecommendedMovies(res.data))
            .catch(() => setIsError(true))
            .finally(setIsLoading(false));
    }, []);

    return { recommendedMovies, isLoading, isError };
};
