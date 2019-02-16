import { Module } from '@nestjs/common';
// import { DatabaseModule } from '../database/database.module';
import { AuthenticationController } from './authentication.controller';
import { AuthenticationService } from './authentication.service';
import { ConfigModule } from '../config.module';

@Module({
    imports: [ConfigModule],
    controllers: [AuthenticationController],
    // providers: [OrderService, ...orderProviders]
    providers: [AuthenticationService]
})
export class AuthenticationModule { }
