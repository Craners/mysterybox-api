interface ICustomCollectionSchema {
  readonly collectionId: string;
  readonly productId: string;
}

export interface ICustomCollectionSchemaWrapper {
  readonly shop: string;
  readonly custom_collection_schemas: [ICustomCollectionSchema];
}
