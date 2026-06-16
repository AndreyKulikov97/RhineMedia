import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import './App.css'

import Footer from './Components/Footer/Footer'

import Navbar from './Components/Navbar/Navbar'

import Home from './Pages/HomePage/Home'
import Contacts from './Pages/ContactsPage/Contacts'
import ScrollToTop from './ScrollToTop'

function App() {
	return (
		<Router>
			<ScrollToTop />

			<Navbar />
			<Routes>
				<Route path='/' element={<Home />}/>
				<Route path='/contacts' element={<Contacts />}/>
			</Routes>
			
			<Footer />
		</Router>
	)
}

export default App
