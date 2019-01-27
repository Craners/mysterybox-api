import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthController } from './auth/auth.controller';
import { InitService } from './auth/init/init.service';
import { ConfigModule } from './config.module';
import { ProductController } from './product/product.controller';
import { RepositoryService } from './product/repository/repository.service';

@Module({
  imports: [ConfigModule],
  controllers: [AppController, AuthController, ProductController],
  providers: [AppService, InitService, RepositoryService],
})
export class AppModule { }
