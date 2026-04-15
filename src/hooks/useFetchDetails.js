import axios from 'axios';
import { useEffect, useState } from 'react';

export const useFetchDetails = (id) => {
    const [movie, setMovie] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        if (!id) return;

        setIsLoading(true);

        axios
            .get(`http://www.omdbapi.com/?apikey=b866157e&plot=full&i=${id}`)
            .then((res) => setMovie(res.data))
            .catch(() => setIsError(true))
            .finally(() => setIsLoading(false));
    }, [id]);

    return { movie, isLoading, isError };
};
