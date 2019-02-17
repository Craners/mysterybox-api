import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { CustomObjectController } from './custom-object.controller';
import { CustomObjectService } from './custom-object.service';
import { customObjectProviders } from './custom-object.provider';

@Module({
    imports: [DatabaseModule],
    controllers: [CustomObjectController],
    providers: [CustomObjectService, ...customObjectProviders]
})
export class CustomObjectModule { }