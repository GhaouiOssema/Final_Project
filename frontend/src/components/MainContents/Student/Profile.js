import { Button } from "react-bootstrap";
import React from "react";
import "./Profile.css";

const Profile = () => {
    return (
        <div className="profile-section">
            <h1>Profile information</h1>
            <div className="section-top">
                <div className="profile-card">
                    <div className="profile-image">
                        <img
                            src="https://res.cloudinary.com/devatchannel/image/upload/v1602752402/avatar/avatar_cugq40.png"
                            className="profile-img"
                            alt=""
                        />
                    </div>
                    <div className="profile-title">
                        <div className="profile-name">Hatem Kthiri</div>
                    </div>
                    <ul className="profile-list">
                        <li className="list-items">
                            <b>job</b>
                            <a className="pull-right">Student</a>
                        </li>
                        <li className="list-items">
                            <b>Absences</b>
                            <a className="pull-right">No Absences</a>
                        </li>
                        <li className="list-items">
                            <b>section</b>
                            <a className="pull-right">computer sience </a>
                        </li>
                        <li className="list-items">
                            <b>level</b>
                            <a className="pull-right">3</a>
                        </li>
                        {/* <li>
                            <form method="POST" action="#">
                                <input type="file" />
                                <br />
                                <button type="submit">upload picture</button>
                            </form>
                        </li> */}
                    </ul>
                </div>
                <div>
                    <div className="aboute-card">
                        <header>More Information</header>
                        <ul className="list-group">
                            <li className="list-items">
                                <b>Gender </b>
                                <div className="list-desc">Male</div>
                            </li>
                            <li className="list-items">
                                <b>Age </b>
                                <div className="list-desc">24</div>
                            </li>{" "}
                            <li className="list-items">
                                <b>Parent phone </b>
                                <div className="list-desc">24</div>
                            </li>
                            <li className="list-items">
                                <b>Adress</b>
                                <div className="list-desc">
                                    tunis ,béja nord , 9000
                                </div>
                            </li>
                            <li className="list-items">
                                <b>Email</b>
                                <div className="list-desc">
                                    hatemkthiri@gmail.com
                                </div>
                            </li>
                            <li className="list-items">
                                <b>Your Password</b>
                                <div className="list-desc">
                                    xxxxxxxxxxxxxxxxxxxxx
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="section-botton"></div>
        </div>
    );
};

export default Profile;
