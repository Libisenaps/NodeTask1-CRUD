
const mongoose = require('mongoose');

const StudentSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Please enter your name"]
        },
        age: {
            type: Number,
            required: true
        },
        roll_number: {
            type: String,
            required: true,
            unique: true
        },
        department: {
            type: String,
            required: true
        },
        year_of_study: {
            type: Number,
            required: true
        }
    },
    {
        timestamps: true
    }
);

const Student = mongoose.model("Students", StudentSchema);

module.exports = Student;
