import { createSlice } from '@reduxjs/toolkit'

import { setItem } from '../../helpers/person_storage'

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
			state.error = null
			setItem('token', action.payload.token)
		},
		AuthUserFailed: (state, action) => {
			state.isLoading = false
			state.error = action.payload
		},
		AuthLogoutUser: state => {
			state.user = null
			state.isLoggedIn = false
		},
	},
})

export const {
	AuthUserStart,
	AuthUserSuccess,
	AuthUserFailed,
	AuthLogoutUser,
} = AuthSlice.actions

export default AuthSlice.reducer
