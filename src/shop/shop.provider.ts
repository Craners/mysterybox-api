import { Connection } from 'mongoose';
import { ShopSchema } from 'src/shared/schemas/ShopSchema.schema';

export const shopProviders = [
  {
    provide: 'GetShopModelToken',
    useFactory: (connection: Connection) =>
      connection.model('Shops', ShopSchema),
    inject: ['DbConnectionToken'],
  },
];
