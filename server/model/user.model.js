import { model, Schema } from "mongoose";

// User Schema
const UserSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
}, { timestamps: true });

// User Model
const UserModel = model("User", UserSchema);

export default UserModel;
