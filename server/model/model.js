import mongoose from "mongoose";

const clientSchema = new mongoose.Schema({
    householdId: mongoose.Schema.Types.ObjectId,
    name: String { type: String },
    sex: String,
    yearOfBirth: Number { type: Number, min: 1900 },
    isDependent: Boolean,
    dietaryRestrictions: [{ type: String }],
    phone: String,
    idType: String,
    idNumber: String,
});

const householdSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    address: String,
    postalCode: String,
    community: String,
    weekGroup: String,
    numMouths: { type: Number, min: 1, default: 1 },
    completed: { type: Boolean, default: true },
    notes:  [{ type: String }],
});

const datesServedSchema = new mongoose.Schema({
    householdId: mongoose.Schema.Types.ObjectId,
    date: Date,
});

const userSchema = new mongoose.Schema({
    username: String,
    password: String,
    isAdmin: Boolean,
});

export default mongoose.model('Client', clientSchema);
export default mongoose.model('Household', householdSchema);

