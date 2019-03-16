import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { customCollectionProviders } from './custom-collection-schema.provider';
import { SharedModule } from 'src/shared/shared.module';
import { CustomCollectionSchemaController } from './custom-collection-schema.controller';
import { CustomCollectionSchemaService } from './custom-collection-schema.service';

@Module({
  imports: [DatabaseModule, SharedModule],
  controllers: [CustomCollectionSchemaController],
  providers: [CustomCollectionSchemaService, ...customCollectionProviders],
})
export class CustomCollectionSchemaModule {}
