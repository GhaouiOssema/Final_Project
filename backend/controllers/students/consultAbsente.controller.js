const Student = require("../../models/Students");
const Situation = require("../../models/Situation");

module.exports = {
    async Absence(req, res) {
        try {
            const { email } = req.body;
            const user = await Student.findOne({ email });
            console.log(user);
            const data = await Situation.find({ student: user._id });
            console.log(data);
            res.status(200).json({ status: true, data: data });
        } catch (err) {
            console.log(err);
            res.status(500).json({ status: false, message: err });
        }
    },
};
