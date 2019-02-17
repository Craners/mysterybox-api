import * as mongoose from 'mongoose';

export const CustomObjectSchema = new mongoose.Schema({
    id: { type: Number, required: true },
    label: { type: String, required: false },
    values: { type: [String], required: true },
    type: { type: String, required: true, enum: ["Text", "Large Text", "Number", "Radio Buttons", "Checkboxes", "Drop-down Menu"] },
    objectType: {type: String, required: true, enum: ["Product", "Order"]}
})