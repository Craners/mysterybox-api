import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { OrderController } from './order.controller';
import { OrderService } from './order.service';
import { orderProviders } from './order.provider';

@Module({
    imports: [DatabaseModule],
    controllers: [OrderController],
    providers: [OrderService, ...orderProviders]
})
export class OrderModule {}
