import mongoose from "mongoose";

const datesServedSchema = new mongoose.Schema({
    householdId: mongoose.Schema.Types.ObjectId,
    date: Date,
});

export default mongoose.model("DatesServed", datesServedSchema);
