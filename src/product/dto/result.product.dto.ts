import { Type, adjust } from 'specified';

export class ResultCreateProductBase {
  product: {
    readonly id: number;
    handle: string;
    title: string;
  };
}

export const ResultCreateProductSpec = {
  product: {
    id: Type.number,
    handle: Type.string,
    title: Type.string,
  }
};

export const ResultCreateProduct = Type.object({
  statusCode: Type.string,
  body: adjust(Type.object(ResultCreateProductSpec.product), {
    strict: false,
  }),
});
