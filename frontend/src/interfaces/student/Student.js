import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React from "react";
import "./Student.css";

// components
import SideBar from "../../components/SideBar/student/SideBar";
import Navigation from "../../components/Navigation/Navigation";
import Dashboard from "../../components/MainContents/Student/Dashboard";
import Exam from "../../components/MainContents/Student/Exam";
import Absence from "../../components/MainContents/Student/absence";
import Note from "../../components/MainContents/Student/Note";
import Profile from "../../components/MainContents/Student/Profile";

const Student = () => {
    return (
        <div>
            <Router>
                <Navigation />
                <div className="page-content">
                    <SideBar />
                    <Switch>
                        <Route
                            path="/student/dashboard"
                            component={Dashboard}
                        />
                        <Route path="/student/exam" component={Exam} />
                        <Route path="/student/absence" component={Absence} />
                        <Route path="/student/note" component={Note} />
                        <Route path="/student/profile" component={Profile} />
                    </Switch>
                </div>
            </Router>
        </div>
    );
};

export default Student;
