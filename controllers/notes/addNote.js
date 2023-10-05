const Note = require('../../models/Note')
const addNote = async (req, res) => {
    const userId = req.params.userId;
    console.log(userId);
    const {content, status} = req.body;
    console.log(`content: ${content}, status: ${status}`);

    if (userId !== undefined) {
        await User.findById({}).then((user) => {
            console.log(user);
            if (user) {

            } else {
                res.status(400).json({"message": "no user found"});
            }
        }).catch((e) => {

        });
        
    } else {
        res.status(400).json({"message": "please provide a valid user Id"});
    }
}