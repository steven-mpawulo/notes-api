const User = require("../../models/User");

const deleteUser = async (req, res) => {
    const userId = req.params.userId;
    console.log(userId);

    if (userId !== undefined) {
        await User.findByIdAndDelete({'_id': userId}).then((deletedUser) => {
            console.log(deletedUser)
            if (deletedUser) {
                res.status(200).json({"message": "user deleted"});
            } else {
                res.status(400).json({"message": "user already deleted"});
            }
        }).catch((e) => {
            console.log(e);
            res.status(400).json({"message": "something went wrong", "error": e.message});
        });
    } else {
        res.status(400).json({"message": "please provide a valid user Id"});
    }
}

module.exports = deleteUser;