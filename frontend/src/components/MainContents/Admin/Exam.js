import FullCalendar from "@fullcalendar/react"; // must go before plugins
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import Loader from "react-loader-spinner";

import "./Exam.css";
import { useState, useEffect } from "react";
import axios from "axios";
const Exam = ({ toggle }) => {
    const [examDate, setExamDate] = useState([]);
    // Function Axios Get All Exams Date
    /*************************************/
    const getExamsDate = async () => {
        const Exams = await axios.get(
            "http://localhost:5000/administration/GetAllExamsDate"
        );
        setExamDate(Exams.data.data);
    };
    // /*************************************/

    useEffect(() => {
        getExamsDate();
    }, []);

    const events = examDate.map((exam) => {
        const firstName = exam.addedBy.firstName;
        const lastName = exam.addedBy.lastName;
        const subject = exam.addedBy.subject;
        const classroom = exam.classroom;
        const examStart = exam.from;
        const examEnd = exam.to;
        const data = {
            id: 1,
            color: "#fd3153",
            date: examStart,
            to: examEnd,
            title: `Examen ${subject} added By Mr ${firstName} ${lastName} To ${classroom}`,
        };
        return data;
    });

    // const events = [
    //     {
    //         id: 1,
    //         color: "#fd3153",
    //         from: "2021-08-07T18:00:00+00:00",
    //         to: `${examDate[0].to}`,
    //         title: `title :   ${examDate[0].title} ${examDate[0].classroom} ${examDate[0].addedBy.firstName}`,
    //     },
    //     {
    //         id: 2,
    //         color: "#1ccb9e",
    //         from: "2021-08-08T13:00:00+00:00",
    //         to: "2021-08-08T14:01:00+00:00",
    //         title: "This is another event for test",
    //     },
    // ];
    console.log(events);

    return (
        <>
            {examDate.length > 0 ? (
                <div className={toggle ? "calendar" : "calendar close-admin"}>
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
                <div className="loader">
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
