import mongoose from "mongoose";

const clientSchema = new mongoose.Schema({
    householdId: mongoose.Schema.Types.ObjectId,
    name: { type: String },
    sex: String,
    yearOfBirth: { type: Number, min: 1900 },
    isDependent: Boolean,
    dietaryRestrictions: [{ type: String }],
    phone: String,
    idType: String,
    idNumber: String,
});

export default mongoose.model("Client", clientSchema);
