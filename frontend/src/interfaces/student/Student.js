import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React from 'react';
import './Student.css';

// components
import { StudentSidebar } from '../../components/SideBar';
import Navigation from '../../components/Navigation/Navigation';
import Footer from '../../components/Footer/Footer';
import {
	Dashboard,
	Exam,
	Absence,
	Note,
	Profile,
	Setting,
} from '../../components/MainContents/Student';

const Student = ({ toggle, sideBarOpen, student }) => {
	return (
		<div>
			<Router>
				<Navigation sideBarOpen={sideBarOpen} student={student} />
				<StudentSidebar toggle={toggle} student={student} />
				<div className={toggle ? 'Student' : 'student-sidebar-closed'}>
					<Switch>
						<div style={{ marginLeft: '13%' }}>
							<Route path='/dashboard'>
								<Dashboard toggle={toggle} />
							</Route>
							<Route path='/student/exam'>
								<Exam toggle={toggle} />
							</Route>
							<Route path='/student/absence'>
								<Absence toggle={toggle} />
							</Route>
							<Route path='/student/note'>
								<Note toggle={toggle} />
							</Route>
							<Route path='/student/profile'>
								<Profile toggle={toggle} />
							</Route>
							<Route path='/student/setting'>
								<Setting toggle={toggle} />
							</Route>
						</div>
					</Switch>
				</div>

				<Footer toggle={toggle} />
			</Router>
		</div>
	);
};

export default Student;
