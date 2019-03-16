import * as mongoose from 'mongoose';

const CustomCollectionSchemaSchema = new mongoose.Schema({
  collectionId: { type: String, required: true },
  productId: { type: String, required: true },
});

export const customCollectionSchemaWrapperSchema = new mongoose.Schema({
  shop: { type: String, index: true, unique: true },
  custom_collection_schemas: [CustomCollectionSchemaSchema],
});
