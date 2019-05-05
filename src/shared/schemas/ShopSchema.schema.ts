import * as mongoose from 'mongoose';

export const ShopSchema = new mongoose.Schema({
  shop: { type: String, unique: true },
  access_token: { type: String, required: true },
  mystery_box_collection_id: { type: String },
});
