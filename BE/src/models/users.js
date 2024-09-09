import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    isAdmin: {
        type: Boolean,
        default: true
    },
    phone: {
        type: Number,
        required: true
    },
    access_Token: {
        type: String,
        required: false
    },
    refresh_Token: {
        type: String, 
        required: false
    },
    bio: {
        type: String,
    },
    birthday: {
        type: String,
    },
    refreshToken: {
      type: String,
    },
    posts: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "post",
        required: true
    }},
    {
        timestamps: true
    }
)
const UserModel = mongoose.model("users", userSchema);
export default UserModel;