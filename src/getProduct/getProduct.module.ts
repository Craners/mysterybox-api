import { Module } from '@nestjs/common';
import { GetProductController } from './getProduct.controller';
import { GetProductService } from './getProduct.service';
import { SharedModule } from 'src/shared/shared.module';

@Module({
  imports: [SharedModule],
  controllers: [GetProductController],
  providers: [GetProductService],
})
export class GetProductModule {}
