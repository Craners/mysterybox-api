import { Module } from '@nestjs/common';
import { ShopModule } from 'src/shop/shop.module';
import { CustomCollectionController } from './custom-collection.controller';
import { CustomCollectionService } from './custom-collection.service';

@Module({
  imports: [ShopModule],
  controllers: [CustomCollectionController],
  providers: [CustomCollectionService],
})
export class CustomCollectionModule {}
