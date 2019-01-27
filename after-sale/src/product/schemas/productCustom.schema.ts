import * as mongoose from 'mongoose';

export const ProductCustomSchema = new mongoose.Schema({
    field_name: String,
    label: String,
    values: [String],
    placeholder: String,
    required: Boolean,
    type: ['Text', 'Large Text', 'Number', 'Radio buttons', 'Checkboxes', 'Drop-down menu']
})