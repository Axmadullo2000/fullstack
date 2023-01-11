import { configureStore } from '@reduxjs/toolkit'

import RegisterReducer from '../reducer'

export default configureStore({
	reducer: {
		auth: RegisterReducer,
	},
})
