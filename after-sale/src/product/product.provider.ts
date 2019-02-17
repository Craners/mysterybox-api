import { Connection } from 'mongoose';
import { ProductSchemaFieldsSchema } from './schemas/ProductFields.schema';

export const productProviders = [
    {
        provide: 'ProductSchemaModelToken',
        useFactory: (connection: Connection) => connection.model('ProductSchemas', ProductSchemaFieldsSchema),
        inject: ['DbConnectionToken']
    }
];