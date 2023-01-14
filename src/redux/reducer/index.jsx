import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	isLoading: false,
	isLoggedIn: false,
	error: null,
	user: null,
}

const AuthSlice = createSlice({
	name: 'AuthSlice',
	initialState,
	reducers: {
		AuthUserStart: state => {
			state.isLoading = true
		},
		AuthUserSuccess: (state, action) => {
			state.isLoading = false
			state.isLoggedIn = true
			state.user = action.payload
			localStorage.setItem('token', action.payload.token)
		},
		AuthUserFailed: (state, action) => {
			state.isLoading = false
			state.error = action.payload
		},
	},
})

export const { AuthUserStart, AuthUserSuccess, AuthUserFailed } =
	AuthSlice.actions

export default AuthSlice.reducer
