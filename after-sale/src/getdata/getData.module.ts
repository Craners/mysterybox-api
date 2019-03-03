import { Module } from '@nestjs/common';
import { GetDataController } from './getData.controller';
import { GetDataService } from './getData.service';
import { DatabaseModule } from 'dist/src/database/database.module';
import { DataModule } from 'src/data/data.module';

@Module({
    imports: [DatabaseModule, DataModule],
    controllers: [GetDataController],
    providers: [GetDataService]
})
export class GetDataModule { }
