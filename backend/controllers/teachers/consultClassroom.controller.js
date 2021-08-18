const Classroom = require("../../models/Teachers");

module.exports = {
    async getClassroom(req, res) {
        try {
            const { email } = req.body;
            const teacher_classroom = await Classroom.findOne({ email });
            res.status(200).json({
                status: true,
                data: teacher_classroom.classToStudy,
            });
        } catch (err) {
            console.log(err);
            res.status(500).json({ status: false, message: err });
        }
    },
};