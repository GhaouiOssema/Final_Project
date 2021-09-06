import axios from "axios";
import { token } from "morgan";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import jwt from "jwt-decode";

import "./Note.css";

const Note = () => {
    // hooks for Student note
    const [allNotes, setAllNotes] = useState({ Note: [] });

    // get th student id from the localStorage
    const TOKEN = localStorage.getItem("JWT");
    const id = jwt(TOKEN).id;

    // function for getting the student absences
    const GetExamsNote = async () => {
        try {
            await axios
                .get(`http://localhost:5000/student/note/${id}`)
                .then((res) => {
                    setAllNotes({ Note: res.data.data });
                })
                .catch((err) => {
                    console.log(err);
                });
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        GetExamsNote();
    }, []);

    console.log(allNotes);
    // ***End***

    // map the tbody from data base
    // ***Start***
    const table = allNotes.Note.map((el, i) => {
        const Teacher = `${el.subject.firstName} ${el.subject.lastName} `;
        const Subject = el.subject.subject;
        const Score = el.note;
        const Avatar = el.subject.avatar;
        return (
            <tr key={i}>
                <td className="centerImg">
                    <img src={Avatar} width="30" className="profImg" />
                </td>
                <td className="exams-table-body">
                    <span className="EX-center-field">{Teacher}</span>
                </td>
                <td className="exams-table-body">
                    <span className="EX-center-field">{Subject}</span>
                </td>
                <td className="exams-table-body">
                    <span className="EX-center-field"> {Score}</span>
                </td>
            </tr>
        );
    });
    // ***End***

    return (
        <>
            <div className="Score">
                <div className="exams-container">
                    <div className="col-sm-16">
                        {allNotes.Note.length !== "" ? (
                            <table
                                className="table table-checkable order-column"
                                style={{ width: "100%" }}>
                                <thead>
                                    <tr>
                                        <th className="exams-table-head">
                                            Avatar
                                        </th>
                                        <th className="exams-table-head">
                                            Teacher
                                        </th>
                                        <th className="exams-table-head">
                                            Subject
                                        </th>
                                        <th className="exams-table-head">
                                            Score{" "}
                                        </th>
                                    </tr>
                                </thead>
                                {/* map function */}
                                <tbody className="exmas-t-body ">{table}</tbody>
                            </table>
                        ) : (
                            <div>
                                <h1>ss</h1>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Note;
