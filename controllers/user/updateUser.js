const User = require("../../models/User");

const updateUser = async (req, res) => {
    const userId = req.params.userId;
    console.log(userId);
    const { email } = req.body;
    console.log(email);

    if (userId !== undefined) {
        if (email) {
            await User.findByIdAndUpdate({ '_id': userId }, { $set: { "email": email } }, { new: true }).then((user) => {
                console.log(user);
                res.status(201).json({"message": "user updated", user});
            }).catch((e) => {
                console.log(e);
                res.status(400).json({ "message": "something went wrong", "error": e.message });
            });
        } else {
            res.status(400).json({ "message": "please provide a valid email address" });
        }

    } else {
        res.status(400).json({ "message": "please provide valid user Id" });
    }
}

module.exports = updateUser;