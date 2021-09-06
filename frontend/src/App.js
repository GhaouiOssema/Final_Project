// component
import Student from "./interfaces/student/Student";
import Admin from "./interfaces/admin/Admin";
import Teacher from "./interfaces/teacher/Teacher";
import Register from "./interfaces/register/Register";
import Login from "./interfaces/login/Login";
import Home from "./interfaces/home/Home";

import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect,
} from "react-router-dom";
import jwt from "jwt-decode";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
    const token = localStorage.getItem("JWT");
    const getrole = () => {
        if (token !== null) {
            const decoded_token = jwt(token);
            console.log(decoded_token);
            return decoded_token.role;
        }
    };
    const isLoggedIn = () => {
        if (localStorage.getItem("JWT")) {
            return true;
        }
        return false;
    };
    const role = getrole();
    const [toggle, setToggle] = useState(true);
    const sideBarOpen = () => {
        setToggle(!toggle);
    };

    // get id of student or teacher from the local storage
    const id = jwt(token).id;

    // hook for student profile
    const [studentProfile, setStudentProfile] = useState({ s_PROFILE: [] });

    // axios function to get the student profile
    const getStudentProfile = async () => {
        try {
            const Student = await axios.get(
                `http://localhost:5000/student/profile/${id}`
            );
            setStudentProfile({ s_PROFILE: Student.data.data });
        } catch (err) {
            console.log(err);
        }
    };
    useEffect(() => {
        getStudentProfile();
    }, []);
    // side bar profile information
    const student_avatar = studentProfile.s_PROFILE.avatar;
    const student_firstName = studentProfile.s_PROFILE.firstName;
    const student_lastName = studentProfile.s_PROFILE.lastName;
    const student_fullName = `${student_firstName} ${student_lastName}`;

    // hook forteacher profile
    const [teacherProfile, setTeacherProfile] = useState({ t_PROFILE: [] });

    // axios function to get the teacher profile
    const getTeacherProfile = async () => {
        try {
            const Teacher = await axios.get(
                `http://localhost:5000/teacher/profile/${id}`
            );
            setTeacherProfile({ t_PROFILE: Teacher.data.data });
        } catch (err) {
            console.log(err);
        }
    };
    useEffect(() => {
        getTeacherProfile();
    }, []);
    // side bar profile information
    const teacher_avatar = teacherProfile.t_PROFILE.avatar;
    const teacher_firstName = teacherProfile.t_PROFILE.firstName;
    const teacher_lastName = teacherProfile.t_PROFILE.lastName;
    const teacher_fullName = `${teacher_firstName} ${teacher_lastName}`;

    return (
        <Router>
            <div className="App">
                <Route path="/">
                    {isLoggedIn() && role === 0 ? (
                        <>
                            {/* <Redirect to="/dashboard" /> */}
                            <Route to="/dashboard">
                                <Admin
                                    toggle={toggle}
                                    sideBarOpen={sideBarOpen}
                                />
                            </Route>
                        </>
                    ) : isLoggedIn() && role === 1 ? (
                        <>
                            {/* <Redirect to="/dashboard" /> */}
                            <Route to="/dashboard">
                                <Teacher
                                    toggle={toggle}
                                    sideBarOpen={sideBarOpen}
                                    teacher_fullName={teacher_fullName}
                                    teacher_avatar={teacher_avatar}
                                />
                            </Route>
                        </>
                    ) : isLoggedIn() && role === 2 ? (
                        <>
                            {/* <Redirect to="/dashboard" /> */}
                            <Route to="/dashboard">
                                <Student
                                    toggle={toggle}
                                    sideBarOpen={sideBarOpen}
                                    student_fullName={student_fullName}
                                    student_avatar={student_avatar}
                                />
                            </Route>
                        </>
                    ) : (
                        <>
                            {<Route exact path="/dashboard"></Route> ? (
                                <Route>
                                    <Redirect to="/" />

                                    <>
                                        <Switch>
                                            <Route path="/home">
                                                <Home />
                                            </Route>
                                            <Route path="/register">
                                                <Register />
                                            </Route>
                                            <Route path="/">
                                                <Login />
                                            </Route>
                                        </Switch>
                                    </>
                                </Route>
                            ) : null}
                        </>
                    )}
                </Route>
                {/* {isLoggedIn() ? (
                    <>
                        {role === 0 ? (
                            <Route path="/dashboard">
                                <Admin />
                            </Route>
                        ) : role === 1 ? (
                            <h1>teacher</h1>
                        ) : (
                            <Route path="/dashboard">
                                <Student />
                            </Route>
                        )}
                    </>
                ) : (
                    <>
                        <Switch>
                            <Route path="/register">
                                <Register />
                            </Route>
                            <Route path="/">
                                <Login />
                            </Route>
                        </Switch>
                    </>
                )} */}
            </div>
        </Router>
    );
}

export default App;
