import { Module } from '@nestjs/common';
import { GetDataController } from './getData.controller';
import { GetDataService } from './getData.service';
import { DatabaseModule } from 'dist/src/database/database.module';
import { ShopModule } from 'src/shop/shop.module';

@Module({
    imports: [DatabaseModule, ShopModule],
    controllers: [GetDataController],
    providers: [GetDataService]
})
export class GetDataModule { }
