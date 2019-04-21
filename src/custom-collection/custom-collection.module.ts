import { Module } from '@nestjs/common';
import { CustomCollectionController } from './custom-collection.controller';
import { CustomCollectionService } from './custom-collection.service';
import { SharedModule } from 'src/shared/shared.module';

@Module({
  imports: [SharedModule],
  controllers: [CustomCollectionController],
  providers: [CustomCollectionService],
  exports: [CustomCollectionService],
})
export class CustomCollectionModule {}
