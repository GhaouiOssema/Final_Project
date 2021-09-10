// import Calendar from "react-awesome-calendar";
import "./Exam.css";
import { useState, useEffect } from "react";
import jwt from "jwt-decode";
import axios from "axios";
import Loader from "react-loader-spinner";

import FullCalendar from "@fullcalendar/react"; // must go before plugins
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";

const Exam = ({ toggle }) => {
    // hoook for the calendar events
    const [calendarEvents, setCalendarEvent] = useState({ calendar: [] });

    // get the student id from the localStorage
    const TOKEN = localStorage.getItem("JWT");
    const ID = jwt(TOKEN).id;

    // axios function to getting the Exams Date
    const GetStudentExamsDate = async () => {
        try {
            const CALENDAR = await axios.get(
                `http://localhost:5000/student/getExamDate/${ID}`
            );
            setCalendarEvent({ calendar: CALENDAR.data.data });
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        GetStudentExamsDate();
    }, []);

    console.log(calendarEvents);

    // calendar events
    const events = calendarEvents.calendar.map((calendar) => {
        const firstName = calendar.addedBy.firstName;
        const lastName = calendar.addedBy.lastName;
        const subject = calendar.addedBy.subject;
        const classroom = calendar.classRoom;
        const examStart = calendar.from;
        const examEnd = calendar.to;
        const data = {
            id: 1,
            color: "#fd3153",
            date: examStart,
            to: examEnd,
            title: `Examen ${subject} added By Mr ${firstName} ${lastName} To ${classroom}`,
        };
        return data;
    });
    
    console.log(events);

    return (
        <>
            {calendarEvents.calendar.length !== 0 ? (
                <div
                    className={
                        toggle ? "calendar-student" : "calendar-student-close"
                    }>
                    <FullCalendar
                        plugins={[
                            dayGridPlugin,
                            timeGridPlugin,
                            interactionPlugin,
                        ]}
                        headerToolbar={{
                            left: "prev,next today",
                            center: "title",
                            right: "dayGridMonth,timeGridDay",
                        }}
                        initialView="dayGridMonth"
                        events={events}
                    />
                </div>
            ) : (
                <div className="ex__loader">
                    <Loader
                        type="ThreeDots"
                        color="#00BFFF"
                        height={150}
                        width={150}
                    />
                </div>
            )}
        </>
    );
};

export default Exam;
