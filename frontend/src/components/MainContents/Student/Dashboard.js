import React, { useState } from "react";
import "react-calendar/dist/Calendar.css";

import Calendar from "react-calendar";
import { Line } from "react-chartjs-2";

import "./Dashboard.css";

// data for charts : line
const data = {
    labels: ["1", "2", "3", "4", "5", "6"],
    datasets: [
        {
            label: "# of Votes",
            data: [12, 19, 3, 5, 2, 3],
            fill: false,
            backgroundColor: "rgb(255, 99, 132)",
        },
    ],
};
// options for charts : line
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
const Dashboard = () => {
    const [value, onChange] = useState(new Date());

    return (
        <div className="dachborard-container">
            <div className="dachborard-header">
                <div className="header-left">
                    <div className="header-card">
                        <div className="card-content">
                            <i class="fas fa-user-slash"></i>
                            <div>
                                <label>Total Absences</label>
                                <span>20</span>
                            </div>
                        </div>
                        <div className="card-content">
                            <i class="fas fa-school"></i>{" "}
                            <div>
                                <label>schol Name</label>
                                <span>ClassRoom : xxx</span>
                            </div>
                        </div>
                    </div>
                    <div className="timetable">
                        <span>Schedule</span>
                        <img
                            src="https://webetab.ac-bordeaux.fr/college-lavardac/typo3temp/pics/d748d145ab.jpg"
                            alt="timeTable"
                        />
                    </div>
                </div>
                <div className="header-right ">
                    <Calendar
                        onChange={onChange}
                        value={value}
                        className="calandar"
                    />
                    <div className="chart-container">
                        <Line data={data} options={options} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
