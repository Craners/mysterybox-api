import { Document } from 'mongoose';
import { FieldType } from '../../shared/enums/fields.enum';
import { ObjectType } from '../enums/objectType.enum';

export interface ICustomObject extends Document {
    readonly id: Number,
    readonly type: FieldType,
    readonly values: [String],
    readonly label: String
    readonly objectType: ObjectType
}