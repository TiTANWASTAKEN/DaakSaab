const UserModel = require('../Models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();


const signup = async (req, res) => {
    const {name, email, password} = req.body;
    try {
        const user = await UserModel.findOne({email});
        if(user){
            return res.status(409).json({error: 'User already exists'});
        }
        const userModel = new UserModel({name, email, password});
        userModel.password = await bcrypt.hash(password,10);
        await userModel.save();
        res.status(201).json({message: 'User created successfully',
            success: true
        });
    } catch (error) {
        res.status(500).json({
            message :"error haiga "
        })
    }
};

const login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await UserModel.findOne({ email });

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        const isPassEqual = await bcrypt.compare(password, user.password);
        if (!isPassEqual) {
            return res.status(401).json({ message: "Wrong credentials" });
        }

        const token = jwt.sign({ userId: user._id },process.env.JWT_SECRET);

        res.status(200).json({
            message: "Login successful",
            token,
            user: { id: user._id, email: user.email, name: user.name }
        });

    } catch (error) {
        console.error(error); 
        res.status(500).json({ message: "Internal server error" });
    }
};

module.exports = { login };


module.exports = {
    signup,
    login,
}
