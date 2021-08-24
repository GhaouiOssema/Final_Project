import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React from "react";
import "./admin.css";
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
                <div className="admin">
                    <SideBar />
                    <Switch>
                        {/* <Route path="/admin/dashboard" component={Dashboard} /> */}
                        <Route path="/admin/exam" component={Exam} />
                        {/* <Route path="/admin/teachers" component={Teacher} /> */}
                        {/* <Route path="/admin/students" component={Student} /> */}
                        {/* <Route path="/admin/absences" component={Absence} /> */}
                        {/* <Route path="/admin/classes" component={Classes} /> */}
                        {/* <Route path="/admin/examScores" component={ExamScore} /> */}
                    </Switch>
                </div>
            </Router>
        </div>
    );
};

export default Admin;
