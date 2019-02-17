import { ISchemaCustomFields } from '../../shared/interfaces/ISchemaCustomFields.interface';
import { OrderIdType } from '../enums/orderIdType.enum';

export interface IOrderSchemaCustom extends ISchemaCustomFields {
    readonly order_type : OrderIdType
}