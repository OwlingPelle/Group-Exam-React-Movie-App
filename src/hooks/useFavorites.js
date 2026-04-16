import { useEffect, useState } from 'react';

export const useFavorites = () => {
    const [favorites, setFavorites] = useState(() => {
        const stored = localStorage.getItem('favorites');
        return JSON.parse(stored) || [];
    });

    useEffect(() => {
        localStorage.setItem('favorites', JSON.stringify(favorites));
    }, [favorites]);

    const addFavorites = (movie) => {
        console.log(movie);
        setFavorites((prev) => [...prev, movie]);
    };

    const removeFavorites = (imdbID) => {
        const filtered = favorites.filter((movie) => movie.imdbID !== imdbID);
        setFavorites(filtered);
    };

    return { favorites, addFavorites, removeFavorites };
};
