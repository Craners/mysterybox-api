import { Connection } from 'mongoose';
import { OrderFieldsSchema } from './schemas/OrderFields.schema';

export const orderProviders = [
    {
        provide: 'OrderModelToken',
        useFactory: (connection: Connection) => connection.model('Orders', OrderFieldsSchema),
        inject: ['DbConnectionToken']
    }
];