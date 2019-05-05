import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from './config.module';
import { ProductModule } from './product/Product.module';
import { AuthenticationModule } from './authentication/authentication.module';
import { CustomCollectionModule } from './custom-collection/custom-collection.module';
import { SmartCollectionModule } from './smart-collection/smart-collection.module';
import { CollectModule } from './collect/collect.module';
import { CustomCollectionSchemaModule } from './schemas/custom-collection-schema/custom-collection-schema.module';
import { ShopModule } from './shop/shop.module';
import { SharedModule } from './shared/shared.module';

@Module({
  imports: [
    ConfigModule,
    ProductModule,
    AuthenticationModule,
    CustomCollectionModule,
    SmartCollectionModule,
    CollectModule,
    CustomCollectionSchemaModule,
    ShopModule,
    SharedModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
