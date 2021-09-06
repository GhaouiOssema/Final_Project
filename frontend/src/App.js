import Student from "./interfaces/student/Student";
import Admin from "./interfaces/admin/Admin";
import Teacher from "./interfaces/teacher/Teacher";
import Register from "./interfaces/register/Register";
import Login from "./interfaces/login/Login";
import Home from "./interfaces/home/Home";
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect,
} from "react-router-dom";
import jwt from "jwt-decode";
import { useState } from "react";
function App() {
    const token = localStorage.getItem("JWT");
    const getrole = () => {
        if (token !== null) {
            const decoded_token = jwt(token);
            console.log(decoded_token);
            return decoded_token.role;
        }
    };
    const isLoggedIn = () => {
        if (localStorage.getItem("JWT")) {
            return true;
        }
        return false;
    };
    const role = getrole();
    const [toggle, setToggle] = useState(true);
    const sideBarOpen = () => {
        setToggle(!toggle);
    };
    return (
        <Router>
            <div className="App">
                <Route path="/">
                    {isLoggedIn() && role === 0 ? (
                        <>
                            {/* <Redirect to="/dashboard" /> */}
                            <Route to="/dashboard">
                                <Admin
                                    toggle={toggle}
                                    sideBarOpen={sideBarOpen}
                                />
                            </Route>
                        </>
                    ) : isLoggedIn() && role === 1 ? (
                        <>
                            {/* <Redirect to="/dashboard" /> */}
                            <Route to="/dashboard">
                                <Teacher
                                    toggle={toggle}
                                    sideBarOpen={sideBarOpen}
                                />
                            </Route>
                        </>
                    ) : isLoggedIn() && role === 2 ? (
                        <>
                            {/* <Redirect to="/dashboard" /> */}
                            <Route to="/dashboard">
                                <Student
                                    toggle={toggle}
                                    sideBarOpen={sideBarOpen}
                                />
                            </Route>
                        </>
                    ) : (
                        <>
                            {<Route exact path="/dashboard"></Route> ? (
                                <Route>
                                    <Redirect to="/" />

                                    <>
                                        <Switch>
                                            <Route path="/register">
                                                <Register />
                                            </Route>
                                            <Route path="/">
                                                <Login />
                                            </Route>
                                        </Switch>
                                    </>
                                </Route>
                            ) : null}
                        </>
                    )}
                </Route>
                {/* {isLoggedIn() ? (
                    <>
                        {role === 0 ? (
                            <Route path="/dashboard">
                                <Admin />
                            </Route>
                        ) : role === 1 ? (
                            <h1>teacher</h1>
                        ) : (
                            <Route path="/dashboard">
                                <Student />
                            </Route>
                        )}
                    </>
                ) : (
                    <>
                        <Switch>
                            <Route path="/register">
                                <Register />
                            </Route>
                            <Route path="/">
                                <Login />
                            </Route>
                        </Switch>
                    </>
                )} */}
            </div>
        </Router>
    );
}

export default App;
