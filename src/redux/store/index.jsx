import { configureStore } from '@reduxjs/toolkit'

import RegisterReducer from '../Slice/AuthSlice'
import ArticleReducer from '../Slice/ArticlesSlice'
export default configureStore({
	reducer: {
		auth: RegisterReducer,
		article: ArticleReducer,
	},
})
