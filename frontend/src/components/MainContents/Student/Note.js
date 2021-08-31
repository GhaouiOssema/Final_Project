import axios from "axios";
import React, { useState, useEffect } from "react";
import "./Note.css";

const Note = () => {
    // hooks for Student note
    const [allNotes, setAllNotes] = useState({ Note: [] });

    // useEffect with axios function for getting Student Note
    // *** Start ***
    useEffect(async () => {
        axios
            .get("http://localhost:5000/student/note/6127dd263128082be824348c")
            .then((res) => {
                setAllNotes({ Note: res.data.data });
            })
            .catch((err) => console.log(err));
    }, []);
    // ***End***

    // map the tbody from data base
    // ***Start***
    const table = allNotes.Note.map((Note, i) => {
        const Student = Note.student.firstName;
        const Subject = Note.subject.subject;
        const Score = Note.note;
        return (
            <tr key={i}>
                <td className="table-body">{Student} </td>
                <td className="table-body">{Subject}</td>
                <td className="table-body">{Score}</td>
            </tr>
        );
    });
    // ***End***

    return (
        <div className="Score">
            <h1 className="header">Your Exams Score </h1>
            <div className="exams-container">
                <div className="col-sm-11">
                    <table className="table table-checkable order-column">
                        <thead>
                            <tr>
                                <th className="table-head">Subject</th>
                                <th className="table-head">Teacher</th>
                                <th className="table-head">Score </th>
                            </tr>
                        </thead>
                        {/* map function */}
                        <tbody>{table}</tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Note;
