const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    email: {
        type: String,
        required: [true, "please provide email"],
        unique: true,
    },
    firstName: {
        type: String,
        required: [true, "please provide first name"]
    },
    lastName: {
        type: String,
        required: [true, "please provide last name"],
    },
    password: {
        type: String,
        required: [true, "please provide password"]
    }
});

module.exports = mongoose.model('notesUser', userSchema);