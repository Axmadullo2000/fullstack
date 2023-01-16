import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { Loader } from '../../components/Loader'
import { Main } from '../../components/Main'
import Navbar from '../../components/Navbar'
import {
	ArticleDataError,
	ArticleDataStart,
	ArticleDataSuccess,
} from '../../redux/Slice/ArticlesSlice'
import { articleData } from '../../service/article'

const HomePage = () => {
	const { loading } = useSelector(state => state.article)
	const dispatch = useDispatch()

	const deleteArticle = async slug => {
		try {
			const response = await articleData.deletePost(slug)
			getArticlesData()
			return response
		} catch (error) {
			console.log(error)
		}
	}
	const getArticlesData = async () => {
		dispatch(ArticleDataStart())
		try {
			const response = await articleData.getArticles()
			dispatch(ArticleDataSuccess(response.articles))
		} catch (error) {
			dispatch(ArticleDataError(error.message))
		}
	}

	const updateArticleData = async slug => {
		try {
			const response = await articleData.updateArticle(slug)
			return response.article
		} catch (error) {
			console.log(error)
		}
	}

	useEffect(() => {
		getArticlesData()
	}, [])

	return (
		<div>
			<Navbar />
			<div className='container'>
				<div
					className='row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3'
					style={{ margin: '50px 0' }}
				>
					{loading ? (
						<Loader />
					) : (
						<Main
							deleteArticle={deleteArticle}
							updateArticleData={updateArticleData}
						/>
					)}
				</div>
			</div>
		</div>
	)
}

export { HomePage }
