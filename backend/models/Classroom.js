const mongoose = require("mongoose");

const classRoom = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
});

module.exports = mongoose.model("classrooms", classRoom);
