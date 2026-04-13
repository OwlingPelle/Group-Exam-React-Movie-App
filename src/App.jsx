import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import LandingPage from './pages/LandingPage/LandingPage';
import FavoritesPage from './pages/FavoritesPage/FavoritesPage';
import SearchPage from './pages/SearchPage/SearchPage';
import MoviePage from './pages/MoviePage/MoviePage';

function App() {
	const router = createBrowserRouter([
		{
			path: '/',
			element: <Layout />,
			children: [
				{
					index: true,
					element: <LandingPage />,
				},
				{
					path: 'favorites',
					element: <FavoritesPage />,
				},
				{
					path: 'movie/:id', // Använd useRef() för att hämta filmen från dess ID
					element: <MoviePage />,
				},
				{
					path: 'search',
					element: <SearchPage />,
				},
			],
		},
	]);

	return (
		<div className='app'>
			<RouterProvider router={router} />
		</div>
	);
}

export default App;
