const User = require("../../models/User");

const updateUser = async (req, res) => {
    const userId = req.params.userId;
    console.log(userId);
    const { email } = req.body;
    console.log(email);

    if (userId !== undefined) {
        if (email) {

        } else {
            res.status(400).json({"message": "please provide a valid email address"});
        }
        await User.findByIdAndUpdate({'_id': userId }, {$set: {"email": email}}, {new: true}).then((user) => {
            console.log(user);
        }).catch((e) => {
            console.log(e);
            res.status(400).json({"message": "something went wrong", "error": e.message});
        } );
    } else {
        res.status(400).json({"message": "please provide valid user Id"});
    }
}

module.exports = updateUser;