import "./ExamsDate.css";

// import Calendar from "react-calendar";
import FullCalendar from "@fullcalendar/react"; // must go before plugins
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";

import { Form, Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import axios from "axios";

const ExamsDate = () => {
    const events = [];

    const [condition, setCondition] = useState(true);

    // axios function for creating the date of exams
    const CreateExam = async () => {
        axios.post("http://localhost:5000//teacher/addExamDate");
    };

    // sendding data from the form todata base
    const handleSave = (e) => {
        const title = document.getElementById("TITLE").value;
        const classroom = document.getElementById("CLASSROOM").value;
        const from = document.getElementById("FROM").value;
        const to = document.getElementById("TO").value;
    };
    // useEffect(()=> , [handleSave])

    return (
        <>
            <div className="exams-page-content">
                <h1>Create Exams Date</h1>
                <div className="page-container">
                    <div className="page-header-left">
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
                    <div className="page-header-rigth">
                        <span>Fixed Exams Date</span>
                        <Form>
                            <Form.Group className="mb-3">
                                <Form.Label className="text-field">
                                    Title :
                                </Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter Title"
                                    className="someBorder"
                                    id="TITLE"
                                />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label className="text-field">
                                    classroom :
                                </Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter classroom"
                                    className="someBorder"
                                    id="CLASSROOM"
                                />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label className="text-field">
                                    From :
                                </Form.Label>
                                <Form.Control type="datetime-local" id="FROM" />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label className="text-field">
                                    To :
                                </Form.Label>
                                <Form.Control type="datetime-local" id="TO" />
                            </Form.Group>
                            <button
                                type="submit"
                                className="BTNmargin"
                                onClick={handleSave}>
                                Submit
                            </button>
                        </Form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ExamsDate;
