import React from 'react'
import { useSelector } from 'react-redux'

export const Main = () => {
	const { articles, loading } = useSelector(state => state.article)
	console.log(loading)

	return (
		<div className='container'>
			<div
				className='row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3'
				style={{ margin: '50px 0' }}
			>
				{articles.map(article => (
					<div className='col' key={article.id}>
						<div className='card shadow-sm'>
							<svg
								className='bd-placeholder-img card-img-top'
								width='100%'
								height='225'
								xmlns='http://www.w3.org/2000/svg'
								role='img'
								aria-label='Placeholder: Thumbnail'
								preserveAspectRatio='xMidYMid slice'
								focusable='false'
							>
								<title>Placeholder</title>
								<rect width='100%' height='100%' fill='#55595c'></rect>
							</svg>
							<div className='card-body h-' style={{ height: '145px' }}>
								<p className='card-text text-primary'>{article.title}</p>
								<p className='card-text text-success'>{article.description}</p>
							</div>
							<div className='card-footer d-flex justify-content-between align-items-center'>
								<div className='btn-group'>
									<button
										role={'button'}
										type='button'
										className='btn btn-sm btn-outline-secondary m-2 p-2'
									>
										View
									</button>
									<button
										role={'button'}
										type='button'
										className='btn btn-sm btn-outline-success m-2 p-2'
									>
										Edit
									</button>
									<button
										role={'button'}
										type='button'
										className='btn btn-sm btn-outline-danger m-2 p-2'
									>
										Delete
									</button>
								</div>
								<small className='text-muted text-capitalize'>
									{article.author.username}
								</small>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	)
}
