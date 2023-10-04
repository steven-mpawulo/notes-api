const User = require("../../models/User");

const resetPassword = async (req, res) => {
    const {email} = req.body;
    console.log(email);
    
    if (email) {
        await User.findOne({'email': email}).then((user) => {
            console.log(user);
            if (user) {
                // send email from here
                const link = `http://localhost:6000/api/v1/auth/password/update?email=${user.email}`;
            res.status(200).json({"message": "reset password", "link": link});
            } else {
                res.status(400).json({"message": "user not found"});
            }
        }).catch((e) => {
            console.log(e);
            res.status(400).json({"message": "something went wrong", "error": e.message});
        });
    } else {
        res.status(400).json({"message": "please provide an email address"});
    }
}

module.exports = resetPassword;