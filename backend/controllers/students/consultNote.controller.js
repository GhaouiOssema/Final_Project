const Note = require("./../../models/note");

module.exports = {
    async GetNote(req, res) {
        try {
            const data = await Note.find({
                student: res.decoded.id,
            })
                .populate("subject", "subject")
                .populate("student", "firstName lastName -_id");

            res.status(200).json({ status: true, data });
        } catch (err) {
            console.log(err);
            res.status(500).json({ status: false, message: err });
        }
    },
};
