import React from 'react'
import { useSelector } from 'react-redux'
import { Loader } from '../../components/Loader'
import { Main } from '../../components/Main'

import Navbar from '../../components/Navbar'

const HomePage = () => {
	const { loading } = useSelector(state => state.article)

	return (
		<div>
			<Navbar />
			{loading ? <Loader /> : <Main />}
		</div>
	)
}

export default HomePage
