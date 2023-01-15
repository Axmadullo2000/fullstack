import axios from './api'

export const articleData = {
	async getArticles() {
		const { data } = await axios.get('/articles')
		console.log(data)

		return data
	},
}
