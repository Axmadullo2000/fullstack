import { Routes, Route, Navigate } from 'react-router-dom'

import HomePage from './pages/HomePage'

import './App.css'
import { Register } from './pages/Register'
import { Login } from './pages/Login'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import AuthService from './service'
import { AuthUserFailed, AuthUserSuccess } from './redux/reducer'
import { getItem } from './helpers/person_storage'

function App() {
	const dispatch = useDispatch()
	const { isLoggedIn } = useSelector(state => state.auth)

	const getUserInfo = async () => {
		try {
			const response = await AuthService.getUser()
			dispatch(AuthUserSuccess(response))
		} catch (error) {
			dispatch(AuthUserFailed(error.message))
		}
	}

	const token = getItem('token')
	useEffect(() => {
		if (token) {
			getUserInfo()
		}
	}, [token])

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
