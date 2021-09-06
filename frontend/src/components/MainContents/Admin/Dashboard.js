import "./Dashboard.css";
import { Bar, Doughnut } from "react-chartjs-2";

const Dashboard = () => {
    const data = {
        labels: ["1", "2", "3", "4", "5", "6"],
        datasets: [
            {
                label: "# of Red Votes",
                data: [12, 19, 3, 5, 2, 3],
                backgroundColor: "rgb(255, 99, 132)",
            },
            {
                label: "# of Blue Votes",
                data: [2, 3, 20, 5, 1, 4],
                backgroundColor: "rgb(54, 162, 235)",
            },
            {
                label: "# of Green Votes",
                data: [3, 10, 13, 15, 22, 30],
                backgroundColor: "rgb(75, 192, 192)",
            },
        ],
    };

    const options = {
        scales: {
            yAxes: [
                {
                    ticks: {
                        beginAtZero: true,
                    },
                },
            ],
        },
    };

    return (
        <div className="Alldashboard-admin">
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
            <div className="charts-admin-dashboard">
                <div className="Bar-charts">
                    <Bar data={data} options={options} />
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
