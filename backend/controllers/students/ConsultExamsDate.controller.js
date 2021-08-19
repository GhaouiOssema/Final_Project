const ExamsDate = require("../../models/ExamsDate");
const Student = require("../../models/Students");
module.exports = {
    async getExamDate(req, res) {
        try {
            let email = res.decoded.email;
            const student = await Student.findOne({ email });
            const classroom = student.classRoom;
            const examdate = await ExamsDate.find({ classroom });
            res.status(201).json({
                status: true,
                message: "Get Exam Date ",
                data: examdate,
            });
        } catch (err) {
            console.log(err);
            res.status(500).json({ status: false, message: err });
        }
    },
};
