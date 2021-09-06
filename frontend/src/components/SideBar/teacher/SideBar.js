import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import jwt from "jwt-decode";
import axios from "axios";

import "./SideBar.css";

const SideBar = ({ toggle, teacher_fullName, teacher_avatar }) => {
    return (
        <div class={toggle ? "sidebar-menu" : "sidebar-menu close"}>
            <div className="sidebar-user-panel">
                <div className="user-panel">
                    <img
                        src={teacher_avatar}
                        className="user-img-circle"
                        alt="User_Image"
                        width="75px"
                        height="75px"
                    />
                    <div className="user-panel-info">
                        <p>{teacher_fullName}</p>
                        <div>
                            <i className="fa fa-circle user-online"></i>
                            <span className="txtOnline">Online</span>
                        </div>
                    </div>
                </div>
            </div>
            <ul>
                <li>
                    <NavLink className="nav-link " to="/dashboard">
                        <span class="icon">
                            <i class="fas fa-desktop"></i>
                        </span>
                        <span class="item">Dashboard</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink className="nav-link" to="/teacher/ExamsDate">
                        <span class="icon">
                            <i class="fas fa-calendar-week"></i>
                        </span>
                        <span class="item">Date Of Exams</span>
                    </NavLink>
                </li>

                <li>
                    <NavLink className="nav-link" to="/teacher/students">
                        <span class="icon">
                            <i class="fas fa-user-friends"></i>
                        </span>
                        <span class="item">Students</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink className="nav-link" to="/teacher/absencesHistory">
                        <span class="icon">
                            <i class="fas fa-history"></i>{" "}
                        </span>
                        <span class="item">Absences History</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink className="nav-link" to="/teacher/score">
                        <span class="icon">
                            <i class="far fa-sticky-note"></i>
                        </span>
                        <span class="item">Score</span>
                    </NavLink>
                </li>
            </ul>
        </div>
    );
};

export default SideBar;
