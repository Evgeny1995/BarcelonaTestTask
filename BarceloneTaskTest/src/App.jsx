import './App.css'
import Home from './components/Templates/home/home.jsx'
import { Route, Routes } from 'react-router-dom'
import NotFound from './components/Templates/notFound/notFound.jsx'
function App() {
	return (
		<div className='main_wrap'>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='*' element={<NotFound />} />
			</Routes>
		</div>
	)
}

export default App
