import { Module } from '@nestjs/common';
import { SharedModule } from 'src/shared/shared.module';
import { ShopController } from './shop.controller';
import { ShopService } from './shop.service';

@Module({
  imports: [SharedModule],
  controllers: [ShopController],
  providers: [ShopService],
})
export class ShopModule {}
