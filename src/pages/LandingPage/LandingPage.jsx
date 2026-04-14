import MovieCard from '../../components/MovieCard/MovieCard';
import { useFetchRecommended } from '../../hooks/useFetchRecommended';
import { shuffleArray } from '../../utils/shuffleArray';
import './landingPage.css';

const LandingPage = () => {
	// return <div>LandingPage</div>;

	const { recommendedMovies, isLoading, isError } = useFetchRecommended();
	console.log(recommendedMovies);

	// if (isLoading) return <p>Laddar...</p>;
	// if (isError) return <p>Nånting gick fel</p>;
	// if (!recommendedMovies.length) return <p>Inga filmer hittades</p>;

	return (
		<section className='page-wrapper'>
			<h2 className='page-title'>Recommended Movies</h2>
			<section className='page'>
				{/* <MovieCard movie={recommendedMovies[0]} /> */}
				{shuffleArray(recommendedMovies).map((movie) => (
					<MovieCard key={movie.imdbID} movie={movie} />
				))}
			</section>
		</section>
	);
};

export default LandingPage;
