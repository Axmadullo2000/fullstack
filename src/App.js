import { Routes, Route } from 'react-router-dom'

import HomePage from './pages/HomePage'

import { Register } from './pages/Register'
import { Login } from './pages/Login'

import './App.css'

function App() {
	return (
		<div className='App'>
			<Routes>
				<Route path='/' element={<HomePage />} />
				<Route path='/register' element={<Register />} />
				<Route path='/login' element={<Login />} />
			</Routes>
		</div>
	)
}

export default App
