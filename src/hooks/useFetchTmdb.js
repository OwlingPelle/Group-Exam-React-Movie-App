import axios from 'axios';
import { useEffect, useState } from 'react';

export const useFetchTmdb = (imdbId) => {
    const [tmdbDetails, setTmdbDetails] = useState([]);

    useEffect(() => {
        if (!imdbId) return;

        axios
            .get(
                `https://api.themoviedb.org/3/find/${imdbId}?api_key=7bd63df2d9d2e68061557e2b698df9d2&external_source=imdb_id`,
            )
            .then((res) => setTmdbDetails(res.data.movie_results[0]))
            .catch((err) => console.log(err));
    }, [imdbId]);

    return { tmdbDetails };
};
