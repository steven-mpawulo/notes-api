const Note = require("../../models/Note");
const User = require("../../models/User");


const getNote = async (req, res) => {
    const userId = req.params.userId;
    console.log(userId);
    const noteId = req.params.noteId;
    console.log(noteId);

    if (userId !== undefined && noteId !== undefined) {
        await User.findById({ '_id': userId }).then(async (user) => {
            if (user) {
                await Note.findById({ '_id': noteId }).then((note) => {
                    console.log(note);
                    res.status(200).json({ "message": "note retreived", "note": note });
                }).catch((e) => {
                    console.log(e);
                    res.status(400).json({ "message": "something went wrong", "error": e.message });
                });
            } else {
                res.status(400).json({ "message": "user not found" });
            }
        }).catch((e) => {
            console.log(e);
            res.status(400).json({ "message": "something went wrong", "error": e.message });
        });
    } else {
        res.status(400).json({ "message": "please provide valid user and note Id" });
    }
}

module.exports = getNote;