const logout = (req, res, next) => {
    req.logOut(function(err) {
        if (err) {
            next(err);
        }
        res.status(200).json({"message": "user logged out"});
    });
}

module.exports = logout;