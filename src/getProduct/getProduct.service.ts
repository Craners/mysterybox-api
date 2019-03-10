import { Injectable, Inject, HttpException, HttpStatus } from '@nestjs/common';
import { SharedService } from 'src/shared/shared.service';
import { ShopParams } from 'src/shared/params/shop.params';

@Injectable()
export class GetProductService {
  constructor(private readonly sharedService: SharedService) {}

  async getAllProducts(queryParam: ShopParams): Promise<any> {
    var shopAccess = await this.sharedService.getShopAccess(queryParam);

    if (shopAccess) {
      var options = {
        uri: `https://${shopAccess.shop}/admin/products.json`,
        headers: {
          'cache-control': 'no-cache',
          'X-Shopify-Access-Token': shopAccess.access_token,
        },
      };
    }

    return await this.sharedService.requestData(options);
  }

  async getProductsbyId(queryParam: ShopParams, id: any): Promise<any> {
    console.log(`this is the ${queryParam.shop} and this is the id: ${id.id}`);

    var shopAccess = await this.sharedService.getShopAccess(queryParam);

    if (shopAccess) {
      var options = {
        uri: `https://${shopAccess.shop}/admin/products.json`,
        headers: {
          'cache-control': 'no-cache',
          'X-Shopify-Access-Token': shopAccess.access_token,
        },
        json: true, // Automatically stringifies the body to JSON
      };
    }

    var shopData = await this.sharedService.requestData(options);
    return shopData;
  }
}
