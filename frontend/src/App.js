import {
	BrowserRouter as Router,
	Route,
	Switch,
	Redirect,
} from 'react-router-dom';
import jwt from 'jwt-decode';
import { useState, useEffect } from 'react';
import axios from 'axios';

// component
import { Home, Login, Register, Teacher, Admin, Student } from './interfaces';

import Loader from 'react-loader-spinner';
import './App.css';

function App() {
	const token = localStorage.getItem('JWT');
	const getrole = () => {
		if (token !== null) {
			const decoded_token = jwt(token);
			console.log(decoded_token);
			return decoded_token.role;
		}
	};
	// get id of student or teacher from the local storage

	const isLoggedIn = () => {
		if (localStorage.getItem('JWT')) {
			return true;
		}
		return false;
	};
	const role = getrole();
	const [toggle, setToggle] = useState(true);
	const sideBarOpen = () => {
		setToggle(!toggle);
	};
	const getID = () => {
		if (token !== null) {
			const decoded_token = jwt(token);
			return decoded_token.id;
		}
	};
	const id = getID();
	// hook forteacher profile
	const [teacherProfile, setTeacherProfile] = useState();
	const [studentProfile, setStudentProfile] = useState();
	// axios function to get the teacher profile
	const getTeacherProfile = async () => {
		try {
			const Teacher = await axios.get(
				`http://localhost:5000/teacher/profile/${id}`
			);
			setTeacherProfile(Teacher.data.data);
		} catch (err) {
			console.log(err);
		}
	};
	const getStudentProfile = async () => {
		try {
			const StudentProfile = await axios.get(
				`http://localhost:5000/student/profile/${id}`
			);
			setStudentProfile(StudentProfile.data.data);
		} catch (err) {
			console.log(err);
		}
	};
	useEffect(() => {
		if (id !== undefined) {
			getTeacherProfile();
			getStudentProfile();
		}
	}, []);

	return (
		<Router>
			<div className='App'>
				<Route path='/'>
					{isLoggedIn() && role === 0 ? (
						<>
							<Redirect to='/dashboard' />
							<Route to='/dashboard'>
								<Admin
									toggle={toggle}
									sideBarOpen={sideBarOpen}
								/>
							</Route>
						</>
					) : isLoggedIn() && role === 1 ? (
						<>
							<Redirect to='/dashboard' />
							{teacherProfile !== undefined ? (
								<Route to='/dashboard'>
									<Teacher
										toggle={toggle}
										sideBarOpen={sideBarOpen}
										teacher={teacherProfile}
									/>
								</Route>
							) : (
								<div className='App-loading'>
									<Loader
										type='Oval'
										color='#3c1053'
										height={150}
										width={150}
									/>
								</div>
							)}
						</>
					) : isLoggedIn() && role === 2 ? (
						<>
							<Redirect to='/dashboard' />
							{studentProfile !== undefined ? (
								<Route to='/dashboard'>
									<Student
										toggle={toggle}
										sideBarOpen={sideBarOpen}
										student={studentProfile}
									/>
								</Route>
							) : (
								<div className='App-loading'>
									<Loader
										type='Oval'
										color='#3c1053'
										height={150}
										width={150}
									/>
								</div>
							)}
						</>
					) : (
						<>
							{<Route path='/dashboard'></Route> ? (
								<Route>
									{/* <Redirect to="/" /> */}
									<>
										<Switch>
											<Route path='/register'>
												<Register />
											</Route>
											<Route path='/login'>
												<Login />
											</Route>
											<Route exact path='/'>
												<Home />
											</Route>
										</Switch>
									</>
								</Route>
							) : null}
						</>
					)}
				</Route>
			</div>
		</Router>
	);
}

export default App;
