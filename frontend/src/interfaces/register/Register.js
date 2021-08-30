import { React, useState } from "react";
import "./Register.css";
import { Form } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import axios from "axios";
const Register = () => {
    const history = useHistory();
    const [student, setStudent] = useState({
        firstName: "",
        classRoom: "",
        lastName: "",
        age: "",
        adress: "",
        parentsPhone: "",
        email: "",
        password: "",
        role: 2,
    });
    const [teacher, setTeacher] = useState({
        firstName: "",
        lastName: "",
        subject: "",
        email: "",
        password: "",
        role: 1,
    });
    //******************* */

    const signinButton = () => {
        const contaiiner = document.getElementById("contaiiner");
        contaiiner.classList.remove("right-panel-active");
    };
    const signupButton = () => {
        const contaiiner = document.getElementById("contaiiner");
        contaiiner.classList.add("right-panel-active");
    };
    const handleRegisterStudent = (e) => {
        setStudent({ ...student, [e.target.name]: e.target.value });
        console.log(student);
    };
    const handleSubmitRegisterStudent = (e) => {
        axios
            .post("http://localhost:5000/student/register", student)
            .then((res) => {
                console.log("Status: ", res.status);
                console.log("Data: ", res.data);
                history.push("/login");
            })
            .catch((err) => {
                console.log("Error in Create Student!", err);
            });
    };
    const handleRegisterTeacher = (e) => {
        setTeacher({ ...teacher, [e.target.name]: e.target.value });
    };
    const handleSubmitRegisterTeacher = (e) => {
        axios
            .post("http://localhost:5000/teacher/register", teacher)
            .then((res) => {
                console.log("Status : ", res.status);
                console.log("Data : ", res.data);
                history.push("/login");
            })
            .catch((err) => {
                console.log("Error in Create Teacher! ", err);
            });
    };
    return (
        <div className="lg">
            <div class="contaiiner" id="contaiiner">
                <div class="form-contaiiner sign-up-contaiiner">
                    <div className="form-teacher">
                        <h1 className="title">Sign Up As Teacher</h1>

                        <input
                            className="input"
                            type="text"
                            name="firstName"
                            id="exampleFirstName"
                            placeholder="First Name"
                            onChange={handleRegisterTeacher}
                        />
                        <input
                            className="input"
                            type="text"
                            name="lastName"
                            id="exampleLastName"
                            placeholder="Last Name"
                            onChange={handleRegisterTeacher}
                        />
                        <input
                            className="input"
                            type="text"
                            name="subject"
                            id="exampleLastName"
                            placeholder="Subject"
                            onChange={handleRegisterTeacher}
                        />
                        <input
                            className="input"
                            type="email"
                            name="email"
                            id="exampleInputEmail"
                            placeholder="Email Address"
                            onChange={handleRegisterTeacher}
                        />
                        <input
                            className="input"
                            type="password"
                            name="password"
                            id="exampleInputPassword"
                            placeholder="Password"
                            onChange={handleRegisterTeacher}
                        />

                        <button onClick={handleSubmitRegisterTeacher}>
                            Sign Up
                        </button>
                    </div>
                </div>
                <div class="form-contaiiner sign-in-contaiiner">
                    <div className="form-student">
                        <h1 className="title">Sign Up As Student</h1>

                        <div className="fullname">
                            <input
                                className="input"
                                type="text"
                                name="firstName"
                                id="exampleFirstName"
                                placeholder="First Name"
                                onChange={handleRegisterStudent}
                            />
                            <input
                                className="input"
                                type="text"
                                name="lastName"
                                id="exampleLastName"
                                placeholder="Last Name"
                                onChange={handleRegisterStudent}
                            />
                        </div>
                        <input
                            className="input"
                            type="text"
                            name="adress"
                            id="exampleInputAdress"
                            placeholder="Student Adress"
                            onChange={handleRegisterStudent}
                        />
                        <div className="fullname">
                            <input
                                className="input"
                                type="number"
                                name="parentsPhone"
                                id="exampleInputphone"
                                placeholder="Parents Phone"
                                onChange={handleRegisterStudent}
                            />
                            <input
                                className="input"
                                type="number"
                                name="age"
                                id="exampleInputage"
                                placeholder="Age"
                                onChange={handleRegisterStudent}
                            />
                        </div>

                        <input
                            className="input"
                            type="email"
                            name="email"
                            id="exampleInputEmail"
                            placeholder="Email Address"
                            onChange={handleRegisterStudent}
                        />
                        <input
                            className="input"
                            type="password"
                            name="password"
                            id="exampleInputPassword"
                            placeholder="Password"
                            onChange={handleRegisterStudent}
                        />

                        <button
                            onClick={handleSubmitRegisterStudent}
                            className="signup-valid-btn"
                        >
                            Sign Up
                        </button>
                    </div>
                </div>
                <div class="overlay-contaiiner">
                    <div class="overlay">
                        <div class="overlay-panel overlay-left">
                            <h1 style={{ fontWeight: "bold" }}>
                                Welcome Student !
                            </h1>
                            <p>
                                To Sign Up Here please enter your personal info
                            </p>
                            <button
                                class="ghost"
                                id="signIn"
                                onClick={signinButton}
                            >
                                Sign Up As Student
                            </button>
                        </div>
                        <div class="overlay-panel overlay-right">
                            <h1 style={{ fontWeight: "bold" }}>
                                Hello, Teacher!
                            </h1>
                            <p>Enter your personal details and start with us</p>
                            <button
                                class="ghost"
                                id="signUp"
                                onClick={signupButton}
                            >
                                Sign Up As Teacher
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
