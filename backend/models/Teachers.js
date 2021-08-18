const mongoose = require("mongoose");

const teacherSchema = new mongoose.Schema({
    avatar: {
        type: String,
        default:
            "https://res.cloudinary.com/devatchannel/image/upload/v1602752402/avatar/avatar_cugq40.png",
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
    subject: {
        type: String,
        required: true,
    },
    classToStudy: [
        {
            name: String,
        },
    ],
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

const teacher = mongoose.model("teachers", teacherSchema);

module.exports = teacher;
