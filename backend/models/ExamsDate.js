const mongoose = require("mongoose");

const ExamsDateSchema = new mongoose.Schema({
    addedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "teacher",
    },
    classroom: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "classroom",
    },
    date: {
        type: Date,
        required: true,
    },
});
module.exports = mongoose.model("examdate", ExamsDateSchema);
