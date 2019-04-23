import { Module } from '@nestjs/common';
import { SharedService } from './shared.service';
import { ShopDbModule } from 'src/shop-db/shop-db.module';

@Module({
  imports: [ShopDbModule],
  providers: [SharedService],
  exports: [SharedService],
})
export class SharedModule {}
