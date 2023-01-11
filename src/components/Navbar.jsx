import React from 'react'
import { Link } from 'react-router-dom'

import logo from "../assets/logo.svg"


const Navbar = () => {
	return (
		<div className='d-flex flex-column flex-md-row align-items-center p-3 mb-4 border-bottom container'>
			<Link
				to='/'
				className='d-flex align-items-center text-dark text-decoration-none'
			>
				<img src={logo} alt="" />
				<span className='fs-4'>FullStack App</span>
			</Link>

			<nav className='d-inline-flex mt-2 mt-md-0 ms-md-auto'>
				<Link
					className='me-3 py-2 text-dark text-decoration-none'
					to='/register'
				>
					Register
				</Link>
				<Link className='me-3 py-2 text-dark text-decoration-none' to='/login'>
					Login
				</Link>
			</nav>
		</div>
	)
}

export default Navbar
