const User = require("../../models/User");
const Note = require("../../models/Note");

const deleteNote = async (req, res) => {
    const userId = req.params.userId;
    console.log(userId);

    if (userId !== undefined) {
        await User.findById({'_id': userId}).then(async (user) => {
            console.log(user);
            if (user) {
                await Note.findByIdAndDelete({'_id': user._id}).then((deletedNote) => {
                    console.log(deletedNote);
                    if (deletedNote) {
                        res.status(200).json({"message": "note deleted"});
                    } else {
                        res.status(400).json({"message": "note already deleted"});
                    }
                }).catch((e) => {
                    console.log(e);
                    res.status(400).json({"message": "something went wrong", "error": e.message});
                });
            } else {
                res.status(400).json({"message": "no user found"});
            }
        }).catch((e) => {
            console.log(e);
            res.status(400).json({"message": "something went wrong", "error": e.message});
        });
    } else {
        res.status(400).json({"message": "please provide a valid user Id"});
    }
}

module.exports = deleteNote;