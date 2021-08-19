const Teacher = require("../../models/Teachers");

module.exports = {
    async Update(req, res) {
        try {
            const ID = res.decoded.id;
            const data = await Teacher.findByIdAndUpdate(ID, { ...req.body });
            res.status(200).json({ status: true, data });
        } catch (err) {
            console.log(err);
            res.status(500).json({ status: false, message: err });
        }
    },
};
