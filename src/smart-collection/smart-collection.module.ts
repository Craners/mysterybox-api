import { Module } from '@nestjs/common';
import { ShopModule } from 'src/shop/shop.module';
import { SmartCollectionController } from './smart-collection.controller';
import { SmartCollectionService } from './smart-collection.service';

@Module({
  imports: [ShopModule],
  controllers: [SmartCollectionController],
  providers: [SmartCollectionService],
})
export class SmartCollectionModule {}
