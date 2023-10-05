const Note = require('../../models/Note');
const User = require('../../models/User');
const addNote = async (req, res) => {
    const userId = req.params.userId;
    console.log(userId);
    const { content, status } = req.body;
    console.log(`content: ${content}, status: ${status}`);

    if (userId !== undefined) {
        if (content && status) {
            await User.findById({ '_id': userId }).then(async (user) => {
                console.log(user);
                if (user) {
                    const note = new Note({
                        "content": content,
                        "status": status,
                        "owner": user._id
                    });
                    await note.save().then((note) => {
                        console.log(note);
                        if (note) {
                            res.status(201).json({"message": "note saved", "note": note});
                        } else {
                            res.status(400).json({ "message": "failed to save note" });
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
            res.status(400).json({ "message": "please provide note content and status" });
        }

    } else {
        res.status(400).json({ "message": "please provide a valid user Id" });
    }
}

module.exports = addNote;