import axios from './api'

export const articleData = {
	async getArticles() {
		const { data } = await axios.get('/articles')

		return data
	},

	async getDetailData(slug) {
		const { data } = await axios.get(`/articles/${slug}`)
		return data
	},

	async postArticle(article) {
		const { data } = await axios.post('/articles/', { article })
		return data
	},

	async updateArticle(slug, article) {
		const { data } = await axios.put(`/articles/${slug}`, { article })
		return data
	},

	async deletePost(slug) {
		const { data } = await axios.delete(`/articles/${slug}`)
		return data
	},
}
