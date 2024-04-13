import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import LandingPage from './pages/landingPage';
import ProfilePage from './pages/profilePage';
import GalleryPage from './pages/galleryPage';
import HeaderComp from './components/header';
import RegisterPage from './pages/registerPage';
import AddBook from './pages/addBook';

function App() {
	return (
		<>
			<Routes>
				<Route element={<HeaderComp />}>
					<Route path='/' element={<LandingPage />} />
					<Route path='/profile' element={<ProfilePage />} />
					<Route path='/gallery' element={<GalleryPage />} />
					<Route path='/add' element={<AddBook />} />
				</Route>
				<Route path='/register' element={<RegisterPage />} />
				<Route path='*' element={<>page not found</>} />
			</Routes>
		</>
	);
}

export default App;
