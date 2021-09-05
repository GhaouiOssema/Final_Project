import "./Navigation.css";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { useHistory, NavLink } from "react-router-dom";
import jwt from "jwt-decode";

const Navigation = () => {
    // LOGOUT function
    const history = useHistory();
    const logOut = () => {
        localStorage.clear();
        history.push("/");
        history.go(0);
    };
    //login function and get role and id from the locale storage
    const TOKEN = localStorage.getItem("JWT");
    const isLoggedIn = () => {
        if (TOKEN) {
            return true;
        }
        return false;
    };

    const Role = () => {
        if (TOKEN != "") {
            return jwt(TOKEN).role;
        }
    };
    let ROLE = Role();

    // const ID = () => {
    //     if (TOKEN != "") {
    //         return jwt(TOKEN).id;
    //     }
    // };

    return (
        <div className="top-header">
            <div className="top-header-logo">
                <i className="fas fa-graduation-cap fa-rotate-45"></i>
                <span> Smart </span>
            </div>

            <div className="top-header-Content">
                <div className="search-bars">
                    <i className="fas fa-bars"></i>
                    <div className="input-search">
                        <input type="text" placeholder="Search..." />
                        <i className="fas fa-search"></i>
                    </div>
                </div>
                <div className="right-content">
                    <i className="fas fa-expand-arrows-alt"></i>
                    <i className="far fa-bell"></i>
                    <div className="right-content-profile">
                        <img
                            src="https://radixtouch.com/templates/admin/smart/source/assets/img/dp.jpg"
                            width="29px"
                            height="29px"
                            alt="profile"
                        />
                        <Navbar align="end" expand="lg">
                            <Container fluid>
                                <Navbar.Toggle aria-controls="navbar-dark-example" />
                                <Navbar.Collapse id="navbar-dark-example">
                                    <Nav>
                                        <NavDropdown
                                            id="nav-dropdown-dark-example"
                                            title="Hatem Kthiri">
                                            <NavDropdown.Item href="# ">
                                                {isLoggedIn() && ROLE === 1 ? (
                                                    <NavLink
                                                        to={`/teacher/profile`}>
                                                        <i className="far fa-user"></i>
                                                        Profile
                                                    </NavLink>
                                                ) : isLoggedIn() &&
                                                  ROLE === 2 ? (
                                                    <NavLink to="/student/profile">
                                                        <i className="far fa-user"></i>
                                                        Profile
                                                    </NavLink>
                                                ) : (
                                                    alert(
                                                        "you are not Login in"
                                                    )
                                                )}
                                            </NavDropdown.Item>

                                            <NavDropdown.Item href="# ">
                                                <i className="fas fa-cog"></i>
                                                Settings
                                            </NavDropdown.Item>
                                            <NavDropdown.Item href="# ">
                                                <i className="fas fa-map-signs"></i>
                                                Help
                                            </NavDropdown.Item>

                                            <NavDropdown.Item href="# ">
                                                <button onClick={logOut}>
                                                    <i className="fas fa-sign-out-alt"></i>
                                                    Logout
                                                </button>
                                            </NavDropdown.Item>
                                        </NavDropdown>
                                    </Nav>
                                </Navbar.Collapse>
                            </Container>
                        </Navbar>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navigation;
