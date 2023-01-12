import axios from './api'

const AuthService = {
	async registerUser(user) {
		const response = await axios.post('/users', { user })

		return response
	},
}

export default AuthService
