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
import Footer from "../../components/Footer/Footer";

const Student = () => {
    return (
        <div>
            <Navigation />
            <Router>
                <SideBar />
                <div className="admin">
                    <Switch>
                        <div style={{ marginLeft: "13%" }}>
                            <Route path="/dashboard" component={Dashboard} />
                            <Route path="/student/exam">
                                <Exam />
                            </Route>

                            <Route path="/student/absence">
                                <Absence />
                            </Route>
                            <Route path="student/note">
                                <Note />
                            </Route>
                        </div>
                    </Switch>
                </div>
                <Footer />
            </Router>
        </div>
    );
};

export default Student;
