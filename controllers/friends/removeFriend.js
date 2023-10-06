const User = require('../models/User');
const removeFriend = (req, res) => {
	const friendId = req.params.friendId;
	console.log(friendId);
	const userId = req.params.userId;
	console.log(userId);

	if (friendId !== undefined && userId !== undefined) {
		await User.findByIdAndUpdate({'_id': userId}, {$pull: {'friends': friendId}}, {new: true}).then((updatedUser) => {
			console.log(updatedUser);
			if (updatedUser) {
				await User.findByIdAndUpdate({'_id': friendId}, {$pull: {'friends': userId}}, {new: true}).then((updatedFriend) => {
					console.log(updatedFriend);
					if (updatedFriend) {
						res.status(200).json({"message": "friend successfully removed", updatedUser, updatedFriend});
					} else {
					res.status(400).json({"message": "failed to remove friend"});	
					}
					
				}).catch((e) => {
					console.log(e);
					res.status(400).json({"message": "something went wrong", "error": e.message});
				});
			} else {
				res.status(400).json({"message": "failed to update user friend list"});
			}
		}).catch((e) => {
			console.log(e);
			res.status(400).json({"message": "something went wrong", "error": e.message});
		});
	} else {
		res.status(400).json({"message": "please provide valid friend and user Id"});
	}
}

module.exports = removeFriend;