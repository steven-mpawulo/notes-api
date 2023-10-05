const Note = require("../../models/Note");
const User = require("../../models/User"); 

const getNotes = async (req, res) => {
    const userId = req.params.userId;
    console.log(userId);

    if (userId !== undefined) {
        User.findById({'_id': userId}).then(async (user) => {
            if (user) {
                await Note.find({'owner': userId}).then((notes) => {
                    if (notes) {
                        res.status(200).json({"message": "notes retreived", "notes": notes});
                    } else {
                        res.status(400).json({"message": "no notes found"});
                    }
                }).catch((e) => {
                    console.log(e);
                    res.status(400).json({"message": "somethig went wrong", "error": e.message});
                });
            } else {
                res.status(400).json({"message": "no user found"})
            }
        }).catch((e) => {
            console.log(e);
            res.status(400).json({"message": "something went wrong", "error": e.message});
        });
        
    } else {
        res.status(400).json({"message": "please provide a valid user Id"});
    }
}

module.exports = getNotes;