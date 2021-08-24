import "./SideBar.css";
import { NavLink } from "react-router-dom";

const SideBar = () => {
    return (
        // <div className="sidebar">
        //     <div className="sidebar-content">
        //         <div className="sidebar-user-panel">
        //             <div className="user-panel">
        //                 <img
        //                     src="https://radixtouch.com/templates/admin/smart/source/assets/img/dp.jpg"
        //                     className="user-img-circle"
        //                     alt="User Image"
        //                     width="75px"
        //                     height="75px"
        //                 />
        //                 <div className="user-panel-info">
        //                     <p> Hatem Kthiri</p>
        //                     <div>
        //                         <i className="fa fa-circle user-online"></i>
        //                         <span className="txtOnline">Online</span>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //         <div className="sidebar-nav-item">
        //             <NavLink className="nav-link" to="/admin/dashboard">
        //                 <div className="test">
        //                     <i class="fas fa-table"></i>
        //                     <span className="title">Dashboard</span>
        //                 </div>
        //             </NavLink>
        //         </div>
        //         <div className="sidebar-nav-item">
        //             <NavLink className="nav-link" to="/admin/exam">
        //                 <i class="fas fa-calendar-week"></i>
        //                 <span className="title">Exams</span>
        //             </NavLink>
        //         </div>
        //         <div className="sidebar-nav-item">
        //             <NavLink className="nav-link" to="/admin/professors">
        //                 <i class="fas fa-user"></i>
        //                 <span className="title">Professors</span>
        //             </NavLink>
        //         </div>
        //         <div className="sidebar-nav-item">
        //             <NavLink className="nav-link" to="/admin/students">
        //                 <i class="fas fa-users"></i>
        //                 <span className="title">Students</span>
        //             </NavLink>
        //         </div>
        //         <div className="sidebar-nav-item">
        //             <NavLink className="nav-link" to="/admin/absence">
        //                 <i class="fas fa-user-check"></i>
        //                 <span className="title">Absence</span>
        //             </NavLink>
        //         </div>
        //         <div className="sidebar-nav-item">
        //             <NavLink className="nav-link" to="/admin/note">
        //                 <i class="far fa-clipboard"></i>
        //                 <span className="title">Note</span>
        //             </NavLink>
        //         </div>
        //     </div>
        // </div>

        <div class="sidebar">
            <div className="sidebar-user-panel">
                <div className="user-panel">
                    <img
                        src="https://radixtouch.com/templates/admin/smart/source/assets/img/dp.jpg"
                        className="user-img-circle"
                        alt="User Image"
                        width="75px"
                        height="75px"
                    />
                    <div className="user-panel-info">
                        <p> Hatem Kthiri</p>
                        <div>
                            <i className="fa fa-circle user-online"></i>
                            <span className="txtOnline">Online</span>
                        </div>
                    </div>
                </div>
            </div>
            <ul>
                <li>
                    <NavLink className="nav-link active" to="/admin/dashboard">
                        <span class="icon">
                            <i class="fas fa-desktop"></i>
                        </span>
                        <span class="item">Dashboard</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink className="nav-link" to="/admin/exam">
                        <span class="icon">
                            <i class="fas fa-calendar-week"></i>
                        </span>
                        <span class="item">Date Of Exams</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink className="nav-link" to="/admin/teachers">
                        <span class="icon">
                            <i class="fas fa-chalkboard-teacher"></i>
                        </span>
                        <span class="item">Teachers</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink className="nav-link" to="/admin/students">
                        <span class="icon">
                            <i class="fas fa-user-friends"></i>
                        </span>
                        <span class="item">Students</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink className="nav-link" to="/admin/absences">
                        <span class="icon">
                            <i class="fas fa-user-check"></i>
                        </span>
                        <span class="item">Absence</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink className="nav-link" to="/admin/classes">
                        <span class="icon">
                            <i class="fas fa-chart-line"></i>
                        </span>
                        <span class="item">Classes</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink className="nav-link" to="/admin/examScores">
                        <span class="icon">
                            <i class="far fa-clipboard"></i>
                        </span>
                        <span class="item">Exam Scores</span>
                    </NavLink>
                </li>
            </ul>
        </div>
    );
};

export default SideBar;
