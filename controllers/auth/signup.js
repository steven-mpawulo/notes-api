const bcrypt = require('bcrypt');
const User = require('../../models/User');
const signup = async (req, res, next) => {
    const {email, password, firstName, lastName} = req.body;

    if (email && password && firstName && lastName) {
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = new User({
            "email": email,
            "password": hashedPassword,
            "firstName": firstName,
            "lastName": lastName
        });

        await user.save().then((user) => {
            console.log(user);
            if (!user){
                res.status(400).json({"message": "failed to save user"});
                return
            }
            req.login({"username": user.email, "id": user._id},(function (err) {
                if (err) {
                    next(err);
                }
                res.status(201).json({"message": "user created successfully and logged in", "user": req.user});
            }));
            
        }).catch((e) => {
            console.log(e);
            res.status(400).json({"message": "something went wrong", "error": e.message});
        });
    } else {
        res.status(400).json({"message": "please provide required data"})
    }

}

module.exports = signup;