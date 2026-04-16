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
        setFavorites((prev) => [...prev, movie]);
    };

    const removeFavorites = (imdbID) => {
        const filtered = favorites.filter((movie) => movie.imdbID !== imdbID);
        setFavorites(filtered);
    };

    let qty = favorites.length;

    return { favorites, addFavorites, removeFavorites, qty };
};
