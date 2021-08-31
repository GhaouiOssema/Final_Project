import React from "react";
import "./Profile.css";
import { useState, useEffect } from "react";
import { Table } from "react-bootstrap";
import { useParams } from "react-router-dom";
import axios from "axios";

const Prifile = () => {
    const { id } = useParams();
    const [teacherInfo, setTeacherInfo] = useState([]);

    // Function Axios Get teacher information
    /*************************************/
    const getTeacherInfo = async () => {
        const Teacher = await axios.get(
            "http://localhost:5000/teacher/profile"
        );
        setTeacherInfo(Teacher.data.data);
    };
    /*************************************/

    //Function Axios to update teacher profile inforamtion
    /********************************/
    const updateProfile = () => {
        // const updateProfile = axios.put(
        //     "http://localhost:5000/teacher/EditSituation/:id"
        // );
        alert("dd");
    };

    /********************************/
    useEffect(() => {
        getTeacherInfo();
    }, []);

    // const student_info = allStudents.filter((student) => student._id === id);

    const [showMark, setShowMark] = useState(false);
    return (
        <div>
            <div className="teacher-container emp-profile">
                <div className="form-profile">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="profile-img">
                                <img
                                    // src={student_info[0].avatar}
                                    src="https://png.pngitem.com/pimgs/s/508-5087236_tab-profile-f-user-icon-white-fill-hd.png"
                                    alt="student_profile_image"
                                />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="profile-head">
                                {/* <h5>{`${student_info[0].firstName} ${student_info[0].lastName}`}</h5> */}
                                <h5>oussema ghaoui</h5>
                                <h6>Teacher At Smart School </h6>
                                <p className="proile-rating">
                                    Rate : <span> 4.5 / 5</span>
                                </p>
                                <ul
                                    className="nav nav-tabs"
                                    id="myTab"
                                    role="tablist">
                                    <li className="nav-item">
                                        <a
                                            className="nav-link active"
                                            id="home-tab"
                                            data-toggle="tab"
                                            href="#home"
                                            role="tab"
                                            aria-controls="home"
                                            aria-selected="true">
                                            About
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-2">
                            <button
                                onClick={updateProfile}
                                className="profile-edit-btn">
                                Edit Profile
                            </button>
                        </div>
                    </div>

                    {/* About Part  */}
                    <div className="row">
                        <div className="col-md-4">
                            <div className="profile-work">
                                <span>STUDENT HOBBIES</span>
                                <br />
                                <p>FootBall</p>
                                <p>Swim</p>
                                <p>Outdoor activities</p>
                                <p>Playing an instrument</p>
                                <p>Team or individual sports</p>
                            </div>
                        </div>
                        <div className="col-md-8">
                            <div
                                className="tab-content profile-tab"
                                id="myTabContent">
                                <div
                                    className="tab-pane fade show active"
                                    id="home"
                                    role="tabpanel"
                                    aria-labelledby="home-tab">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <label>Subject</label>
                                        </div>
                                        <div className="col-md-6">
                                            <p>
                                                {/* {student_info[0].classRoom} */}
                                                1 s 3
                                            </p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <label>Full Name</label>
                                        </div>
                                        <div className="col-md-6">
                                            {/* <p>{`${student_info[0].firstName} ${student_info[0].lastName}`}</p> */}
                                            <p>oussema ghaoui</p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <label>Email</label>
                                        </div>
                                        <div className="col-md-6">
                                            {/* <p>{student_info[0].email}</p> */}
                                            <p>oussemaghaoui@gmail.com</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Prifile;
