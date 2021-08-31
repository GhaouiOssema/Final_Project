const Teacher = require("../../models/Teachers");

module.exports = {
    async GetTeacherInfo(req, res) {
        const { id } = res.decoded.id;
        const Info = await Teacher.findById({ id });
        res.status(200).json({ status: true, data: Info });
        try {
        } catch (err) {
            res.status(500).json({ status: false, message: err });
            process.exit(1);
        }
    },
};
