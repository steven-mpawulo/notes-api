const mongoose = require('mongoose');
const User = require('../models/User');

const addFriend = (req, res) => {
	const userId = req.params.userId;
	console.log(userId);
	const friendId = req.params.friendId;
	console.log(friendId);

	await User.findById({'_id': friendId}).then((friend) => {
		if (friend) {
			await User.findByIdAndUpdate({'_id': userId}, {$addToSet: {"friends": friend._id}}, {new: true}).then((user) => {
		if (user) {
			await User.findByIdAndUpdate({'_id': friendId}, {$addToSet: {"friends": user._id}}, {new: true}).then((updatedFriend) => {
				console.log(updatedFriend);
				res.status(200).json({"message": "friend added", user, updatedFriend});
			}).catch((e) => {
				console.log(e);
				res.status(400).json({"message": "something went wrong", "error": e.message});
			});
			
		} else {
			res.status(400).json({"message": "failed to add friend"});
		}
	}).catch((e) => {
		console.log(e);
		res.status(400).json({"message": "something went wrong", "error": e.message});
	});
		} else {
			res.status(400).json({"message": "friend doesnt exist"});
		}
	}).catch((e) => {
		console.log(e);
		res.status(400).json({"message": "something went wrong", "error": e.message});
	});
	
}

module.exports = addFriend;