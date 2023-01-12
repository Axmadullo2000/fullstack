import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:3000/api'

const AuthService = {
	async registerUser(user) {
		const response = await axios.post('/users', {
			user,
		})
		return response
	},
}

export default AuthService
