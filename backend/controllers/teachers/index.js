module.exports = {
    register: require("./register.controller"),
    getClassroom: require("./consultClassroom.controller"),
    situation: require("./addStudentSituation.controller"),
    score: require("./addStudentScore.controller"),
    updateProfile: require("./updateProfile.controller"),
    addExamDate: require("./addExamDate.controller"),
    ImportStudent: require("./GetStudents.controller"),
    EditSituation: require("./EditSituation.controller"),
    GetExamDate: require("./GetExamDate.controller"),
    GetStudentsSituation: require("./GetStudentsSituation.controller"),
    getProfile: require("./consultTeacherProfile.controller"),
    EditExam: require("./EditExam.controller"),
    deleteExam: require("./DeleteExam.controller"),
};
