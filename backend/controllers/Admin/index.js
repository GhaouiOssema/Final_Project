module.exports = {
    createClass: require("./createClass.controller"),
    updateClassTeacher: require("./AddClassToTeacher.controller"),
    updateClassStudent: require("./AddClassToStudent.controller"),
    updateStudentInfo: require("./UpdateStudentInfo.controller"),
    ImportAllExamScore: require("./GetExamsScore.controller"),
    ImportExamsDate: require("./GetExamsDate.controller"),
    ImportSituations: require("./GetStudentsSituation.controller"),
    ImportAllClass: require("./GetAllClass.controller"),
    DeleteClass: require("./DeleteClass.controller"),
    EditClass: require("./EditClass.controller"),
    DeleteStudent: require("./DeleteStudent.controller"),
    ImportAllStudents: require("./GetAllStudents.controller"),
};
