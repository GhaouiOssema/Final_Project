import './admin.css';
import { React } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// components
import { AdminSidebar } from '../../components/SideBar';
import Navigation from '../../components/Navigation/Navigation';
import Footer from '../../components/Footer/Footer';

import {
	Dashboard,
	Exam,
	StudentProfile,
	Teacher,
	Student,
	Absence,
	Classes,
} from '../../components/MainContents/Admin';

const Admin = ({ toggle, sideBarOpen }) => {
	return (
		<div>
			<Navigation sideBarOpen={sideBarOpen} />
			<Router>
				<AdminSidebar toggle={toggle} />
				<div className={toggle ? 'admin' : 'admin-sidebar-closed'}>
					<Switch>
						<div style={{ marginLeft: '13%' }}>
							<Route path='/dashboard' component={Dashboard} />
							<Route path='/admin/exam'>
								<Exam toggle={toggle} />
							</Route>

							<Route path='/admin/teachers'>
								<Teacher toggle={toggle} />
							</Route>
							<Route path='/admin/students'>
								<Student />
							</Route>
							<Route path='/admin/absences'>
								<Absence />
							</Route>
							<Route path='/admin/student/profile/:id'>
								<StudentProfile />
							</Route>
							<Route path='/admin/classes'>
								<Classes toggle={toggle} />
							</Route>
						</div>
					</Switch>
				</div>
				<Footer toggle={toggle} />
			</Router>
		</div>
	);
};

export default Admin;
