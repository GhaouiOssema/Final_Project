import axios from "axios";
import React, { useState, useEffect } from "react";
import "./Profile.css";

const Profile = () => {
    // hooks for Profile INformation
    const [profileInfo, setProfilInfo] = useState();

    // useEffect with axios function for getting profile information
    // *** Start ***
    useEffect(() => {
        axios
            .get(
                "http://localhost:5000/student/profile/6127d6cc6745002d2c966c7d"
            )
            .then((res) => {
                setProfilInfo(res.data.data);
            })
            .catch((err) => console.log(err));
    }, []);
    // ***End
    return (
        <div className="profile-section">
            <h1>Profile </h1>
            {/* condition for profileInfo hook : profileInfo is empty or not   */}
            {profileInfo ? (
                <div className="container">
                    <div className="profile-image">
                        <img
                            src={profileInfo.avatar}
                            className="profile-img"
                            alt=""
                        />
                    </div>
                    <div className="section-top">
                        <div className="profile-card">
                            <ul className="profile-list">
                                <li className="list-items">
                                    <b>job</b>
                                    <div className="pull-right">Student</div>
                                </li>
                                <li className="list-items">
                                    <b>First Name</b>
                                    <div className="pull-right">
                                        {profileInfo.firstName}
                                    </div>
                                </li>
                                <li className="list-items">
                                    <b>Last Name</b>
                                    <div className="pull-right">
                                        {profileInfo.lastName}
                                    </div>
                                </li>
                                <li className="list-items">
                                    <b>classRoom</b>
                                    <div className="pull-right">
                                        {profileInfo.classRoom}
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="aboute-card">
                            <ul className="list-group">
                                <li className="list-items">
                                    <b>Age </b>
                                    <div className="list-desc">
                                        {profileInfo.age}
                                    </div>
                                </li>
                                <li className="list-items">
                                    <b>Parent phone </b>
                                    <div className="list-desc">
                                        {profileInfo.parentsPhone}
                                    </div>
                                </li>
                                <li className="list-items">
                                    <b>Adress</b>
                                    <div className="list-desc">
                                        {profileInfo.adress}
                                    </div>
                                </li>
                                <li className="list-items">
                                    <b>Email</b>
                                    <div className="list-desc">
                                        {profileInfo.email}
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            ) : null}
        </div>
    );
};

export default Profile;
