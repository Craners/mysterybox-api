import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthController } from './auth/auth.controller';
import { InitService } from './auth/init/init.service';
import { ConfigModule } from './config.module';

@Module({
  imports: [ConfigModule],
  controllers: [AppController, AuthController],
  providers: [AppService, InitService],
})
export class AppModule { }
