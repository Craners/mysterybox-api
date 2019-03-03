import { Module } from '@nestjs/common';
import { GetDataController } from './getData.controller';
import { GetDataService } from './getData.service';
import { ShopModule } from 'src/shop/shop.module';

@Module({
    imports: [ ShopModule],
    controllers: [GetDataController],
    providers: [GetDataService]
})
export class GetDataModule { }
