import { Module } from '@nestjs/common';
import { SharedService } from './shared.service';
import { ShopModule } from 'src/shop/shop.module';

@Module({
  imports: [ShopModule],
  providers: [SharedService],
  exports: [SharedService],
})
export class SharedModule {}
