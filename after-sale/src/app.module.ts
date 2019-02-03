import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthController } from './auth/auth.controller';
import { InitService } from './auth/init/init.service';
import { ConfigModule } from './config.module';
import { ProductModule } from './product/product.module';

@Module({
  imports: [ConfigModule, ProductModule],
  controllers: [AppController, AuthController],
  providers: [AppService, InitService],
})
export class AppModule { }
