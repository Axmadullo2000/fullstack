import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	isLoading: false,
	user: null,
	isLoggedIn: false,
}

const RegisterSlice = createSlice({
	name: 'RegisterSlice',
	initialState,
	reducers: {
		loginUserStart: state => {
			state.isLoading = true
		},
		loginUserSuccess: state => {},
		loginUserFailed: state => {},
	},
})

export const { loginUserStart } = RegisterSlice.actions

export default RegisterSlice.reducer
