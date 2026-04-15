import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import LandingPage from './pages/LandingPage/LandingPage';
import FavoritesPage from './pages/FavoritesPage/FavoritesPage';
import SearchPage from './pages/SearchPage/SearchPage';
import MoviePage from './pages/MoviePage/MoviePage';
import '@mantine/core';
import { MantineProvider } from '@mantine/core';

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
                    path: 'movie/:id', // Använd useParams() för att hämta filmen från dess ID
                    element: <MoviePage />,
                },
                {
                    path: 'search/:query',
                    element: <SearchPage />,
                },
            ],
        },
    ]);

    return (
        <div className="app">
            <MantineProvider>
                <RouterProvider router={router} />
            </MantineProvider>
        </div>
    );
}

export default App;
