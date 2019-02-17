import * as mongoose from 'mongoose';

export const ProductSchemaFieldsSchema = new mongoose.Schema({
    product_type: {type: String, required: true, enum: ["Type", "Vendor", "Tag", "URL", "Handle"]},
    field_name: { type: String, required: true },
    label: { type: String, required: false },
    values: { type: [String], required: false },
    placeholder: { type: String, required: false },
    required: { type: Boolean, required: true },
    type: { type: String, required: true, enum: ["Text", "Large Text", "Number", "Radio Buttons", "Checkboxes", "Drop-down Menu"] }
})