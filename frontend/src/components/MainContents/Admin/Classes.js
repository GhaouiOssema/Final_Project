import { useState, useEffect } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import axios from "axios";
import Loader from "react-loader-spinner";
import "./Classes.css";
const Classes = ({ toggle }) => {
    //Hooks For All Classes List
    const [studentsclass, setStudentsClass] = useState([]);

    const [newClass, setNewClass] = useState();
    const [show, setShow] = useState(false);

    // Function Axios Get All Classes
    /************************************/
    const getAllClass = async () => {
        const Classes = await axios.get(
            "http://localhost:5000/administration/GetAllClass"
        );
        setStudentsClass(Classes.data.data);
    };
    /*************************************/

    // UseEffect for Get Classes
    /*******************/
    useEffect(() => {
        getAllClass();
    }, []);
    /*******************/
    const getValue = (e) => {
        const class_id = e.currentTarget.value;
        setStudentsClass(
            studentsclass.filter(
                (studentclass) => studentclass._id !== class_id
            )
        );
        axios
            .delete(`http://localhost:5000/administration/Class/${class_id}`)
            .then((res) => {
                console.log(res.data);
            })
            .catch((err) => {
                console.log("Error form Delete Class", err);
            });
    };
    //Map All Classes
    //***********************************************/
    const Affichage = studentsclass.map((classe) => {
        return (
            <button id="class-btn" value={classe._id} onClick={getValue}>
                <span>{classe.name}</span>
            </button>
        );
    });
    //***********************************************/
    console.log(studentsclass);

    // Modal & Create Class Settings
    //****************************************/
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    // Submit => Create New class
    const handleSubmit = (e) => {
        e.preventDefault();
        setStudentsClass([...studentsclass, newClass]);
        axios
            .post("http://localhost:5000/administration/createclass", {
                name: newClass.name,
            })
            .then((res) => {
                console.log("Status: ", res.status);
                console.log("Data: ", res.data);
            })
            .catch((err) => {
                console.log("Error in Create Class!", err);
            });

        setShow(false);
    };
    //****************************************/
    const [appear, setAppear] = useState(true);
    setTimeout(() => {
        setAppear(false);
    }, 9000);
    return (
        <div className={toggle ? "admin-class" : "admin-class-closed"}>
            {studentsclass.length > 0 ? (
                <>
                    <Button variant="primary" onClick={handleShow}>
                        Create New Class
                    </Button>
                    <div className="classes">
                        {studentsclass.length === 0 ? (
                            <div className="Class-content">
                                <h1 className="no-class">
                                    You Don't Have Any Class Yet ...
                                </h1>
                                <i className="far fa-thumbs-up"></i>
                            </div>
                        ) : (
                            <div
                                className="affichage-class"
                                title="Click To Delete"
                            >
                                {Affichage}
                            </div>
                        )}

                        <Modal show={show} onHide={handleClose}>
                            <Modal.Header closeButton>
                                <Modal.Title>Create Class</Modal.Title>
                            </Modal.Header>

                            <Form.Control
                                style={{ margin: "20px 0 20px 0px" }}
                                type="text"
                                name="name"
                                placeholder="Enter Name of Class .. "
                                onChange={(e) =>
                                    setNewClass({
                                        [e.target.name]: e.target.value,
                                    })
                                }
                            />
                            <Modal.Footer>
                                <Button
                                    variant="primary"
                                    onClick={handleSubmit}
                                >
                                    Submit
                                </Button>
                            </Modal.Footer>
                        </Modal>
                    </div>{" "}
                </>
            ) : appear ? (
                <div className="loader-admin-class">
                    <Loader
                        type="ThreeDots"
                        color="#00BFFF"
                        height={150}
                        width={150}
                    />
                </div>
            ) : (
                <>
                    <Button
                        className="btn-create-class"
                        variant="primary"
                        onClick={handleShow}
                    >
                        Create New Class
                    </Button>
                    <div className="classes">
                        {studentsclass.length === 0 ? (
                            <div className="Class-content">
                                <h1 className="no-class">
                                    You Don't Have Any Class Yet ...
                                </h1>
                                <i className="far fa-thumbs-up"></i>
                            </div>
                        ) : (
                            <div
                                className="affichage-class"
                                title="Click To Delete"
                            >
                                {Affichage}
                            </div>
                        )}

                        <Modal show={show} onHide={handleClose}>
                            <Modal.Header closeButton>
                                <Modal.Title>Create Class</Modal.Title>
                            </Modal.Header>

                            <Form.Control
                                style={{
                                    margin: "20px 0 20px 0px",
                                    width: "90%",
                                }}
                                type="text"
                                name="name"
                                placeholder="Enter Name of Class .. "
                                onChange={(e) =>
                                    setNewClass({
                                        [e.target.name]: e.target.value,
                                    })
                                }
                            />
                            <Modal.Footer>
                                <Button
                                    variant="primary"
                                    onClick={handleSubmit}
                                >
                                    Submit
                                </Button>
                            </Modal.Footer>
                        </Modal>
                    </div>
                </>
            )}
        </div>
    );
};

export default Classes;
