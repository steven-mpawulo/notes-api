const mongoose = require('mongoose');

const noteSchema = mongoose.Schema({
    content: {
        type: String,
        required: [true, "please provide note content"]
    },
    status: {
        type: String,
        required: [true, "please provide note status"]
    },
    owner: {
        type: mongoose.Types.ObjectId,
        ref: 'noteUser',
        required: [true, "please provide owner Id"]
    },
    createdAt: {
        type: Date,
        default: Date.now(),
    }
}, {timestamps: true});

module.exports = mongoose.model('note', noteSchema);