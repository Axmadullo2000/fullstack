import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { Loader } from '../../components/Loader'
import { Main } from '../../components/Main'
import Navbar from '../../components/Navbar'
import { ArticleDataStart, ArticleDataSuccess } from '../../redux/Slice/ArticlesSlice'
import { articleData } from '../../service/article'

const HomePage = () => {
	const { loading } = useSelector(state => state.article)
	const dispatch = useDispatch()

	const fetchArticles = async () => {
		dispatch(ArticleDataStart())
		try {
			const response = await articleData.getArticles()
			dispatch(ArticleDataSuccess(response.articles))
		} catch (error) {
			dispatch(error.message)
		}
	}

	useEffect(() => {
		fetchArticles()
	}, [])

	return (
		<div>
			<Navbar />
			{loading ? <Loader /> : <Main />}
		</div>
	)
}

export default HomePage
