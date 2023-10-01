import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: String,
    password: String,
    isAdmin: Boolean,
});

export default mongoose.model("User", userSchema);
