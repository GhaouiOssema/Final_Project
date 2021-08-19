const Note = require("./../../models/note");

module.exports = {
    async GetNote(req, res) {
        try {
        } catch (err) {
            console.log(err);
            res.status(500).json({ status: false, message: err });
        }
    },
};
