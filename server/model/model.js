import mongoose from "mongoose";

const clientSchema = new mongoose.Schema({
    householdId: mongoose.Schema.Types.ObjectId,
    name: String { type: String },
    sex: String,
    yearOfBirth: Number { type: Number, min: 1900 },
    isDependent: Boolean,
    dietaryRestrictions: [{ type: String }],
    idType: String,
    idNumber: String,
});

const householdSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    address: String,
    numMouths: { type: Number, min: 1, default: 1 },
    completed: { type: Boolean, default: true },
    datesServed: [{ type: Date }],
    notes:  [{ type: String }],
});

const userSchema = new mongoose.Schema({
    username: String,
    password: String,
    isAdmin: Boolean,
});

export default mongoose.model('Client', clientSchema);
export default mongoose.model('Household', householdSchema);

