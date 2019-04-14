import { Module } from '@nestjs/common';
import { SmartCollectionController } from './smart-collection.controller';
import { SmartCollectionService } from './smart-collection.service';
import { SharedModule } from 'src/shared/shared.module';

@Module({
  imports: [SharedModule],
  controllers: [SmartCollectionController],
  providers: [SmartCollectionService],
})
export class SmartCollectionModule {}
