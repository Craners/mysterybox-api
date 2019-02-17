import { ISchemaCustomFields } from '../../shared/interfaces/ISchemaCustomFields.interface';
import { ProductIdType } from '../enums/productIdType.enum';

export interface IProductSchemaCustom extends ISchemaCustomFields {
    readonly product_type : ProductIdType
}