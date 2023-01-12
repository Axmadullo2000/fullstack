import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	isLoading: false,
	user: null,
	isLoggedIn: false,
}

const AuthSlice = createSlice({
	name: 'AuthSlice',
	initialState,
	reducers: {
		// LOGIN
		loginUserStart: state => {
			state.isLoading = true
		},
		loginUserSuccess: state => {},
		loginUserFailed: state => {},
		// REGISTER
		registerUserStart: state => {
			state.isLoading = true
		},
		registerUserSuccess: state => {},
		registerUserFailed: state => {},
	},
})

export const { loginUserStart, registerUserStart } = AuthSlice.actions

export default AuthSlice.reducer
