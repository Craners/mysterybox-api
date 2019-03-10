import { Injectable, Inject, HttpException, HttpStatus } from '@nestjs/common';
import { ShopService } from 'src/shop/shop.service';
var request = require('request-promise');

@Injectable()
export class SharedService {
  constructor(private readonly shopService: ShopService) {}

  async requestData(options): Promise<any> {
    return await request(options)
      .then(function(data) {
        var jsonObject = JSON.parse(data);
        return jsonObject;
      })
      .catch(function(err) {
        console.log(err);
        throw new HttpException(err, HttpStatus.INTERNAL_SERVER_ERROR);
      });
  }

  async getShopAccess(queryParam: any): Promise<any> {
    if (queryParam.shop === undefined || queryParam.shop === null) {
      throw new HttpException(
        "no query parameter 'shop'",
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }

    const shopData = await this.shopService.getShopData(queryParam.shop);

    let shop = shopData['shop'];
    let access_token = shopData['access_token'];

    return {
      shop: shop,
      access_token: access_token,
    };
  }
}
