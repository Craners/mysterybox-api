import { Injectable, Inject, HttpException, HttpStatus } from '@nestjs/common';
import { ShopDbService } from 'src/shop-db/shop-db.service';
import request = require('request-promise');

@Injectable()
export class SharedService {
  constructor(private readonly shopService: ShopDbService) {}

  async requestData(options): Promise<any> {
    return await request(options)
      .then(body => {
        return body;
      })
      .catch(err => {
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
        `no query parameter 'shop'`,
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }

    const shopData = await this.shopService.getShopDbData(queryParam.shop);

    const shopKey = 'shop';
    const shop = shopData[shopKey];
    const accessTokenKey = 'access_token';
    const accessToken = shopData[accessTokenKey];

    return {
      shop: shop,
      access_token: accessToken,
    };
  }
}
