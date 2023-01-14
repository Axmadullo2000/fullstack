import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import {
	AuthUserStart,
	AuthUserSuccess,
	AuthUserFailed,
} from '../../redux/reducer'
import Navbar from '../../components/Navbar'

import logo from '../../assets/logo.svg'

import AuthService from '../../service'

import './Login.css'
import { ErrorMessage } from '../../components/Error'

export const Login = () => {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const { isLoading, error } = useSelector(auth => auth.auth)
	const dispatch = useDispatch()

	const loginHandler = async e => {
		e.preventDefault()
		dispatch(AuthUserStart())

		const user = { email, password }

		try {
			const response = await AuthService.loginUser(user)
			dispatch(AuthUserSuccess(response.user))
		} catch (error) {
			dispatch(AuthUserFailed(error.response.data.errors))
		}
	}

	return (
		<div>
			<Navbar />
			<div className='text-center'>
				<form className='form-signin' onSubmit={loginHandler}>
					<img src={logo} alt='' />
					<h1 className='h3 mb-3 font-weight-normal'>Please sign in</h1>
					{error !== null && (
						<ErrorMessage />
					)}
					<label htmlFor='inputEmail' className='sr-only'>
						Email address
					</label>
					<input
						value={email}
						type='email'
						id='inputEmail'
						className='form-control'
						placeholder='Email address'
						required
						onChange={e => setEmail(e.target.value)}
					/>
					<label htmlFor='inputPassword' className='sr-only'>
						Password
					</label>
					<input
						value={password}
						type='password'
						id='inputPassword'
						className='form-control'
						placeholder='Password'
						required
						onChange={e => setPassword(e.target.value)}
					/>
					<div className='checkbox mb-3 remember_me'>
						<label>
							<input type='checkbox' value='remember-me' />
							<span>Remember me</span>
						</label>
					</div>
					<button
						disabled={isLoading}
						className='btn btn-lg btn-primary btn-block login_btn'
						type='submit'
					>
						{isLoading ? 'loading...' : 'Login'}
					</button>
				</form>
			</div>
		</div>
	)
}
