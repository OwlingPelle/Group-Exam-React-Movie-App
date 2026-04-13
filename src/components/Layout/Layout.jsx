import Header from '../Header/Header';
import './layout.css';
import { Outlet } from 'react-router-dom';

const Layout = () => {
	return (
		<>
			<Header />
			<main className='main'>
				<Outlet />
			</main>
		</>
	);
};

export default Layout;
