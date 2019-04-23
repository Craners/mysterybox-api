import { Injectable, Inject, HttpException, HttpStatus } from '@nestjs/common';
import { SharedService } from 'src/shared/shared.service';
import { ShopParams } from 'src/shared/params/shop.params';

@Injectable()
export class ShopService {
    constructor(private readonly sharedService: SharedService) { }

    async getShopInfo(queryParam: ShopParams): Promise<any> {
        const shopAccess = await this.sharedService.getShopAccess(queryParam);
        let options;
        if (shopAccess) {
            options = {
                uri: `https://${shopAccess.shop}/admin/api/2019-04/shop.json`,
                headers: {
                    'cache-control': 'no-cache',
                    'X-Shopify-Access-Token': shopAccess.access_token,
                },
                json: true,
            };
        } else {
            throw new HttpException('Shop data not found.', HttpStatus.NOT_FOUND);
        }

        return await this.sharedService.requestData(options);
    }

}
