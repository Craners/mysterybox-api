import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { shopProviders } from './shop.provider';
import { ShopService } from './shop.service';

@Module({
    imports: [DatabaseModule],
    providers: [ShopService, ...shopProviders],
    exports: [ShopService]
})
export class ShopModule { }