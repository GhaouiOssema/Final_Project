const router = require("express").Router();
const controllers = require("../controllers");
const { verifyToken } = require("../middleware/verifyToken");

// image uploader ( Single )
/**
 * @route POST / uploadimage
 * @description upload the user profile image
 * @access private
 */
router.post("/profile/", verifyToken, controllers.imageUploader.upload);
// login
/**
 * @route GET /login
 * @description Logs in a user
 * @access public
 */
router.get("/login", controllers.login.login);

// Admin APIs
/**
 * @route POST /administration/createclass
 * @description Create a new Class
 * @access private
 */
router.post(
    "/administration/createclass",
    controllers.admin.createClass.AddClass
);

/**
 * @route PUT /administration/addClass
 * @description Add Class To Teacher
 * @access private
 */
router.put(
    "/administration/addClass/:id",
    controllers.admin.updateClassTeacher.AddClassToTeacher
);

/**
 * @route PUT /administration/updateClass
 * @description Add Class To Student
 * @access private
 */
router.put(
    "/administration/updateClass/:id",
    controllers.admin.updateClassStudent.AddClassToStudents
);
/**
 * @route GET /administation/AllStudents
 * @description Get All Students from database
 * @access private
 */
router.get(
    "/administation/AllStudents",
    controllers.admin.ImportAllStudents.GetAllStudents
);
/**
 * @route GET /administation/AllTeachers
 * @description Get All Teachers from database
 * @access private
 */
router.get(
    "/administation/AllTeachers",
    controllers.admin.ImportAllTeachers.GetAllTeachers
);

/**
 * @route PUT /administration/updateStudent
 * @description update students information
 * @access private
 */
router.put(
    "/administration/updateS/:id",
    controllers.admin.updateStudentInfo.UpdateInfo
);

/**
 * @route DELETE /administation/deleteStudent/:id
 * @description Delete Student from database
 * @access private
 */
router.delete(
    "/administation/deleteStudent/:id",
    controllers.admin.DeleteStudent.DeleteStudent
);
/**
 * @route DELETE /administation/deleteTeacher/:id
 * @description Delete Teacher from database
 * @access private
 */
router.delete(
    "/administation/deleteTeacher/:id",
    controllers.admin.DeleteTeacher.DeleteTeacher
);
/**
 * @route GET /administration/GetAllExamsScore
 * @description Import All Students Exams Score
 * @access private
 */
router.get(
    "/administration/GetAllExamsScore",
    controllers.admin.ImportAllExamScore.GetExamsScore
);
/**
 * @route GET /administration/GetAllExamsDate
 * @description Import All Students Exams Date
 * @access private
 */
router.get(
    "/administration/GetAllExamsDate",
    controllers.admin.ImportExamsDate.GetAllExamDate
);

/**
 * @route GET /administration/GetAllSituation
 * @description Import All Students Situation
 * @access private
 */

router.get(
    "/administration/GetAllSituation",
    controllers.admin.ImportSituations.GetSituation
);

/**
 * @route GET /administration/GetAllClass
 * @description Import All class
 * @access private
 */

router.get(
    "/administration/GetAllClass",
    controllers.admin.ImportAllClass.GetAllClassroom
);
/**
 * @route DELETE /administration/Class/:id
 * @description DELETE Class
 * @access private
 */

router.delete(
    "/administration/Class/:id",
    controllers.admin.DeleteClass.DeleteClass
);
/**
 * @route PUT  /administration/editClass/:id
 * @description Edit Class
 * @access private
 */
router.put(
    "/administration/editClass/:id",
    controllers.admin.EditClass.EditClass
);
// STUDENTS  APIs
/**
 * @route POST /student/register
 * @description Create a new Student
 * @access public
 */
router.post("/student/register", controllers.students.register.CreateStudents);

/**
 * @route GET /student/profile
 * @description Consult Student Profile
 * @access private
 */
router.get(
    "/student/profile/:id",
    // verifyToken,
    controllers.students.consultProfile.profile
);
/**
 * @route GET /student/absence
 * @description Consult Student absence
 * @access private
 */

router.get(
    "/student/absence/:id",
    // verifyToken,
    controllers.students.consultAbsence.Absence
);
/**
 * @route GET /student/note
 * @description Consult Student note
 * @access private
 */
router.get(
    "/student/note/:id",
    // verifyToken,
    controllers.students.consultNote.GetNote
);
/**
 * @route GET /student/getExamDate
 * @description Consult exam date
 * @access private
 */
router.get(
    "/student/getExamDate",
    verifyToken,
    controllers.students.consultExamDate.getExamDate
);
// TEACHERS APIs
/**
 * @route POST /teacher/register
 * @description Create a new Teacher
 * @access private
 */
router.post("/teacher/register", controllers.teachers.register.CreateTeacher);

/**
 * @route GET /teacher/getClass
 * @description Get class that teacher teaches
 * @access private
 */

router.get(
    "/teacher/getClass",
    verifyToken,
    controllers.teachers.getClassroom.getClassroom
);

/**
 * @route GET /teacher/getStudents
 * @description Import Students Name
 * @access private
 */

router.get(
    "/teacher/getStudents",
    verifyToken,
    controllers.teachers.ImportStudent.GetStudents
);

/**
 * @route post /teacher/addSituation
 * @description Add students situation
 * @access private
 */
router.post(
    "/teacher/addSituation",
    verifyToken,
    controllers.teachers.situation.AddSituation
);
/**
 * @route post /teacher/addscore
 * @description Add students Score
 * @access private
 */
router.post("/teacher/addscore", verifyToken, controllers.teachers.score.Score);
/**
 * @route PUT /teacher/profile/update
 * @description update teacher profile
 * @access private
 */
router.put(
    "/teacher/profile/update",
    verifyToken,
    controllers.teachers.updateProfile.Update
);

/**
 * @route POST /teacher/addExamDate
 * @description add date exam
 * @access public
 */
router.post(
    "/teacher/addExamDate",
    verifyToken,
    controllers.teachers.addExamDate.addExDate
);

/**
 * @route PUT /teacher/EditSituation
 * @description Edit Students Situation
 * @access public
 */
router.put(
    "/teacher/EditSituation/:id",
    verifyToken,
    controllers.teachers.EditSituation.EditSituation
);
// *********

module.exports = router;
