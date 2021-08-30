import React, { useState, useEffect } from "react";

import axios from "axios";
import "./absence.css";

const Absence = () => {
    // hooks for absente condition
    const [absente, setAbsente] = useState(false);

    // hooks for all students Absences
    const [allAbsences, setAllabsences] = useState({
        StudentABS: [],
    });

    // useEffect with axios function for getting student Situation
    // *** Start ***
    useEffect(async () => {
        axios
            .get(
                "http://localhost:5000/student/absence/611d199d55bd1a1c64d37f70"
            )
            .then((res) => {
                setAllabsences({ StudentABS: res.data.data });
            })
            .catch((err) => console.log(err));
    }, []);
    // **End***

    // map the tbody elements from data base
    // ***Start***
    const absencesData = allAbsences.StudentABS.map((StudentABS, i) => {
        // effecting elments from data base to variable
        const Subject = StudentABS.addedBy.subject;
        const Proffesore = StudentABS.addedBy.firstName;
        const AbsenteDate = StudentABS.date;
        const Sitiuation = StudentABS.situation;

        // html structure
        return (
            <tr key={i}>
                <td className="centerImg">
                    <img
                        src="https://radixtouch.com/templates/admin/smart/source/assets/img/dp.jpg"
                        width="30"
                        className="profImg"
                    />
                </td>
                <td className="center">
                    <div className="center-field">
                        <span>{Proffesore}</span>
                    </div>
                </td>
                <td className="center">
                    <span>{Subject}</span>
                </td>
                <td className="center">
                    <span>{AbsenteDate}</span>
                </td>
                <td className="center">
                    <div className="indcate">
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
        <div className="table-responsive">
            <div className="header">
                <label>Student Absences</label>
            </div>
            {absente ? (
                <div className="absente-content">
                    <h1 className="no-absente">
                        You Don't Have Any Absence Keep Going
                    </h1>
                    <i className="far fa-thumbs-up"></i>
                </div>
            ) : (
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
                                    <th className="center">Picture</th>
                                    <th className="center">Professor</th>
                                    <th className="center">Subject</th>
                                    <th className="center">Date</th>
                                    <th className="center">Situation</th>
                                </tr>
                            </thead>
                            {/* map function */}
                            <tbody>{absencesData}</tbody>
                        </table>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Absence;
