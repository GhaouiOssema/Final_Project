const Student = require("../../models/Students");
const Situation = require("../../models/Situation");

module.exports = {
    async Absence(req, res) {
        try {
            const data = await Situation.find({
                student: res.decoded.id,
            });
            res.status(200).json({ status: true, data });
        } catch (err) {
            console.log(err);
            res.status(500).json({ status: false, message: err });
        }
    },
};
