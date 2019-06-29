import { Type, adjust } from 'specified';

export class ResultCutomCollectionBase {
  custom_collection: {
    readonly id: number
    handle: string;
    title: string;
  };
  statusCode: number;
}

export const ResultCutomCollectionSpec = {
  id: Type.number,
  handle: Type.string,
  title: Type.string,
};

export const ResultCutomCollectionPostDto = Type.object({
  custom_collection: adjust(Type.object(ResultCutomCollectionSpec), {
    strict: false,
  }),
  statusCode: Type.number,
});
