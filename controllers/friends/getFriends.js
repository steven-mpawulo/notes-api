const User = require('../models/User');
const getFriends = async (req, res) => {
	const userId = req.params.userId;
	console.log(userId);

	if (userId !== undefined) {
		await User.findById({'_id': userId}).then(async (user) => {
			console.log(user);
			if (user) {
				const friends = user.friends;
				console.log(friends);
				const friendDetails = [];
				friends.forEach(async (friend) => {
					await User.findById({'_id': friend._id}).then((friendInfo) => {
						console.log(friendInfo);
						friendDetails.push(friendInfo);
						res.status(200).json({"message": "friends", friendDetails});
					}).catch((e) => {
						console.log(e);
						res.status(400).json({"message": "something went wrong", "error": e.message});
					});
				});
			} else {
				res.status(400).json({"message": "no user found"});
			}
		}).catch((e) => {
			console.log(e);
			res.status(400).json({"message": "something went wrong", "error": e.message});
		});
	} else {
		res.status(400).json({"message": "please provide a valid user Id"});
	}
}

module.exports = getFriends;