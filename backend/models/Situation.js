const mongoose = require("mongoose");

const SituationSchema = new mongoose.Schema({
    student: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "student",
    },
    addedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "teacher",
    },
    subject: {
        type: mongoose.Schema.Types.String,
        ref: "teacher",
    },
    date: {
        type: String,
        required: true,
    },
    situation: {
        type: String,
        required: true,
    },
});

module.exports = mongoose.model("situation", SituationSchema);
