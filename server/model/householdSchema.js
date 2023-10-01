import mongoose from "mongoose";

const householdSchema = new mongoose.Schema({
    address: String,
    postalCode: String,
    community: String,
    weekGroup: String,
    numMouths: { type: Number, min: 1, default: 1 },
    completed: { type: Boolean, default: true },
    notes: [{ type: String }],
});

export default mongoose.model("Household", householdSchema);
