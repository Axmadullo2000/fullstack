import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import Navbar from '../../components/Navbar'
import {
	ArticleCreateError,
	ArticleCreateStart,
	ArticleCreateSuccess,
} from '../../redux/Slice/ArticlesSlice'
import { articleData } from '../../service/article'

export const CreateArticle = () => {
	const [title, setTitle] = useState('')
	const [description, setDescription] = useState('')
	const [body, setBody] = useState(null)
	const dispatch = useDispatch()
	const navigate = useNavigate()
	const { loading } = useSelector(state => state.article)

	const data = { title, description, body }

	const createArticle = async () => {
		console.log(data)
		dispatch(ArticleCreateStart())

		try {
			await articleData.postArticle(data)
			dispatch(ArticleCreateSuccess())
		} catch (error) {
			dispatch(ArticleCreateError())
		}
	}

	const handlerSubmit = e => {
		e.preventDefault()
		createArticle()
		navigate('/')
	}

	return (
		<>
			<Navbar />
			<div className='container'>
				<h2 className='text-center my-4'>Create Article Post</h2>
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
							onChange={e => setBody(e.target.value)}
							name='body'
							id='body'
							className='form-control mb-2'
							placeholder='Body of content'
							required
							id='bodyId'
							style={{ height: '300px' }}
						>
							{body}
						</textarea>
						<label htmlFor='bodyId'>Textarea</label>
					</div>
					<button
						disabled={loading}
						className='btn btn-outline-danger form-control p-3'
					>
						{loading ? 'Loading...' : 'Ready to send'}
					</button>
				</form>
			</div>
		</>
	)
}
