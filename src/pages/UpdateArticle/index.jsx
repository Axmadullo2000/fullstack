import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import Navbar from '../../components/Navbar'
import {
	DetailArticleSuccess,
	UpdateArticleSuccess,
} from '../../redux/Slice/ArticlesSlice'

import { articleData } from '../../service/article'

export const UpdateArticle = () => {
	const [title, setTitle] = useState('')
	const [description, setDescription] = useState('')
	const [body, setBody] = useState(null)
	const { slug } = useParams()
	const dispatch = useDispatch()
	const navigate = useNavigate()

	const data = { title, description, body }

	const getDetailedData = async () => {
		const response = await articleData.getDetailData(slug)
		dispatch(DetailArticleSuccess(response.article))
		setTitle(response.article.title)
		setDescription(response.article.description)
		setBody(response.article.body)
		console.log(response.article.body)
	}

	const updateDetailedInfo = async () => {
		try {
			const updatedData = await articleData.updateArticle(slug, data)
			dispatch(UpdateArticleSuccess(updatedData.article))
			navigate('/')
			return updatedData
		} catch (error) {
			console.log(error.message)
		}
	}
	const handlerSubmit = async e => {
		e.preventDefault()
		updateDetailedInfo()
	}

	useEffect(() => {
		getDetailedData()
	}, [])

	return (
		<div>
			<Navbar />
			<div className='container'>
				<h2 className='text-center my-4'>Update Article Post</h2>
				<form onSubmit={handlerSubmit}>
					<div className='form-floating'>
						<input
							value={title}
							onChange={e => setTitle(e.target.value)}
							type='text'
							className='form-control'
							name='title'
							placeholder='title'
							required
							id='titleId'
						/>
						<label htmlFor='titleId'>Title</label>
					</div>
					<div className='form-floating'>
						<input
							value={description}
							onChange={e => setDescription(e.target.value)}
							type='text'
							className='form-control my-2'
							name='description'
							placeholder='description'
							required
							id='descriptionId'
						/>
						<label htmlFor='descriptionId'>Description</label>
					</div>
					<div className='form-floating'>
						<textarea
							defaultValue={body}
							onChange={e => setBody(e.target.value)}
							name='body'
							id='body'
							className='form-control mb-2'
							placeholder='Body of content'
							required
							id='bodyId'
							style={{ height: '300px' }}
						/>
						<label htmlFor='bodyId'>Textarea</label>
					</div>
					<button className='btn btn-outline-success form-control p-3'>
						Ready to send
					</button>
				</form>
			</div>
		</div>
	)
}
