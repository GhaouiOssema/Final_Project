import "./SideBar.css";
const SideBar = () => {
    return (
        <div className="sidebar">
            <div className="sidebar-content">
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
                <div className="sidebar-nav-item">
                    <i class="fas fa-table"></i>
                    <span className="title">Dashboard</span>
                </div>
                <div className="sidebar-nav-item">
                    <i class="fas fa-calendar-week"></i>
                    <span className="title">Exams</span>
                </div>
                <div className="sidebar-nav-item">
                    <i class="fas fa-user"></i>
                    <span className="title">Professors</span>
                </div>
                <div className="sidebar-nav-item">
                    <i class="fas fa-users"></i>
                    <span className="title">Students</span>
                </div>
            </div>
        </div>
    );
};

export default SideBar;
