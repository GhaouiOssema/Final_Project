import React, { useState, useEffect } from "react";
import axios from "axios";
import jwt from "jwt-decode";
import "react-calendar/dist/Calendar.css";

import Calendar from "react-calendar";
import { Line } from "react-chartjs-2";

import "./Dashboard.css";

const Dashboard = () => {
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
    // hook for calendar
    const [value, onChange] = useState(new Date());
    // get th student id from the localStorage
    const TOKEN = localStorage.getItem("JWT");
    const id = jwt(TOKEN).id;

    // hooks for all students Absences
    const [allAbsences, setAllabsences] = useState({
        StudentABS: [],
    });

    // useEffect with axios function for getting student Situation
    // *** Start ***

    const GetStudentAbsences = async () => {
        try {
            const Absences = await axios.get(
                `http://localhost:5000/student/absence/${id}`
            );
            setAllabsences({ StudentABS: Absences.data.data });
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        GetStudentAbsences();
    }, []);

    // **End***

    // filtring the the situation by "Absente"
    const total = allAbsences.StudentABS.filter((StudentABS) => {
        return StudentABS.situation === "Absente";
    });
    console.log(total);
    const totalAbs = total.length;

    // hooks for Profile INformation
    const [profileInfo, setProfilInfo] = useState({ PROFILE: [] });

    // useEffect with axios function for getting student Class Room
    // *** Start ***
    const StudenProfile = async () => {
        try {
            const profile = await axios.get(
                `http://localhost:5000/student/profile/${id}`
            );
            setProfilInfo({ PROFILE: profile.data.data });
        } catch (err) {
            console.log(err);
        }
    };
    useEffect(() => {
        StudenProfile();
    }, []);

    const CLASSROOM = profileInfo.PROFILE.classRoom;

    // ************

    return (
        <div className="dachborard-container">
            <div className="dachborard-header">
                <div className="header-left">
                    <div className="header-card">
                        <div className="card-content">
                            <i class="fas fa-user-slash"></i>
                            <div>
                                <label>Total Absences</label>
                                <span>{totalAbs}</span>
                            </div>
                        </div>
                        <div className="card-content">
                            <i class="fas fa-school"></i>
                            <div>
                                <label>school Name</label>
                                <span>Class Room : {CLASSROOM} </span>
                            </div>
                        </div>
                    </div>
                    <div
                        className="timetable"
                        style={{
                            height: 391,
                        }}>
                        <img
                            src="https://webetab.ac-bordeaux.fr/college-lavardac/typo3temp/pics/d748d145ab.jpg"
                            alt="timeTable"
                            className="time-img"
                        />
                    </div>
                </div>
                <div className="header-right ">
                    <Calendar
                        onChange={onChange}
                        value={value}
                        className="CALENDAR"
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
