const router = require("express").Router();
const controllers = require("../controllers");
const { verifyToken } = require("../middleware/verifyToken");

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
 * @route PUT /administration/updatestudentinformation/:id
 * @description update students information
 * @access private
 */
router.put(
    "/administration/updatestudentinformation/:id",
    controllers.admin.updateStudentInfo.UpdateInfo
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
router.get("/student/profile", controllers.students.consultProfile.profile);
/**
 * @route GET /student/absence
 * @description Consult Student absence
 * @access private
 */

router.get(
    "/student/absence",
    verifyToken,
    controllers.students.consultAbsence.Absence
);
/**
 * @route GET /student/note
 * @description Consult Student note
 * @access private
 */
// router.get("/student/note", controllers.students);
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

router.get("/teacher/getClass", controllers.teachers.getClassroom.getClassroom);

/**
 * @route post /teacher/addSituation
 * @description Add students situation
 * @access private
 */
router.post(
    "/teacher/addSituation",
    controllers.teachers.situation.AddSituation
);
/**
 * @route post /teacher/addscore
 * @description Add students Score
 * @access private
 */
router.post("/teacher/addscore", controllers.teachers.score.Score);
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
 * @route POST /teacher/exam/date
 * @description add date exam
 * @access public
 */
router.post("/teacher/exam/date", controllers.teachers.addExamDate.addExDate);

// *********

module.exports = router;
