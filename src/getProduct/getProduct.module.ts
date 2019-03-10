import { Module } from '@nestjs/common';
import { GetProductController } from './getProduct.controller';
import { GetProductService } from './getProduct.service';
import { ShopModule } from 'src/shop/shop.module';

@Module({
  imports: [ShopModule],
  controllers: [GetProductController],
  providers: [GetProductService],
})
export class GetProductModule {}
