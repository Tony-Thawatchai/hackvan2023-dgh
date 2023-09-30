import mongoose from "mongoose";

const clientSchema = new mongoose.Schema({
    name: String,
    email: String,
    address: String,
    FamilyMount: Number,
    servedDate: String,
 

  
});

export default mongoose.model('Client', clientSchema);
