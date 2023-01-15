import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'

import logo from '../assets/logo.svg'
import { removeItem } from '../helpers/person_storage'
import { AuthLogoutUser } from '../redux/Slice/AuthSlice'

const Navbar = () => {
	const { user, isLoggedIn } = useSelector(state => state.auth)
	const dispatch = useDispatch(state => state.auth)
	const navigate = useNavigate()
	const logout = () => {
		removeItem('token')
		dispatch(AuthLogoutUser())
		navigate('/login')
	}

	return (
		<div className='d-flex flex-column flex-md-row align-items-center p-3 mb-4 border-bottom container'>
			<Link
				to='/'
				className='d-flex align-items-center text-dark text-decoration-none'
			>
				<img src={logo} alt='' />
				<span className='fs-4'>FullStack App</span>
			</Link>

			<nav className='d-inline-flex mt-2 mt-md-0 ms-md-auto'>
				{isLoggedIn ? (
					<>
						<span className='d-block mt-2' style={{ marginRight: '12px' }}>
							{user && user.username}
						</span>
						<button onClick={logout} className='btn btn-outline-danger'>
							Logout
						</button>
					</>
				) : (
					<>
						<Link
							className='me-3 py-2 text-dark text-decoration-none'
							to='/register'
						>
							Register
						</Link>
						<Link
							className='me-3 py-2 text-dark text-decoration-none'
							to='/login'
						>
							Login
						</Link>
					</>
				)}
			</nav>
		</div>
	)
}

export default Navbar
