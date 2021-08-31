// import Calendar from "react-awesome-calendar";
import "./Exam.css";

import FullCalendar from "@fullcalendar/react"; // must go before plugins
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";

const Exam = () => {
    // calendar events
    const events = [];

    return (
        <div className="students-exams">
            <div className="page-header-left">
                <FullCalendar
                    plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                    headerToolbar={{
                        left: "prev,next today",
                        center: "title",
                        right: "dayGridMonth,timeGridDay",
                    }}
                    initialView="dayGridMonth"
                    events={events}
                />
            </div>
        </div>
    );
};

export default Exam;
