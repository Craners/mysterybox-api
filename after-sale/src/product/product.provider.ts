import { Connection } from 'mongoose';
import { ProductCustomSchema } from './schemas/productCustom.schema';

export const productProviders = [
    {
        provide: 'ProductModelToken',
        useFactory: (connection: Connection) => connection.model('Products', ProductCustomSchema),
        inject: ['DbConnectionToken']
    }
];