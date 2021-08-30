import React, { useState } from "react";
import "./ExamsDate.css";

// import Calendar from "react-calendar";
import Calendar from "react-awesome-calendar";

import { Form, Button } from "react-bootstrap";

const ExamsDate = () => {
    const events = [];

    const [value, onChange] = useState(new Date());

    return (
        <div className="exams-page-content">
            <h1>Create Exams Date</h1>
            <div className="page-container">
                <div className="page-header-left">
                    <Calendar events={events} className="calandar-left" />
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
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label className="text-field">
                                From :
                            </Form.Label>
                            <Form.Control type="datetime-local" />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label className="text-field">To :</Form.Label>
                            <Form.Control type="datetime-local" />
                        </Form.Group>
                        <button type="submit" className="BTNmargin">
                            Submit
                        </button>
                    </Form>
                </div>
            </div>
        </div>
    );
};

export default ExamsDate;
