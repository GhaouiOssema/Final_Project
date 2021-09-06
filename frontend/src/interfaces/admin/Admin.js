import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { React } from "react";

import "./admin.css";
// components
import SideBar from "../../components/SideBar/admin/SideBar";
import Navigation from "../../components/Navigation/Navigation";
import Dashboard from "../../components/MainContents/Admin/Dashboard";
import Exam from "../../components/MainContents/Admin/Exam";
// import StudentProfile from "../../components/MailContents/Admin/StudentProfile";
import StudentProfile from "../../components/MainContents/Admin/StudentProfile";
import Teacher from "../../components/MainContents/Admin/Teacher";
import Student from "../../components/MainContents/Admin/Student";
import Absence from "../../components/MainContents/Admin/Absence";
import Classes from "../../components/MainContents/Admin/Classes";
import Footer from "../../components/Footer/Footer";
const Admin = ({ toggle, sideBarOpen }) => {
    return (
        <div>
            <Navigation sideBarOpen={sideBarOpen} />
            <Router>
                <SideBar toggle={toggle} />
                <div className={toggle ? "admin" : "admin-sidebar-closed"}>
                    <Switch>
                        <div style={{ marginLeft: "13%" }}>
                            <Route path="/dashboard" component={Dashboard} />
                            <Route path="/admin/exam">
                                <Exam toggle={toggle} />
                            </Route>

                            <Route path="/admin/teachers">
                                <Teacher toggle={toggle} />
                            </Route>
                            <Route path="/admin/students">
                                <Student />
                            </Route>
                            <Route path="/admin/absences">
                                <Absence />
                            </Route>
                            <Route path="/admin/student/profile/:id">
                                <StudentProfile />
                            </Route>
                            <Route path="/admin/classes">
                                <Classes toggle={toggle} />
                            </Route>
                        </div>
                    </Switch>
                </div>
                <Footer toggle={toggle} />
            </Router>
        </div>
    );
};

export default Admin;
