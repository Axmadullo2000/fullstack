import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	isLoading: false,
	user: null,
	isLoggedIn: false,
	error: null,
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
		registerUserSuccess: state => {
			state.isLoading = false
			state.isLoggedIn = true
		},
		registerUserFailed: state => {
			state.isLoading = false
			state.isLoggedIn = false
			state.error = 'error'
		},
	},
})

export const {
	loginUserStart,
	registerUserStart,
	registerUserSuccess,
	registerUserFailed,
} = AuthSlice.actions

export default AuthSlice.reducer
