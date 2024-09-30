import UserModel from "../model/user.model.js";
import bcrypt from "bcrypt"

export const SignUp = async (req, res) => {
    const { name, email, password } = req.body;

    if (!email || !password) {
        res.json({
            msg: "please add your email or password."
        })
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await UserModel.create({
        name,
        email,
        password: hashedPassword,
    });

    res.status(201).json({
        user: user.name
    })
}

export const SignIn = async (req, res, next) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.json({
            msg: "Provide your credinatials"
        })
    }

    const user = await UserModel.findOne({ email }).select("+password");

    if (!user) {
        return res.status(401).json({
            msg: "User doesn't exists."
        });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
        return res.status(401).json({
            msg: "Invalid credentials"
        });
    }

    res.status(200).json({
        user: user.name
    })
}