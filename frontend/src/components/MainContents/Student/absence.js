import React, { useState } from "react";
import "./absence.css";

const Absence = () => {
    // eslint-disable-next-line
    const [absente, setAbsente] = useState(true);
    return (
        <div className="table-responsive">
            <div className="header">
                <label>Session : 2021 / 2022</label>
                <div className="icons">
                    <div>
                        <i className="fa fa-circle green"></i>
                        <span className="txtOnline">Prente</span>
                    </div>{" "}
                    <div>
                        <i className="fas fa-circle red"></i>
                        <span className="txtOnline">Absente</span>
                    </div>{" "}
                    <div>
                        <i className="fa fa-circle yellow"></i>
                        <span className="txtOnline">exclute</span>
                    </div>
                </div>
            </div>
            {absente ? <Table /> : <NoAbsente />}
        </div>
    );
};

const NoAbsente = () => {
    return (
        <div className="absente-content">
            <h1 className="no-absente">
                You Don't Have Any Absence Keep Going
            </h1>
            <i className="far fa-thumbs-up"></i>
        </div>
    );
};

const Table = () => {
    return (
        <div className="table-header">
            <table className="table table-checkable order-column">
                <thead>
                    <tr>
                        <th className="center">Subject</th>
                        <th className="center">Assigned Coach</th>
                        <th className="center">Date</th>
                        <th className="center">Time</th>
                        <th className="center">Situation</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="">
                        <td className="center">Math</td>
                        <td className="center">
                            {/* eslint-disable-next-line */}
                            <a href="#"> Rajesh </a>
                        </td>
                        <td className="center">12/05/2016</td>
                        <td className="center">10:45</td>
                        <td className="center">
                            <div>
                                <i className="fa fa-circle green"></i>
                                <span className="txtOnline">Prente</span>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default Absence;
