import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React from 'react';
import './Teacher.css';

// components
import { TeacherSidebar } from '../../components/SideBar';
import Navigation from '../../components/Navigation/Navigation';
import Footer from '../../components/Footer/Footer';

import {
	Dashboard,
	ExamsDate,
	Score,
	StudentsAbsences,
	AllStudents,
	Profile,
	Setting,
} from '../../components/MainContents/Teacher';

const Teacher = ({ toggle, sideBarOpen, teacher }) => {
	return (
		<div>
			<Router>
				<Navigation sideBarOpen={sideBarOpen} teacher={teacher} />
				<div className='teacher-page-content'>
					<TeacherSidebar toggle={toggle} teacher={teacher} />
					<div
						id='teacher'
						className={
							toggle ? 'teacher' : 'teacher-sidebar-closed'
						}>
						<Switch>
							<Route path='/dashboard'>
								<Dashboard />
							</Route>
							<Route path='/teacher/ExamsDate'>
								<ExamsDate toggle={toggle} />
							</Route>
							<Route path='/teacher/students'>
								<AllStudents toggle={toggle} />
							</Route>
							<Route path='/teacher/absencesHistory'>
								<StudentsAbsences />
							</Route>
							<Route path='/teacher/score'>
								<Score toggle={toggle} />
							</Route>
							<Route path='/teacher/profile'>
								<Profile />
							</Route>{' '}
							<Route path='/teacher/setting'>
								<Setting />
							</Route>
						</Switch>
					</div>
				</div>
				<Footer toggle={toggle} />
			</Router>
		</div>
	);
};

export default Teacher;
