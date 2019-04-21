import { Document } from 'mongoose';
import { FieldType } from '../enums/fields.enum';

export interface ISchemaCustomFields extends Document {
  readonly field_name: string;
  label: string;
  values: [string];
  placeholder: string;
  required: boolean;
  type: FieldType;
}
