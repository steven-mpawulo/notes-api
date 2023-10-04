const login = (req, res) => {
    if (!req.user) {
        res.status(400).json({"message": "user not logged in"});
    }
    res.status(200).json({"message": "user login successful", "user": req.user});
}

module.exports = login;
