import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	loading: false,
	articles: [],
	error: null,
	detailArticles: [],
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
		DetailArticleStart: state => {
			state.loading = true
		},
		DetailArticleSuccess: (state, action) => {
			state.loading = false
			state.detailArticles = action.payload
			state.error = null
		},

		ArticleCreateStart: state => {
			state.loading = true
		},
		ArticleCreateSuccess: state => {
			state.loading = false
		},
		ArticleCreateError: state => {
			state.loading = false
			state.error = 'Error'
		},
	},
})

export const {
	ArticleDataStart,
	ArticleDataSuccess,
	ArticleDataError,
	DetailArticleStart,
	DetailArticleSuccess,
	ArticleCreateStart,
	ArticleCreateSuccess,
	ArticleCreateError,
} = ArticlesSlice.actions
export default ArticlesSlice.reducer
