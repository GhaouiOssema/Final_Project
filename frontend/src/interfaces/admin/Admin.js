import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React from "react";
import "../../components/SideBar/admin/SideBar.css";
// components
import SideBar from "../../components/SideBar/admin/SideBar";
import Navigation from "../../components/Navigation/Navigation";
import Dashboard from "../../components/MainContents/Admin/Dashboard";
import Exam from "../../components/MainContents/Admin/Exam";
import Teacher from "../../components/MainContents/Admin/Teacher";
import Student from "../../components/MainContents/Admin/Student";
import Absence from "../../components/MainContents/Admin/Absence";
import Classes from "../../components/MainContents/Admin/Classes";
import ExamScore from "../../components/MainContents/Admin/ExamScore";

const Admin = () => {
    return (
        <div>
            <Navigation />
            <Router>
                <SideBar />
                <div className="admin">
                    <Switch>
                        <div style={{ marginLeft: "13%" }}>
                            <Route
                                path="/admin/dashboard"
                                component={Dashboard}
                            />
                            <Route path="/admin/exam" component={Exam} />
                        </div>
                    </Switch>
                </div>
            </Router>
        </div>
    );
};

export default Admin;
