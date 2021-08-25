import React from "react";
import "./Note.css";

const Note = () => {
    return (
        <div className="Score">
            <h1 className="header">Your Exams Score </h1>
            <ScoreTable />
        </div>
    );
};

const ScoreTable = () => {
    return (
        <div className="col-sm-11">
            <div className="card">
                <table className="table-bordered">
                    <thead>
                        <tr>
                            <th className="table-head">Subject</th>
                            <th className="table-head">Teacher</th>
                            <th className="table-head">Score </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="table-body">Math</td>
                            <td className="table-body">teacher name </td>
                            <td className="table-body">16.5</td>
                        </tr>{" "}
                        <tr>
                            <td className="table-body">Math</td>
                            <td className="table-body">teacher name </td>
                            <td className="table-body">16.5</td>
                        </tr>{" "}
                        <tr>
                            <td className="table-body">Math</td>
                            <td className="table-body">teacher name </td>
                            <td className="table-body">16.5</td>
                        </tr>{" "}
                        <tr>
                            <td className="table-body">Math</td>
                            <td className="table-body">teacher name </td>
                            <td className="table-body">16.5</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Note;
