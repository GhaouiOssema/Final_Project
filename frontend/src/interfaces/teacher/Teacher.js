import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React from "react";
import "./Teacher.css";
// components
import SideBar from "../../components/SideBar/teacher/SideBar";
import Navigation from "../../components/Navigation/Navigation";
import Dashboard from "../../components/MainContents/Teacher/Dashboard";
import ExamsDate from "../../components/MainContents/Teacher/ExamsDate";
import Score from "../../components/MainContents/Teacher/Score";
import StudentsAbsences from "../../components/MainContents/Teacher/StudentsAbsences";
import AllStudents from "../../components/MainContents/Teacher/AllStudents";
import Profile from "../../components/MainContents/Teacher/Profile";
import Footer from "../../components/Footer/Footer";
import { useState } from "react";

const Teacher = ({ toggle, sideBarOpen, teacher }) => {
    return (
        <div>
            <Router>
                <Navigation sideBarOpen={sideBarOpen} teacher={teacher} />
                <div className="teacher-page-content">
                    <SideBar toggle={toggle} teacher={teacher} />
                    <div
                        id="teacher"
                        className={
                            toggle ? "teacher" : "teacher-sidebar-closed"
                        }
                    >
                        <Switch>
                            <Route path="/dashboard">
                                <Dashboard />
                            </Route>

                            <Route path="/teacher/ExamsDate">
                                <ExamsDate toggle={toggle} />
                            </Route>
                            <Route path="/teacher/students">
                                <AllStudents toggle={toggle} />
                            </Route>
                            <Route path="/teacher/absencesHistory">
                                <StudentsAbsences />
                            </Route>
                            <Route path="/teacher/score">
                                <Score toggle={toggle} />
                            </Route>
                            <Route path="/teacher/profile">
                                <Profile />
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
