import React from "react";
import Calendar from "react-awesome-calendar";
import "./Exam.css";

const Exam = () => {
    const events = [];

    return (
        <div className="calendar">
            <Calendar events={events} />
        </div>
    );
};

export default Exam;
