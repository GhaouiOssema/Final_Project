import './SideBar.css';
import { NavLink } from 'react-router-dom';

const AdminSidebar = ({ toggle }) => {
	return (
		<div class={toggle ? 'sidebar-admin' : 'sidebar-admin close'}>
			<div className='sidebar-user-panel'>
				<div className='user-panel'>
					<img
						src={process.env.PUBLIC_URL + '/assets/admin.png'}
						className='user-img-circle'
						alt='User_Image'
						width='75px'
						height='75px'
					/>
					<div className='user-panel-info'>
						<p>Administrateur</p>
						<div>
							<i className='fa fa-circle user-online'></i>
							<span className='txtOnline'>Online</span>
						</div>
					</div>
				</div>
			</div>
			<ul>
				<li>
					<NavLink className='nav-link ' to='/dashboard'>
						<span class='icon'>
							<i class='fas fa-desktop'></i>
						</span>
						<span class='item'>Dashboard</span>
					</NavLink>
				</li>
				<li>
					<NavLink className='nav-link' to='/admin/exam'>
						<span class='icon'>
							<i class='fas fa-calendar-week'></i>
						</span>
						<span class='item'>Date Of Exams</span>
					</NavLink>
				</li>
				<li>
					<NavLink className='nav-link' to='/admin/teachers'>
						<span class='icon'>
							<i class='fas fa-chalkboard-teacher'></i>
						</span>
						<span class='item'>Teachers</span>
					</NavLink>
				</li>
				<li>
					<NavLink className='nav-link' to='/admin/students'>
						<span class='icon'>
							<i class='fas fa-user-friends'></i>
						</span>
						<span class='item'>Students</span>
					</NavLink>
				</li>
				<li>
					<NavLink className='nav-link' to='/admin/absences'>
						<span class='icon'>
							<i class='fas fa-user-check'></i>
						</span>
						<span class='item'>Absence</span>
					</NavLink>
				</li>
				<li>
					<NavLink className='nav-link' to='/admin/classes'>
						<span class='icon'>
							<i class='fas fa-chart-line'></i>
						</span>
						<span class='item'>Classes</span>
					</NavLink>
				</li>
			</ul>
		</div>
	);
};

export default AdminSidebar;
