import './layout.css';
import { Outlet } from 'react-router-dom';

const Layout = () => {
    return (
        <>
            {/* Lägg header här */}
            <main className="main">
                <Outlet />
            </main>
        </>
    );
};

export default Layout;
