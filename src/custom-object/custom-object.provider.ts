import { Connection } from 'mongoose';
import { CustomObjectSchema } from 'src/custom-object/schemas/CustomObject.schema';

export const customObjectProviders = [
    {
        provide: 'CustomObjectModelToken',
        useFactory: (connection: Connection) => connection.model('Objects', CustomObjectSchema),
        inject: ['DbConnectionToken']
    }
];