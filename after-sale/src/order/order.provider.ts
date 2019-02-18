import { Connection } from 'mongoose';
import { OrderSchemaFieldsSchema } from './schemas/OrderSchemaFields.schema';

export const orderProviders = [
    {
        provide: 'OrderModelToken',
        useFactory: (connection: Connection) => connection.model('Orders', OrderSchemaFieldsSchema),
        inject: ['DbConnectionToken']
    }
];