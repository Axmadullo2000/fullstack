import { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import { AuthUserSuccess } from './redux/Slice/AuthSlice'
import { getItem } from './helpers/person_storage'
import AuthService from './service'
import { NotFound } from './components/NotFound'
import { HomePage } from './pages/HomePage'
import { Register } from './pages/Register'
import { Login } from './pages/Login'
import { ArticleDetail } from './pages/ArticleDetail'
import { UpdateArticle } from './pages/UpdateArticle'

import './App.css'
import { CreateArticle } from './pages/CreateArticle'

function App() {
	const dispatch = useDispatch()

	const userData = async () => {
		try {
			const response = await AuthService.getUser()

			dispatch(AuthUserSuccess(response.user))
		} catch (error) {}
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
				<Route path='/article/create/' element={<CreateArticle />} />
				<Route path='/article/update/:slug' element={<UpdateArticle />} />
				<Route path='*' element={<NotFound />} />
			</Routes>
		</div>
	)
}

export default App
