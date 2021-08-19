const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
    avatar: {
        type: String,
        default:
            "https://res.cloudinary.com/devatchannel/image/upload/v1602752402/avatar/avatar_cugq40.png",
    },
    ref: {
        type: Number,
        required: true,
        unique: true,
    },
    firstName: {
        type: String,
        required: true,
        trim: true,
    },
    lastName: {
        type: String,
        required: true,
        trim: true,
    },
    age: {
        type: Number,
        required: true,
    },
    parentsPhone: {
        type: Number,
        required: true,
        unique: true,
    },
    adress: {
        type: String,
        required: true,
    },
    classRoom: {
        type: String,
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        trim: true,
    },
    role: {
        type: Number,
    },
});

const student = mongoose.model("student", studentSchema);

module.exports = student;
