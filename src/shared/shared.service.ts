import { Injectable, Inject, HttpException, HttpStatus } from '@nestjs/common';
import { ShopService } from 'src/shop/shop.service';
var request = require('request-promise');

@Injectable()
export class SharedService {
  constructor(private readonly shopService: ShopService) {}

  async requestData(options): Promise<any> {
    return await request(options)
      .then(function(body) {
        return body;
      })
      .catch(function(err) {
        console.log(err);
        throw new HttpException(err, HttpStatus.INTERNAL_SERVER_ERROR);
      });
  }

  async checkParameterExists(
    params: any,
    parameterToCheck: string,
  ): Promise<boolean> {
    if (
      params[parameterToCheck] === undefined ||
      params[parameterToCheck] === null
    ) {
      return false;
    }

    return true;
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
