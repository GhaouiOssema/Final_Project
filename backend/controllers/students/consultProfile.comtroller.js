const Student = require("../../models/Students");

module.exports = {
    async profile(req, res) {
        try {
            const { email } = req.body;
            const Profile = await Student.findOne({ email });
            res.status(200).json({ status: true, data: Profile });
        } catch (err) {
            console.log(err);
            res.status(500).json({ status: false, message: err });
        }
    },
};
