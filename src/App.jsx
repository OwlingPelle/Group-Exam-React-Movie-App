import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import LandingPage from './pages/LandingPage/LandingPage';
import FavoritesPage from './pages/FavoritesPage/FavoritesPage';
import SearchPage from './pages/SearchPage/SearchPage';
import MoviePage from './pages/MoviePage/MoviePage';
import { useFavorites } from './hooks/useFavorites';
import '@mantine/core';
import { MantineProvider } from '@mantine/core';

function App() {
    const { favorites, addFavorites, removeFavorites } = useFavorites();

    const router = createBrowserRouter([
        {
            path: '/',
            element: <Layout />,
            children: [
                {
                    index: true,
                    element: (
                        <LandingPage
                            favorites={favorites}
                            addFavorites={addFavorites}
                            removeFavorites={removeFavorites}
                        />
                    ),
                },
                {
                    path: 'favorites',
                    element: (
                        <FavoritesPage
                            favorites={favorites}
                            addFavorites={addFavorites}
                            removeFavorites={removeFavorites}
                        />
                    ),
                },
                {
                    path: 'movie/:id', // Använd useParams() för att hämta filmen från dess ID
                    element: (
                        <MoviePage
                            favorites={favorites}
                            addFavorites={addFavorites}
                            removeFavorites={removeFavorites}
                        />
                    ),
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
