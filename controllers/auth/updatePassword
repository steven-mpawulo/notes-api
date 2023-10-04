const bcrypt = require('bcrypt');
const User = require('../../models/User');
const updatePassword = async (req, res) => {
    const email = req.query.email;
    console.log(email)
    const { password } = req.body;
    console.log(password);

    if (email && password) {
        await User.findOne({ 'email': email }).then(async (user) => {
            console.log(user);
            const hashedPassword = await bcrypt.hash(password, 10);
            if (user) {
                await User.findByIdAndUpdate({ '_id': user._id }, { $set: { "password": hashedPassword } }, { new: true }).then((updatedUser) => {
                    console.log(updatedUser);
                    res.status(200).json({ "message": "password successfully updated" });
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
        res.status(400).json({ "message": "please provide password" });
    }
}

module.exports = updatePassword;