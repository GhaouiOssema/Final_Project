import React from 'react';
import { NavLink } from 'react-router-dom';
import './SideBar.css';

const TeacherSidebar = ({ toggle, teacher }) => {
	return (
		<div class={toggle ? 'sidebar-menu' : 'sidebar-menu close'}>
			<div className='sidebar-user-panel'>
				<div className='user-panel'>
					<img
						src={teacher.avatar}
						className='user-img-circle'
						alt='User_Image'
						width='75px'
						height='75px'
					/>
					<div className='user-panel-info'>
						<p>{`${teacher.firstName} ${teacher.lastName}`}</p>
						<div className='online-user'>
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
					<NavLink className='nav-link' to='/teacher/ExamsDate'>
						<span class='icon'>
							<i class='fas fa-calendar-week'></i>
						</span>
						<span class='item'>Date Of Exams</span>
					</NavLink>
				</li>

				<li>
					<NavLink className='nav-link' to='/teacher/students'>
						<span class='icon'>
							<i class='fas fa-user-friends'></i>
						</span>
						<span class='item'>Students</span>
					</NavLink>
				</li>
				<li>
					<NavLink className='nav-link' to='/teacher/absencesHistory'>
						<span class='icon'>
							<i class='fas fa-history'></i>{' '}
						</span>
						<span class='item'>Absences History</span>
					</NavLink>
				</li>
				<li>
					<NavLink className='nav-link' to='/teacher/score'>
						<span class='icon'>
							<i class='far fa-sticky-note'></i>
						</span>
						<span class='item'>Score</span>
					</NavLink>
				</li>
			</ul>
		</div>
	);
};

export default TeacherSidebar;
