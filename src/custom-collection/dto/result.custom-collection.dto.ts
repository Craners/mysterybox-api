import { Type, adjust } from 'specified';

export class ResultCutomCollectionBase {
  readonly id: number;
  handle: string;
  title: string;
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
});