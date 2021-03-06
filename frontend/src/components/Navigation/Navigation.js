import './Navigation.css';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { useHistory, NavLink } from 'react-router-dom';
import jwt from 'jwt-decode';
const Navigation = ({ sideBarOpen, teacher, student }) => {
	const token = localStorage.getItem('JWT');
	const decoded_token = jwt(token);
	const role = decoded_token.role;

	const history = useHistory();
	const logOut = () => {
		localStorage.clear();
		history.push('/');
		history.go(0);
	};
	var profile = {
		avatar: process.env.PUBLIC_URL + '/assets/admin.png',
		firstName: 'Administrateur',
	};
	if (role === 1) {
		profile = teacher;
	} else if (role === 2) {
		profile = student;
	}

	return (
		<div id='topheader' className='top-header'>
			<div className='top-header-logo'>
				<i className='fas fa-graduation-cap fa-rotate-45'></i>
				<span> Smart </span>
			</div>

			<div className='top-header-Content'>
				<div className='search-bars'>
					<i className='fas fa-bars' onClick={sideBarOpen}></i>
					{/* <div className="input-search">
                        <input type="text" placeholder="Search..." />
                        <i className="fas fa-search"></i>
                    </div> */}
				</div>
				<div className='right-content'>
					{/* <i className="fas fa-expand-arrows-alt"></i> */}
					<i className='far fa-bell'></i>
					<div className='right-content-profile'>
						<img
							src={
								role === 0
									? `${profile.avatar}`
									: profile.avatar
							}
							width='29px'
							height='29px'
							alt='profile'
						/>
						<Navbar align='end' expand='lg'>
							<Container fluid>
								<Navbar.Toggle aria-controls='navbar-dark-example' />
								<Navbar.Collapse id='navbar-dark-example'>
									<Nav>
										<NavDropdown
											id='nav-dropdown-dark-example'
											title={
												role === 0
													? `${profile.firstName}`
													: `${profile.firstName} ${profile.lastName}`
											}>
											<NavDropdown.Item href='# '>
												{role === 1 ? (
													<NavLink to='/teacher/profile'>
														<i className='far fa-user'></i>
														Profile
													</NavLink>
												) : role === 2 ? (
													<NavLink to='/student/profile'>
														<i className='far fa-user'></i>
														Profile
													</NavLink>
												) : null}
											</NavDropdown.Item>
											<NavDropdown.Item href='# '>
												{role === 1 ? (
													<NavLink to='/teacher/setting'>
														<i className='fas fa-cog'></i>
														Settings
													</NavLink>
												) : role === 2 ? (
													<NavLink to='/student/setting'>
														<i className='fas fa-cog'></i>
														Settings
													</NavLink>
												) : null}
											</NavDropdown.Item>
											<NavDropdown.Item href='# '>
												<i className='fas fa-map-signs'></i>
												Help
											</NavDropdown.Item>

											<NavDropdown.Item href='# '>
												<button onClick={logOut}>
													<i className='fas fa-sign-out-alt'></i>
													Logout
												</button>
											</NavDropdown.Item>
										</NavDropdown>
									</Nav>
								</Navbar.Collapse>
							</Container>
						</Navbar>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Navigation;
