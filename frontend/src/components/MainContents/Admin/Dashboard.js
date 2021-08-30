import "./Dashboard.css";
const Dashboard = () => {
    return (
        <div>
            <div className="all-cards">
                <div className="one-card" id="card-color-1">
                    <div className="card-icon">
                        <i class="fas fa-users"></i>
                    </div>
                    <div>
                        <h5 className="info-box-text">Total Students</h5>
                        <p className="info-box-number">450</p>
                        <div class="progress">
                            <div
                                class="progress-bar"
                                style={{ width: "45%" }}
                            ></div>
                        </div>
                    </div>
                </div>
                <div className="one-card" id="card-color-2">
                    <div className="card-icon">
                        <i class="fas fa-chalkboard-teacher"></i>
                    </div>
                    <div>
                        <h5 className="info-box-text">Total Teachers</h5>
                        <p className="info-box-number">30</p>
                        <div class="progress">
                            <div
                                class="progress-bar"
                                style={{ width: "65%" }}
                            ></div>
                        </div>
                    </div>
                </div>
                <div className="one-card" id="card-color-3">
                    <div className="card-icon">
                        <i class="fas fa-book"></i>
                    </div>
                    <div>
                        <h5 className="info-box-text">Total Subjects</h5>
                        <p className="info-box-number">30</p>
                        <div class="progress">
                            <div
                                class="progress-bar"
                                style={{ width: "85%" }}
                            ></div>
                        </div>
                    </div>
                </div>
            </div>
            <div
                style={{
                    padding: "10px",
                    marginLeft: "-13%",
                }}
            >
                <img
                    src={process.env.PUBLIC_URL + "/dashboard.png"}
                    alt="dashboard"
                />
            </div>
        </div>
    );
};

export default Dashboard;
