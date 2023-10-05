const Note = require("../../models/Note");

const getNotes = async (req, res) => {
    const userId = req.params.userId;
    console.log(userId);

    if (userId !== undefined) {
        User.findById({}).then((user) => {

        }).catch((e) => {
            console.log(e);
            res.status(400).json({"message": "something went wrong", "error": e.message});
        });
        await Note.find({'owner': userId});
    } else {
        res.status(400).json({"message": "please provide a valid user Id"});
    }
}

module.exports = getNotes;