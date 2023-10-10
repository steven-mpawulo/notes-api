const getFriend = async (req, res) => {
    const userId = req.params.userId;
    console.log(userId);
    const friendId = req.params.friendId;
    console.log(friendId);

    if (userId !== undefined && friendId !== undefined) {
        await User.findById({ '_id': userId }).then((user) => {
            console.log(user);

            if (user) {
                const friends = user.friends;
                const friend = friends.filter((friend) => {
                    return friendId === friend._id;
                });
                console.log(friend[0]);
                if (friend[0]) {
                    res.status(200).json({ "message": "friend retreived", friend });
                } else {
                    res.status(400).json({ "message": "no friend found" });
                }

            } else {
                res.status(400).json({ "message": "no user found" });
            }
        }).catch((e) => {
            console.log(e);
            res.status(400).json({ "message": "something went wrong", "error": e.message });
        });
    } else {
        res.status(400).json({ "message": "please provide valid userId" });
    }
}

module.exports = getFriend;