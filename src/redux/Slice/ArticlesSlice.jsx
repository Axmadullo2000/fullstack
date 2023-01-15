import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	loading: false,
	articles: [],
	error: null,
}

export const ArticlesSlice = createSlice({
	name: 'Articles Slice',
	initialState,
	reducers: {
		ArticleDataStart: state => {
			state.loading = true
		},
		ArticleDataSuccess: (state, action) => {
			state.loading = false
			state.articles = action.payload
			state.error = null
		},
		ArticleDataError: (state, action) => {
			state.loading = false
			state.error = action.payload
		},
	},
})

export const { ArticleDataStart, ArticleDataSuccess, ArticleDataError } =
	ArticlesSlice.actions
export default ArticlesSlice.reducer
