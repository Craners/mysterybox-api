import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { shopDbProviders } from './shop-db.provider';
import { ShopDbService } from './shop-db.service';

@Module({
  imports: [DatabaseModule],
  providers: [ShopDbService, ...shopDbProviders],
  exports: [ShopDbService],
})
export class ShopDbModule {}
