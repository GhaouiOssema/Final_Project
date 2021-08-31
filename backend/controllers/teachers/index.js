module.exports = {
    register: require("./register.controller"),
    getClassroom: require("./consultClassroom.controller"),
    situation: require("./addStudentSituation.controller"),
    score: require("./addStudentScore.controller"),
    updateProfile: require("./updateProfile.controller"),
    addExamDate: require("./addExamDate.controller"),
    ImportStudent: require("./GetStudents.controller"),
    EditSituation: require("./EditSituation.controller"),
};
