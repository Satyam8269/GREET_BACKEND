const User = require("../model/name.model");

const greetingHandler = async (req, res) => {
    const name = req.query.name;
    try {
        if(!name) {
            return res.status(400).json({error: "Name is required!!🤯"});
        }

        const message = `Hello, ${name}! Welcome to Younglabs!!😊`;

        const newUser = new User({name, message});
        const savedUser = await newUser.save();

        res.json({ message });
    }catch(err) {
        res.status(500).json({message: "not creating any greeting"});
    }
}

module.exports = greetingHandler;