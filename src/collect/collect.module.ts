import { Module } from '@nestjs/common';
import { SharedModule } from 'src/shared/shared.module';
import { CollectController } from './collect.controller';
import { CollectService } from './collect.service';

@Module({
  imports: [SharedModule],
  controllers: [CollectController],
  providers: [CollectService],
  exports: [CollectService],
})
export class CollectModule {}
