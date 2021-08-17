const router = require("express").Router();
const controllers = require("../controllers");

<<<<<<< HEAD
=======
// login
/**
 * @route POST /login
 * @description Logs in a user
 * @access public
 */

>>>>>>> af6748ee0d4b61024b4190447f9f073d6ddc7ad0
// Admin APIs
/**
 * @route POST /administration/createroom
 * @description Create a new Class
 * @access private
 */
router.post(
    "/administration/createroom",
    controllers.admin.createClass.AddClass
);

/**
 * @route POST /administration/addClass
 * @description Add Class To Teacher
 * @access private
 */
router.put(
    "/administration/addClass/:id",
    controllers.admin.updateClassTeacher.AddClassToTeacher
);

router.get("/login", controllers.login.login);

// STUDENTS  APIs
/**
 * @route POST /student/register
 * @description Create a new Student
 * @access public
 */
router.post("/student/register", controllers.students.register.CreateStudents);
router.get("/student/profile", controllers.students.consultProfile.profile);

// TEACHERS APIs
/**
 * @route POST /teacher/register
 * @description Create a new Teacher
 * @access public
 */
router.post("/teacher/register", controllers.teachers.register.CreateTeacher);

module.exports = router;
