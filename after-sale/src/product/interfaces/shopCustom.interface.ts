import { IProductCustom } from './productCustom.interface';

export interface IShopCustom extends Document {
    readonly product_type: String,
    readonly custom_fields: [IProductCustom]
}