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
import Profile from "../../components/MainContents/Teacher/Prifile";

const Teacher = () => {
    return (
        <div>
            <Router>
                <Navigation />
                <div className="teacher-page-content">
                    <SideBar />
                    <div className="someMargin">
                        <Switch>
                            <Route
                                path="/teacher/dashboard"
                                component={Dashboard}
                            />
                            <Route
                                path="/teacher/ExamsDate"
                                component={ExamsDate}
                            />
                            <Route
                                path="/teacher/students"
                                component={AllStudents}
                            />
                            <Route
                                path="/teacher/absencesHistory"
                                component={StudentsAbsences}
                            />
                            <Route path="/teacher/score" component={Score} />
                            <Route
                                path="/teacher/profile"
                                component={Profile}
                            />
                        </Switch>
                    </div>
                </div>
            </Router>
        </div>
    );
};

export default Teacher;
