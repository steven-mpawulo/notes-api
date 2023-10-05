const Note = require("../../models/Note");

const updateNote = async (req, res) => {
    const { status } = req.body;
    const userId = req.params.userId;
    console.log(userId);
    const noteId = req.params.noteId;
    console.log(noteId);

    if (userId !== undefined && noteId !== undefined) {
        if (status) {
            await User.findById({ '_id': userId }).then(async (user) => {
                if (user) {
                    await Note.findByIdAndUpdate({ '_id': noteId }, { $set: { "status": status } }, { new: true }).then((note) => {
                        console.log(note);
                        if (note) {
                            res.status(201).json({ "message": "note updated successfully", note });
                        } else {
                            res.status(400).json({ "message": "failed to update note" });
                        }
                    }).catch((e) => {
                        console.log(e);
                        res.status(400).json({ "message": "something went wrong", "error": e.message });
                    });
                } else {
                    res.status(400).json({ "message": "no user found" });
                }
            }).catch((e) => {
                console.log(e);
                res.status(400).json({ "message": "something went wrong", "error": e.message });
            });
        } else {
            res.status(400).json({ "message": "please provide note status" });
        }

    } else {
        res.status(400).json({ "message": "please provide valid user and note Id" });
    }

}

module.exports = updateNote;