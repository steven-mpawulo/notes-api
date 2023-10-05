const User = require("../../models/User");

const getUser = async (req, res) => {
    const userId = req.params.userId;
    console.log(userId);

    if (userId !== undefined) {
        await User.findById({'_id': userId}).then((user) => {
            console.log(user);
            if (user) {
                res.status(200).json({"message": "user found", user});
            } else {
                res.status(400).json({"message": "no user found"});
            }
        }).catch((e) => {
            console.log(e);
            res.status(400).json({"message": "something went wrong", "error": e.message});
        });
    } else {
        res.status(400).json({"message": "please provide valid user Id"});
    }
}

module.exports = getUser;