import mongoose from "mongoose";

const clientSchema = new mongoose.Schema({
    name: String,
    email: String,
 
});

export default mongoose.model('Client', clientSchema);
