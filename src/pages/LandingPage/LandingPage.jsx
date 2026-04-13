import { useFetchRecommended } from '../../hooks/useFetchRecommended';
import { shuffleArray } from '../../utils/shuffleArray';
import './landingPage.css';

const LandingPage = () => {
    const { recommendedMovies, isLoading, isError } = useFetchRecommended();
    console.log(recommendedMovies);

    return <section className="page"></section>;
};

export default LandingPage;
