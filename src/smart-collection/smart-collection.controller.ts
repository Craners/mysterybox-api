import { Controller, Get, Query } from '@nestjs/common';
import { SmartCollectionService } from './smart-collection.service';
import { ShopParams } from 'src/shared/params/shop.params';

@Controller('smart-collection')
export class SmartCollectionController {
    constructor(private readonly smartCollectionService: SmartCollectionService) { }
  
    @Get()
    async getCustomCollection(@Query() queryParams: ShopParams): Promise<any> {
        return await this.smartCollectionService.getSmartCollections(queryParams);
    }
}
