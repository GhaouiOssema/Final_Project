import axios from "axios";
import { token } from "morgan";
import React, { useState, useEffect } from "react";
import jwt from "jwt-decode";
import Loader from "react-loader-spinner";

import "./Note.css";

const Note = ({ toggle }) => {
    // hooks for Student note
    const [allNotes, setAllNotes] = useState({ Note: [] });

    // hook for appearing data
    const [appear, setAppear] = useState(true);

    setTimeout(() => {
        setAppear(false);
    }, 10000);

    // get th student id from the localStorage
    const TOKEN = localStorage.getItem("JWT");
    const id = jwt(TOKEN).id;

    // function for getting the student absences
    const GetExamsNote = async () => {
        try {
            const StudentNote = await axios.get(
                `http://localhost:5000/student/note/${id}`
            );
            setAllNotes({ Note: StudentNote.data.data });
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
            {allNotes.Note.length > 0 ? (
                <div className="Score">
                    <div
                        className={
                            toggle ? "exams-container" : "Exams-class-closed"
                        }>
                        <div
                            className={
                                toggle
                                    ? "col-sm-15 full-Width"
                                    : "full-closed-Width"
                            }>
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
                                            Score
                                        </th>
                                    </tr>
                                </thead>
                                {/* map function */}
                                <tbody className="exmas-t-body ">{table}</tbody>
                            </table>
                        </div>
                    </div>
                </div>
            ) : appear ? (
                <div className="dash__loader">
                    <Loader
                        type="ThreeDots"
                        color="#00BFFF"
                        height={150}
                        width={150}
                    />
                </div>
            ) : (
                <>
                    <h1 className="note-no-absente">
                        You Don't Have Any Exma Score
                    </h1>
                </>
            )}
        </>
    );
};

export default Note;
