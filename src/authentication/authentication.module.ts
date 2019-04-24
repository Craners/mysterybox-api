import { Module } from '@nestjs/common';
import { AuthenticationController } from './authentication.controller';
import { AuthenticationService } from './authentication.service';
import { ConfigModule } from '../config.module';
import { ShopDbModule } from 'src/shop-db/shop-db.module';
import { CustomCollectionModule } from 'src/custom-collection/custom-collection.module';

@Module({
  imports: [ConfigModule, ShopDbModule, CustomCollectionModule],
  controllers: [AuthenticationController],
  providers: [AuthenticationService],
})
export class AuthenticationModule {}
