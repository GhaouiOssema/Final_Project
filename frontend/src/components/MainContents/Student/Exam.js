import Calendar from "react-awesome-calendar";
import "./Exam.css";

const Exam = () => {
    // calendar events
    const events = [];

    return (
        <div className="calendar">
            {/* calendadr component form react-awesome-calendar */}
            <Calendar events={events} />
        </div>
    );
};

export default Exam;
