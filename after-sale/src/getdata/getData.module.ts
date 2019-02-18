import { Module } from '@nestjs/common';
// import { DatabaseModule } from '../database/database.module';
import { GetDataController } from './getData.controller';
import { getDataService } from './getData.service';
// import { orderProviders } from './order.provider';

@Module({
    imports: [],
    controllers: [GetDataController],
    // providers: [OrderService, ...orderProviders]
    providers: [getDataService]
})
export class GetDataModule { }
