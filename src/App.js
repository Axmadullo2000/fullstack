import { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import HomePage from './pages/HomePage'
import { Register } from './pages/Register'
import { Login } from './pages/Login'
import AuthService from './service'
import { AuthUserSuccess } from './redux/Slice/AuthSlice'
import { NotFound } from './components/NotFound'
import { getItem } from './helpers/person_storage'

import './App.css'
import { articleData } from './service/article'
import {
	ArticleDataStart,
	ArticleDataSuccess,
} from './redux/Slice/ArticlesSlice'
import { ArticleDetail } from './pages/ArticleDetail'

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

	const fetchArticles = async () => {
		dispatch(ArticleDataStart())
		try {
			const response = await articleData.getArticles()
			dispatch(ArticleDataSuccess(response.articles))
		} catch (error) {
			dispatch(error.message)
		}
	}

	const token = getItem('token')
	useEffect(() => {
		userData()
		fetchArticles()
	}, [token])

	return (
		<div className='App'>
			<Routes>
				<Route path='/' element={<HomePage />} />
				<Route path='/register' element={<Register />} />
				<Route path='/login' element={<Login />} />
				<Route path='/article/:slug' element={<ArticleDetail />} />
				<Route path='*' element={<NotFound />} />
			</Routes>
		</div>
	)
}

export default App
