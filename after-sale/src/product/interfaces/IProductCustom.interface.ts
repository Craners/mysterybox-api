import { ICustomFields } from '../../shared/interfaces/ICustomFields.interface';
import { ProductIdType } from '../enums/productIdType.enum';

export interface IProductCustom extends ICustomFields {
    readonly product_type : ProductIdType
}