import { Injectable } from '@nestjs/common';
import { SharedService } from 'src/shared/shared.service';

@Injectable()
export class SmartCollectionService {
    constructor(private readonly sharedService: SharedService) {}

    async getSmartCollections(queryParam: any): Promise<any> {
        const shopData = await this.sharedService.getShopAccess(queryParam);
    
        if (shopData) {
          var options = {
            uri: `https://${shopData.shop}/admin/smart_collections.json`,
            headers: {
              'cache-control': 'no-cache',
              'X-Shopify-Access-Token': shopData.access_token,
            },
          };
        }
    
        return await this.sharedService.requestData(options);
      }
}
