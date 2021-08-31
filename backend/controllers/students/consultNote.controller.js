const Note = require("./../../models/note");

module.exports = {
    async GetNote(req, res) {
        try {
            const { id } = req.params;
            const data = await Note.find({
                student: id,
            })
                .populate("subject", "subject")
                .populate("student", "firstName lastName ");

            res.status(200).json({ status: true, data });
        } catch (err) {
            console.log(err);
            res.status(500).json({ status: false, message: err });
        }
    },
};
