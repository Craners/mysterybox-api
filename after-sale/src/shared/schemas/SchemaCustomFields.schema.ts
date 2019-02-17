import * as mongoose from 'mongoose';

export const SchemaCustomFieldsSchema = new mongoose.Schema({
    field_name: { type: String, required: true },
    label: { type: String, required: false },
    values: { type: [String], required: true },
    placeholder: { type: String, required: false },
    required: { type: Boolean, required: true },
    type: { type: String, required: true, enum: ["Text", "Large Text", "Number", "Radio Buttons", "Checkboxes", "Drop-down Menu"] }
})