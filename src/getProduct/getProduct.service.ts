import { Injectable, Inject, HttpException, HttpStatus } from '@nestjs/common';
import { ShopService } from 'src/shop/shop.service';
var request = require('request-promise');

@Injectable()
export class GetProductService {
  constructor(private readonly shopService: ShopService) {}

  async getProducts(queryParam: any): Promise<any> {
    if (queryParam.shop === undefined || queryParam.shop === null) {
      throw new HttpException(
        "no query parameter 'shop'",
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }

    const shopData = await this.shopService.getShopData(queryParam.shop);

    let shop = shopData['shop'];
    let access_token = shopData['access_token'];

    var options = {
      uri: `https://${shop}/admin/products.json`,
      headers: {
        'cache-control': 'no-cache',
        'X-Shopify-Access-Token': access_token,
      },
    };

    return await request(options)
      .then(function(data) {
        return data;
      })
      .catch(function(err) {
        throw new HttpException(err, HttpStatus.INTERNAL_SERVER_ERROR);
      });
  }
}
