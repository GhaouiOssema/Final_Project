const Situation = require("../../models/Situation");

module.exports = {
    async AddSituation(req, res) {
        try {
            const { student, addedBy, date, situation } = req.body;
            const student_situation = await Situation.create({
                student,
                addedBy,
                date,
                situation,
            });
            res.status(201).json({
                status: true,
                message: "Situation added succefully",
                data: student_situation,
            });
        } catch (err) {
            console.log(err);
            res.status(500).json({ status: false, message: err });
        }
    },
};
