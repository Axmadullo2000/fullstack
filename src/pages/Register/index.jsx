import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import Navbar from '../../components/Navbar'

import logo from '../../assets/logo.svg'
import { registerUserStart } from '../../redux/reducer'

export const Register = () => {
	const [userName, setUserName] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const navigate = useNavigate()
	const dispatch = useDispatch()
	const { isLoading } = useSelector(auth => auth.auth)

	const handleSubmit = e => {
		e.preventDefault()
		dispatch(registerUserStart())
	}

	return (
		<div>
			<Navbar />
			<div className='text-center'>
				<form
					className='form-signin'
					onSubmit={e => {
						e.preventDefault()
						navigate('/login')
					}}
				>
					<img src={logo} alt='' />
					<h1 className='h3 mb-3 font-weight-normal'>Please Register</h1>
					<label htmlFor='inputUsername' className='sr-only'>
						Username
					</label>
					<input
						value={userName}
						type='text'
						id='inputUsername'
						className='form-control'
						placeholder='Username'
						required
						onChange={e => setUserName(e.target.value)}
					/>
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
						onClick={handleSubmit}
						className='btn btn-lg btn-primary btn-block login_btn'
						type='submit'
						disabled={isLoading}
					>
						{isLoading ? 'Loading...' : 'Register'}
					</button>
				</form>
			</div>
		</div>
	)
}
