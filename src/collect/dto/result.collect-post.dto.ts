import { Type, adjust } from 'specified';

export class ResultCollectPostDtoBase {
  collect: {
    readonly id: number;
    collectionId: number;
    productId: number;
  };
  statusCode: number;
}

export const ResultCollectPostDtoSpec = {
  id: Type.number,
  collection_id: Type.number,
  product_id: Type.number,
};

export const ResultCollectPostDto = Type.object({
  collect: adjust(Type.object(ResultCollectPostDtoSpec), {
    strict: false,
  }),
  statusCode: Type.number,
});
