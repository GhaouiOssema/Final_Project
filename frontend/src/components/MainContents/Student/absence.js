import React, { useState, useEffect } from "react";

import axios from "axios";
import jwt from "jwt-decode";
import { useParams } from "react-router";
import "./absence.css";
import { token } from "morgan";

const Absence = () => {
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
            await axios
                .get(`http://localhost:5000/student/absence/${id}`)
                .then((res) => {
                    setAllabsences({ StudentABS: res.data.data });
                })
                .catch((err) => {
                    console.log(err);
                });
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        GetStudentAbsences();
    }, []);
    console.log(allAbsences);

    // **End***

    // map the tbody elements from data base
    // ***Start***
    const absencesData = allAbsences.StudentABS.map((StudentABS, i) => {
        // effecting elments from data base to variable
        const Picture = StudentABS.addedBy.avatar;
        const Subject = StudentABS.addedBy.subject;
        const Proffesore = StudentABS.addedBy.firstName;
        const AbsenteDate = StudentABS.date;
        const Sitiuation = StudentABS.situation;

        // html structure
        return (
            <tr key={i}>
                <td className="centerImg">
                    <img src={Picture} width="30" className="profImg" />
                </td>
                <td className="center">
                    <div className="center-field">
                        <span>{Proffesore}</span>
                    </div>
                </td>
                <td className="center">
                    <span className="center-field">{Subject}</span>
                </td>
                <td className="center">
                    <span className="center-field">{AbsenteDate}</span>
                </td>
                <td className="center">
                    <div className="indcate center-field">
                        {Sitiuation === "Present" ? (
                            <i className="fa fa-circle green"></i>
                        ) : Sitiuation === "Excluded" ? (
                            <i className="fa fa-circle yellow"></i>
                        ) : Sitiuation === "Absent" ? (
                            <i className="fa fa-circle red"></i>
                        ) : null}
                    </div>
                </td>
            </tr>
        );
    });
    // *** End map here***

    return (
        <div className="table-responsive someHigth">
            {allAbsences != "" ? (
                <>
                    <div className="table-container">
                        <div className="icons">
                            <div>
                                <i className="fa fa-circle green"></i>
                                <span className="txtOnline">Present</span>
                            </div>{" "}
                            <div>
                                <i className="fas fa-circle red"></i>
                                <span className="txtOnline">Absent</span>
                            </div>{" "}
                            <div>
                                <i className="fa fa-circle yellow"></i>
                                <span className="txtOnline">excluded</span>
                            </div>
                        </div>
                        <div className="table-header">
                            <table className="table table-checkable order-column">
                                <thead>
                                    <tr>
                                        <th className="center Color">
                                            Picture
                                        </th>
                                        <th className="center Color">
                                            Professor
                                        </th>
                                        <th className="center Color">
                                            Subject
                                        </th>
                                        <th className="center Color">Date</th>
                                        <th className="center Color">
                                            Situation
                                        </th>
                                    </tr>
                                </thead>
                                {/* map function */}
                                <tbody className="absences-t-body">
                                    {absencesData}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </>
            ) : (
                <div className="absente-content">
                    <h1 className="no-absente">
                        You Don't Have Any Absence Keep Going
                    </h1>
                    <i className="far fa-thumbs-up"></i>
                </div>
            )}
        </div>
    );
};

export default Absence;
