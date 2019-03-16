import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from './config.module';
import { GetProductModule } from './getProduct/Product.module';
import { AuthenticationModule } from './authentication/authentication.module';
import { CustomCollectionModule } from './custom-collection/custom-collection.module';
import { SmartCollectionModule } from './smart-collection/smart-collection.module';
import { CollectModule } from './collect/collect.module';
import { CustomCollectionSchemaModule } from './schemas/custom-collection-schema/custom-collection-schema.module';

@Module({
  imports: [
    ConfigModule,
    GetProductModule,
    AuthenticationModule,
    CustomCollectionModule,
    SmartCollectionModule,
    CollectModule,
    CustomCollectionSchemaModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
