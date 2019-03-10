import { Module } from '@nestjs/common';
import { GetProductController } from './getProduct.controller';
import { GetProductService } from './getProduct.service';
import { ShopModule } from 'src/shop/shop.module';
import { SharedModule } from 'src/shared/shared.module';

@Module({
  imports: [ShopModule, SharedModule],
  controllers: [GetProductController],
  providers: [GetProductService],
})
export class GetProductModule {}
