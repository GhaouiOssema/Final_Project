import React from "react";
import { NavLink } from "react-router-dom";

import "./SideBar.css";

const SideBar = () => {
    return (
        <div class="sidebar">
            <div className="sidebar-user-panel">
                <div className="user-panel">
                    <img
                        src="https://res.cloudinary.com/devatchannel/image/upload/v1602752402/avatar/avatar_cugq40.png"
                        className="user-img-circle"
                        alt="User_Image"
                        width="75px"
                        height="75px"
                    />
                    <div className="user-panel-info">
                        <p> Hatem Kthiri</p>
                        <div>
                            <i className="fa fa-circle user-online"></i>
                            <span className="txtOnline">Online</span>
                        </div>
                    </div>
                </div>
            </div>
            <ul>
                <li>
                    <NavLink className="nav-link active" to="/admin/dashboard">
                        <span class="icon">
                            <i class="fas fa-desktop"></i>
                        </span>
                        <span class="item">Dashboard</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink className="nav-link" to="/student/exam">
                        <span class="icon">
                            <i class="fas fa-calendar-week"></i>
                        </span>
                        <span class="item">Date Of Exams</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink className="nav-link" to="/student/absence">
                        <span class="icon">
                            <i class="fas fa-user-check"></i>
                        </span>
                        <span class="item">Absence</span>
                    </NavLink>
                </li>

                <li>
                    <NavLink className="nav-link" to="/student/note">
                        <span class="icon">
                            <i class="far fa-clipboard"></i>
                        </span>
                        <span class="item">Exam Scores</span>
                    </NavLink>
                </li>
            </ul>
        </div>
    );
};

export default SideBar;
