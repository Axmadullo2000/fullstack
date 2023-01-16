import { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import { AuthUserSuccess } from './redux/Slice/AuthSlice'

import { getItem } from './helpers/person_storage'
import AuthService from './service'

import { NotFound } from './components/NotFound'

import { Login } from './pages/Login'
import HomePage from './pages/HomePage'
import { Register } from './pages/Register'
import { ArticleDetail } from './pages/ArticleDetail'
import { CreateArticle } from './pages/CreateArticle'

import './App.css'

function App() {
	const dispatch = useDispatch()

	const userData = async () => {
		try {
			const response = await AuthService.getUser()
			dispatch(AuthUserSuccess(response.user))
		} catch (error) {
			console.log(error)
		}
	}

	const token = getItem('token')
	useEffect(() => {
		userData()
	}, [token])

	return (
		<div className='App'>
			<Routes>
				<Route path='/' element={<HomePage />} />
				<Route path='/register' element={<Register />} />
				<Route path='/login' element={<Login />} />
				<Route path='/article/:slug' element={<ArticleDetail />} />
				<Route path='/article/create' element={<CreateArticle />} />
				<Route path='*' element={<NotFound />} />
			</Routes>
		</div>
	)
}

export default App
