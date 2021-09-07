import React from "react";
import { NavLink } from "react-router-dom";
import jwt from "jwt-decode";
import { useState, useEffect } from "react";
import axios from "axios";
import "./SideBar.css";

const SideBar = ({ toggle, student }) => {
    // const token = localStorage.getItem("JWT");

    // const getID = () => {
    //     if (token !== null) {
    //         const decoded_token = jwt(token);
    //         return decoded_token.id;
    //     }
    // };
    // // hook for student profile
    // const [studentProfile, setStudentProfile] = useState();
    // const id = getID();
    // // axios function to get the student profile
    // const getStudentProfile = async () => {
    //     try {
    //         const StudentProfile = await axios.get(
    //             `http://localhost:5000/student/profile/${id}`
    //         );
    //         setStudentProfile(StudentProfile.data.data);
    //     } catch (err) {
    //         console.log(err);
    //     }
    // };
    // useEffect(() => {
    //     getStudentProfile();
    // }, []);

    // console.log(studentProfile);
    return (
        <div className={toggle ? "student-sidebar" : "student-sidebar close"}>
            <div className="sidebar-user-panel">
                <div className="user-panel">
                    <img
                        src={student.avatar}
                        className="user-img-circle"
                        alt="User_Image"
                        width="75px"
                        height="75px"
                    />
                    <div className="user-panel-info">
                        <p> {`${student.firstName} ${student.lastName}`} </p>
                        <div className="online-user">
                            <i className="fa fa-circle user-online"></i>
                            <span className="txtOnline">Online</span>
                        </div>
                    </div>
                </div>
            </div>
            <ul>
                <li>
                    <NavLink className="nav-link " to="/dashboard">
                        <span className="icon">
                            <i className="fas fa-desktop"></i>
                        </span>
                        <span className="item">Dashboard</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink className="nav-link" to="/student/exam">
                        <span className="icon">
                            <i className="fas fa-calendar-week"></i>
                        </span>
                        <span className="item">Date Of Exams</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink className="nav-link" to="/student/absence">
                        <span className="icon">
                            <i className="fas fa-user-check"></i>
                        </span>
                        <span className="item">Absence</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink className="nav-link" to="/student/note">
                        <span className="icon">
                            <i className="far fa-clipboard"></i>
                        </span>
                        <span className="item">Exam Scores</span>
                    </NavLink>
                </li>
            </ul>
        </div>
    );
};

export default SideBar;
