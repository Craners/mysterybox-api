import { Injectable, Inject, HttpException, HttpStatus } from '@nestjs/common';
import { ShopService } from 'src/shop/shop.service';
import { SharedService } from 'src/shared/shared.service';

@Injectable()
export class GetProductService {
  constructor(
    private readonly shopService: ShopService,
    private readonly sharedService: SharedService,
  ) {}

  async getAllProducts(queryParam: any): Promise<any> {
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

  async getProductsbyId(queryParam: any, id: any): Promise<any> {
    console.log(`this is the ${queryParam.shop} and this is the id: ${id.id}`);

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
    throw new Error('Method not implemented.');
  }
}
