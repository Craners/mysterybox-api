import { Connection } from 'mongoose';
import { ProductFieldsSchema } from './schemas/ProductFields.schema';

export const productProviders = [
    {
        provide: 'ProductModelToken',
        useFactory: (connection: Connection) => connection.model('Products', ProductFieldsSchema),
        inject: ['DbConnectionToken']
    }
];