import React, { useCallback } from 'react'
import { useSelector } from 'react-redux'

const ErrorMessage = ({ width }) => {
	const { error } = useSelector(state => state.auth)

	const handleError = useCallback(() => {
		return Object.keys(error).map(name => {
			const msg = error[name].join(', ')
			return `${name} - ${msg}`
		})
	}, [error])

	return (
		error !== null && (
			<div className='alert alert-danger m-auto mb-2 w-2' style={{ width }}>
				{handleError().map((error, index) => (
					<p key={index} className='p-1 m-1 text-center '>
						{index + 1}) {error}
					</p>
				))}
			</div>
		)
	)
}

export { ErrorMessage }
