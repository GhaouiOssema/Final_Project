import Calendar from "react-awesome-calendar";

const Exam = () => {
    const events = [
        {
            id: 1,
            color: "#fd3153",
            from: "2021-08-02T18:00:00+00:00",
            to: "2021-08-05T19:00:00+00:00",
            title: "This is an event",
        },
    ];
    return (
        <div className="calendar">
            <Calendar events={events} />
        </div>
    );
};

export default Exam;
