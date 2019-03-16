import { Module } from '@nestjs/common';
import { ProductController } from './getProduct.controller';
import { ProductService } from './getProduct.service';
import { SharedModule } from 'src/shared/shared.module';

@Module({
  imports: [SharedModule],
  controllers: [ProductController],
  providers: [ProductService],
})
export class GetProductModule {}
