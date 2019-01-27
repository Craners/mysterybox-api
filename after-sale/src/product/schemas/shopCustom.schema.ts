import * as mongoose from 'mongoose';
import { ProductCustomSchema } from './productCustom.schema';

export const ShopSchema = new mongoose.Schema({
    product_type: String,
    custom_fields: [ProductCustomSchema]
})