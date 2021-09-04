import axios from "axios";
import React, { useState, useEffect } from "react";

import jwt from "jwt-decode";
import Loader from "react-loader-spinner";

import "./Profile.css";

const Profile = () => {
    // hooks for Profile INformation
    const [profileInfo, setProfilInfo] = useState({ PROFILE: [] });

    // get the student id from the locale storage
    const TOKEN = localStorage.getItem("JWT");
    const id = jwt(TOKEN).id;

    // useEffect with axios function for getting profile information
    // *** Start ***
    const StudenProfile = async () => {
        try {
            await axios
                .get(`http://localhost:5000/student/profile/${id}`)
                .then((res) => {
                    setProfilInfo({ PROFILE: res.data.data });
                })
                .catch((err) => console.log(err));
        } catch (err) {
            console.log(err);
        }
    };
    useEffect(() => {
        StudenProfile();
    }, []);

    // ************
    // profile information
    const AVATAR = profileInfo.PROFILE.avatar;
    const Fname = profileInfo.PROFILE.firstName;
    const Lname = profileInfo.PROFILE.lastName;
    const CLASSROOM = profileInfo.PROFILE.classRoom;
    const AGE = profileInfo.PROFILE.age;
    const PARENTSphone = profileInfo.PROFILE.parentsPhone;
    const ADRESS = profileInfo.PROFILE.adress;
    const EMAIL = profileInfo.PROFILE.email;
    // *************
    const [showMark, setShowMark] = useState(false);
    const showMarks = () => {
        setShowMark(true);
        const home = document.getElementById("home-tab");
        const mark = document.getElementById("profile-tab");
        home.classList.remove("active");
        mark.classList.add("active");
    };

    const showAbout = () => {
        setShowMark(false);
        const home = document.getElementById("home-tab");
        const mark = document.getElementById("profile-tab");
        home.classList.add("active");
        mark.classList.remove("active");
    };
    return (
        <div>
            {profileInfo.length !== 0 ? (
                <div className="container emp-profile">
                    <div className="form-profile">
                        <div className="row">
                            <div className="col-md-4">
                                <div className="profile-img">
                                    <img
                                        src={AVATAR}
                                        alt="student_profile_image"
                                    />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="profile-head">
                                    <h5>{`${Fname} ${Lname}`}</h5>
                                    <h6>Student At Smart School </h6>
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
                                                aria-selected="true"
                                                onClick={showAbout}>
                                                About
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <button
                                                className="nav-link"
                                                id="profile-tab"
                                                data-toggle="tab"
                                                href="#profile"
                                                role="tab"
                                                aria-controls="profile"
                                                aria-selected="false"
                                                onClick={showMarks}>
                                                School Details
                                            </button>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* About Part  */}
                        {showMark === false ? (
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
                                                    <label>Student Class</label>
                                                </div>
                                                <div className="col-md-6">
                                                    <p>{CLASSROOM}</p>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <label>Full Name</label>
                                                </div>
                                                <div className="col-md-6">
                                                    <p>{`${Fname} ${Lname}`}</p>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <label>Age</label>
                                                </div>
                                                <div className="col-md-6">
                                                    <p>{`${AGE} Years Old`}</p>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <label>Email</label>
                                                </div>
                                                <div className="col-md-6">
                                                    <p>{EMAIL}</p>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <label>Parent Phone</label>
                                                </div>
                                                <div className="col-md-6">
                                                    <p>{PARENTSphone}</p>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <label>Adress</label>
                                                </div>
                                                <div className="col-md-6">
                                                    <p>{ADRESS}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            // Student Mark Part
                            <div className="school-details">
                                <div className="FULL-HEIGHT">
                                    <label>
                                        an educational institution designed to
                                        provide learning spaces and learning
                                        environments for the teaching of
                                        students under the direction of
                                        teachers.
                                    </label>
                                    <div className="details">
                                        <div className="icons-field">
                                            <i
                                                className="fas fa-clock"
                                                style={{
                                                    color: "#9d46ff",
                                                }}></i>
                                            <span style={{ color: "#9d46ff" }}>
                                                Always At Time
                                            </span>
                                        </div>
                                        <div className="icons-field">
                                            <i
                                                className="fas fa-sort-amount-up"
                                                style={{
                                                    color: "#2e7d32",
                                                }}></i>
                                            <span style={{ color: "#2e7d32" }}>
                                                Be motivated
                                            </span>
                                        </div>
                                        <div className="icons-field">
                                            <i
                                                className="far fa-question-circle"
                                                style={{
                                                    color: "#a30000",
                                                }}></i>
                                            <span style={{ color: "#a30000" }}>
                                                pay attantion
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            ) : (
                <div className="loader">
                    <Loader
                        type="ThreeDots"
                        color="#00BFFF"
                        height={150}
                        width={150}
                    />
                </div>
            )}
        </div>
    );
};

export default Profile;
