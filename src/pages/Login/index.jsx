import React from 'react'

import Navbar from '../../components/Navbar'

import logo from '../../assets/logo.svg'

import './Login.css'

export const Login = () => {
	return (
		<div>
			<Navbar />
			<div className='text-center'>
				<form className='form-signin'>
					<img src={logo} alt="" />
					<h1 className='h3 mb-3 font-weight-normal'>Please sign in</h1>
					<label htmlFor='inputEmail' className='sr-only'>
						Email address
					</label>
					<input
						type='email'
						id='inputEmail'
						className='form-control'
						placeholder='Email address'
						required
					/>
					<label htmlFor='inputPassword' className='sr-only'>
						Password
					</label>
					<input
						type='password'
						id='inputPassword'
						className='form-control'
						placeholder='Password'
						required
					/>
					<div className='checkbox mb-3 remember_me'>
						<label>
							<input type='checkbox' value='remember-me' />
							<span>Remember me</span>
						</label>
					</div>
					<button className='btn btn-lg btn-primary btn-block login_btn' type='submit'>
						Sign in
					</button>
				</form>
			</div>
		</div>
	)
}
