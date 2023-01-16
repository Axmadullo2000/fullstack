import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import moment from 'moment'

import {
	DetailArticleStart,
	DetailArticleSuccess,
} from '../../redux/Slice/ArticlesSlice'

import { articleData } from '../../service/article'
import Navbar from '../../components/Navbar'
import { Loader } from '../../components/Loader'

export const ArticleDetail = () => {
	const dispatch = useDispatch()
	const { slug } = useParams()
	const { detailArticles, loading } = useSelector(state => state.article)

	const getDetailInfo = async () => {
		dispatch(DetailArticleStart())
		try {
			const response = await articleData.getDetailData(slug)
			dispatch(DetailArticleSuccess(response.article))
		} catch (error) {
			console.log(error)
		}
	}

	useEffect(() => {
		getDetailInfo()
	}, [slug])
	return (
		<div>
			{loading ? (
				<Loader />
			) : (
				<>
					<Navbar />
					<div className='p-0 mb-2 bg-light rounded-3 container'>
						<div className='py-5 px-5'>
							{detailArticles.author !== undefined && (
								<img src={detailArticles.author.image} alt='' />
							)}
							<h1 className='display-5 fw-bold'>{detailArticles.title}</h1>
							<p className='col-md-8'>{detailArticles.description}</p>
							<q>{detailArticles.body}</q>
							<div className='bg-success p-3 mt-1 border'>
								<p className='text-black'>
									{detailArticles.hasOwnProperty('author')
										? detailArticles.author.username
										: null}
								</p>
								<p>
									{detailArticles.hasOwnProperty('author')
										? detailArticles.author.bio
										: null}
								</p>
							</div>
							Date publishing:{' '}
							<p className='mt-2 px-2 pt-2'>
								{moment(detailArticles.createdAt).format('DD MM YYYY')}
							</p>
							<p className='px-2'>
								<span className='text-danger text fw-bold'>Published: </span>
								<span className='text-success'>
									{moment(detailArticles.createdAt, 'YYYYMMDD').fromNow()}
								</span>
							</p>
						</div>
					</div>
				</>
			)}
		</div>
	)
}
