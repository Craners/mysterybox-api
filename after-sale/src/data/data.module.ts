import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { dataProviders } from './data.provider';
import { DataService } from './data.service';

@Module({
    imports: [DatabaseModule],
    providers: [DataService, ...dataProviders],
    exports: [DataService]
})
export class DataModule { }