import { GET_EXAMS } from "../constants/actions-types";
import axios from "axios";

export const getExams = (id) => (dispatch) => {
    axios
        .get(`http://localhost:5000/teacher/getExamsDate/${id}`)
        .then((response) =>
            dispatch({ type: GET_EXAMS, payload: response.data })
        )
        .catch((err) => console.log(err));
};
export const addExam = (payload) => (dispatch) => {
    axios
        .post("http://localhost:5000/teacher/addExamDate", payload.newExam)
        .then(() => dispatch(getExams(payload.id)))
        .catch((err) => console.log(err));
};

export const editExam = (payload) => (dispatch) => {
    axios
        .put(`http://localhost:5000/teacher/editExam/${payload.selectId}`, {
            from: payload.newEdit,
        })
        .then((res) => {
            dispatch(getExams(payload.id));
            console.log("message", res.message);
            console.log("data", res.data);
        })
        .catch((err) => console.log(err));
};

export const deleteExam = (payload) => (dispatch) => {
    axios
        .delete(`http://localhost:5000/teacher/deleteExam/${payload.selectId}`)
        .then((res) => {
            dispatch(getExams(payload.id));
            console.log("status", res.status);
            console.log("data", res.data);
        })
        .catch((err) => {
            console.log(err);
        });
};
