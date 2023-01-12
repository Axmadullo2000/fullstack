import axios from './api'

const AuthService = {
	async registerUser(user) {
		const { data } = await axios.post('/users', { user })
		console.log(data)

		return data
	},

	async loginUser(user) {
		const response = await axios.post('/users/login', { user })
		console.log(response.data)

		return response.data
	},
}

export default AuthService
