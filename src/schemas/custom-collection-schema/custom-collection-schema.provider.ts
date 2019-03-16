import { Connection } from 'mongoose';
import {customCollectionSchemaWrapperSchema } from './schemas/custom-collection-schema.schema';

export const customCollectionProviders = [
    {
        provide: 'CustomCollectionSchemaModelToken',
        useFactory: (connection: Connection) => connection.model('CustomCollections', customCollectionSchemaWrapperSchema),
        inject: ['DbConnectionToken']
    }
];