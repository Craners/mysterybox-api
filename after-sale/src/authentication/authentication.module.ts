import { Module } from '@nestjs/common';
import { AuthenticationController } from './authentication.controller';
import { AuthenticationService } from './authentication.service';
import { ConfigModule } from '../config.module';
import { ShopModule } from 'src/shop/shop.module';

@Module({
    imports: [ConfigModule, ShopModule],
    controllers: [AuthenticationController],
    providers: [AuthenticationService]
})
export class AuthenticationModule { }
