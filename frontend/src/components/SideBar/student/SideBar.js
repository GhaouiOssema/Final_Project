import React from "react";
import { NavLink } from "react-router-dom";

import "./SideBar.css";

const SideBar = () => {
    return (
        <div className="sidebar">
            <div className="sidebar-content">
                <div className="sidebar-user-panel">
                    <div className="user-panel">
                        {/* <img
                            src="https://radixtouch.com/templates/admin/smart/source/assets/img/dp.jpg"
                            className="user-img-circle"
                            alt="User Image"
                            width="75px"
                            height="75px"
                        /> */}
                        <div className="user-panel-info">
                            <p> Hatem Kthiri</p>
                            <div>
                                <i className="fa fa-circle user-online"></i>
                                <span className="txtOnline">Online</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="sidebar-nav-item">
                    <NavLink className="nav-link" to="/student/dashboard">
                        <div className="test">
                            <i class="fas fa-table"></i>
                            <span className="title">Dashboard</span>
                        </div>
                    </NavLink>
                </div>
                <div className="sidebar-nav-item">
                    <NavLink className="nav-link" to="/student/exam">
                        <i class="fas fa-calendar-week"></i>
                        <span className="title">Exams</span>
                    </NavLink>
                </div>
                <div className="sidebar-nav-item">
                    <NavLink className="nav-link" to="/student/profile">
                        <i class="fas fa-user-circle"></i>{" "}
                        <span className="title">Profile</span>
                    </NavLink>
                </div>
                <div className="sidebar-nav-item">
                    <NavLink className="nav-link" to="/student/absence">
                        <i class="fas fa-user-check"></i>
                        <span className="title">Absence</span>
                    </NavLink>
                </div>
                <div className="sidebar-nav-item">
                    <NavLink className="nav-link" to="/student/note">
                        <i class="far fa-clipboard"></i>
                        <span className="title">Note</span>
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

export default SideBar;
