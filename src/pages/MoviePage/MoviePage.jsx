import { useParams } from 'react-router-dom';
import './moviePage.css';
import { useFetchDetails } from '../../hooks/useFetchDetails';
import { useEffect } from 'react';

const MoviePage = () => {
    const { id } = useParams();
    const { movie, isLoading, isError } = useFetchDetails(id);

    useEffect(() => {
        console.log(movie);
    }, [movie]);

    return (
        <section className="page movie-page">
            {isLoading ? <p>Loading...</p> : <p>It shit itself...</p>}
            <h2 className="movie-page__title"></h2>
        </section>
    );
};

export default MoviePage;
