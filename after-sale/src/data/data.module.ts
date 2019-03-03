import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { dataProviders } from './data.provider';
import { ShopService } from './shop.service';

@Module({
    imports: [DatabaseModule],
    providers: [ShopService, ...dataProviders],
    exports: [ShopService]
})
export class DataModule { }