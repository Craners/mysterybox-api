import { Document } from 'mongoose';

export interface IProductCustom extends Document {
    readonly field_name: String,
    readonly label: String,
    readonly values: [String],
    readonly placeholder: String,
    readonly required: Boolean,
    readonly type: ['Text', 'Large Text', 'Number', 'Radio buttons', 'Checkboxes', 'Drop-down menu'] 
}